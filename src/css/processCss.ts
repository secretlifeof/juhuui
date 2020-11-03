// @ts-nocheck
/* eslint-disable no-restricted-syntax */
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

export const processCss = (
  { css, fun: renderPseudoProperties = defaultFun }: Props,
  organizedClassNames?: any
) => {
  const { preProcessedCss, returnClassNamesByProperty = false } =
    organizedClassNames || {};
  const classNamesByProperty = new Map(!preProcessedCss ? [] : preProcessedCss);

  /* eslint-disable guard-for-in */
  for (const property in css) {
    const value = css[property];

    const cssProperty = getShortProperty(property) || property;

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
      ? `${property}${value}`
      : `${property}${Object.entries(value)}`;
    const cachedClassNames = CACHE_PROCESS.get(cacheKey);

    if (cachedClassNames) {
      if (!Array.isArray(cssProperty)) {
        classNamesByProperty.set(cssProperty, cachedClassNames);
      } else {
        for (let i = 0; i < cssProperty.length; i++) {
          classNamesByProperty.set(cssProperty[i], cachedClassNames);
        }
      }
    } else if (!fun) {
      processEntries(
        cssProperty,
        value as string,
        (p: string, className: string | string[]) => {
          classNamesByProperty.set(p, className);
          CACHE_PROCESS.set(cacheKey, className);
        }
      );
    } else {
      classNamesByProperty.set(
        cssProperty,
        processPseudoEntries(value, cssProperty)
      );
    }
  }
  /* eslint-enable guard-for-in */

  return !returnClassNamesByProperty
    ? Array.from(classNamesByProperty.values()).flat()
    : classNamesByProperty;
};

export default processCss;
