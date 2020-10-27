// @ts-nocheck
import { getShortProperty } from '../properties/getShortProperty';
import { getStyleTag } from '../system/getStyleTag';
import { defaultFun } from '../system/setup';
import { isDev, isServer } from '../utilities/is';
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

const getSSRData = () => {
  const target = getStyleTag();
  const dataset = target.dataset.process;
  return dataset ? JSON.parse(dataset) : [];
};

export const CACHE_PROCESS = new Map(!isServer && !isDev ? getSSRData() : []);

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
      defaultFun &&
      renderPseudoProperties &&
      propertyIsString &&
      cssProperty.match(/[&:+^.#*, >~[=$]/)
    )
      fun = true;

    const cacheKey = propertyIsString
      ? `${propName}${propVal}`
      : `${propName}${Object.entries(propVal)}`;
    const cachedClassNames = CACHE_PROCESS.get(cacheKey);

    if (cachedClassNames) {
      if (!Array.isArray(cssProperty)) {
        classNamesByProperty.set(cssProperty, cachedClassNames);
      } else {
        for (let j = 0; j < cssProperty.length; j++) {
          classNamesByProperty.set(cssProperty[j], cachedClassNames);
        }
      }
    } else if (fun) {
      classNamesByProperty.set(
        cssProperty,
        processPseudoEntries(propVal, cssProperty)
      );
    } else {
      processEntries(
        cssProperty,
        propVal as string,
        (p: string, className: string | string[]) => {
          classNamesByProperty.set(p, className);
          CACHE_PROCESS.set(cacheKey, className);
        }
      );
    }
  }

  return {
    classNames: Array.from(classNamesByProperty.values()).flat()
  };
};

export default processCss;
