// @ts-nocheck
import { getShortProperty } from '../properties/getShortProperty';
import { defaultFun } from '../system/setup';
import ifStrToKebabCase from '../utilities/ifStrToKebabCase';
import processEntries from './processEntries';
import processPseudoEntries, { Pseudo } from './processPseudoEntries';

export interface NestedPseudo {
  [key: string]: Pseudo;
}

export interface Props {
  as?: string;
  children?: any;
  fun?: boolean;
  [key: string]: any;
}

/**
 *  Checks all props if they are valid to be processed by Juhuui.
 *  Returns class names for valid ones and the rest are forwarded.
 */

const CACHE = new Map();

export const processCss = ({
  css,
  fun: renderPseudoProperties = defaultFun
}: Props) => {
  const classNamesByProperty = new Map();

  for (let i = 0, entries = Object.entries(css); i < entries.length; i++) {
    const [propName, propVal]: [
      string,
      Pseudo | NestedPseudo | string | number
    ] = entries[i];

    const cssProperty = getShortProperty(propName) || propName;

    const propertyIsString = typeof cssProperty === 'string';

    let fun = false;
    if (
      renderPseudoProperties &&
      propertyIsString &&
      cssProperty.match(/[&:+^.#*, >~[=$]/g)
    )
      fun = true;

    const cacheKey = propertyIsString
      ? `${propName}${propVal}`
      : `${propName}${Object.entries(propVal)}`;
    const cachedClassNames = CACHE.get(cacheKey);

    if (cachedClassNames) {
      if (!Array.isArray(cssProperty)) {
        classNamesByProperty.set(cssProperty, cachedClassNames);
      } else {
        for (let j = 0; j < cssProperty.length; j++) {
          classNamesByProperty.set(cssProperty[j], cachedClassNames);
        }
      }
    } else if (fun) {
      const pseudoSelector = ifStrToKebabCase(cssProperty);

      classNamesByProperty.set(
        pseudoSelector,
        processPseudoEntries(propVal, pseudoSelector)
      );
    } else {
      processEntries(
        cssProperty,
        propVal as string,
        (p: string, className: string | string[]) => {
          classNamesByProperty.set(p, className);
          CACHE.set(cacheKey, className);
        }
      );
    }
  }

  return {
    classNames: Array.from(classNamesByProperty.values()).flat()
  };
};

export default processCss;
