// @ts-nocheck
/* eslint-disable no-restricted-syntax */
import { getShortProperty } from '../properties/getShortProperty';
import { getStyleTag } from '../system/getStyleTag';
import { defaultFun } from '../system/setup';
import { As, CSSRules } from '../types';
import { isDev, isServer } from '../utilities/is';
import processEntries from './processEntries';
import processPseudoEntries, { Pseudo } from './processPseudoEntries';

export interface NestedPseudo {
  [key: string]: Pseudo;
}

export interface Props {
  as?: As;
  children?: any;
  fun?: boolean;
  css: CSSRules;
  [key: string]: any;
}

const IS_PSEUDO = /[&:+^.#*, >~[=$]/;

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

    const media = property === 'media';
    let fun = false;
    if (
      defaultFun &&
      renderPseudoProperties &&
      propertyIsString &&
      IS_PSEUDO.exec(cssProperty)
    )
      fun = true;

    const cacheKey = propertyIsString
      ? `${property}${value}`
      : `${property}${Object.entries(value)}${
          media ? Object.entries(value).map((k, v) => Object.entries(v)) : ''
        }`;
    const cachedClassNames = CACHE_PROCESS.get(cacheKey);

    if (cachedClassNames) {
      if (!Array.isArray(cssProperty)) {
        classNamesByProperty.set(cssProperty, cachedClassNames);
      } else {
        for (let i = 0; i < cssProperty.length; i++) {
          classNamesByProperty.set(cssProperty[i], cachedClassNames);
        }
      }
    } else if (!fun && !media) {
      processEntries(
        cssProperty,
        value as string,
        (p: string, className: string | string[]) => {
          classNamesByProperty.set(p, className);
          CACHE_PROCESS.set(cacheKey, className);
        }
      );
    } else if (!media) {
      classNamesByProperty.set(
        cssProperty,
        processPseudoEntries(value, cssProperty)
      );
    } else {
      for (const mediaQuery in css.media) {
        const cssEntries = css.media[mediaQuery];

        for (const cssP in cssEntries) {
          const cssV = cssEntries[cssP];

          const cssPLong = getShortProperty(cssP) || cssP;

          const valueIsPseudo = IS_PSEUDO.exec(cssV);

          if (!valueIsPseudo) {
            processEntries(
              cssPLong,
              cssV as string,
              (p: string, className: string | string[]) => {
                classNamesByProperty.set(p, className);
                CACHE_PROCESS.set(cacheKey, className);
              },
              undefined,
              mediaQuery
            );
          } else {
            classNamesByProperty.set(
              cssPLong,
              processPseudoEntries(cssV, cssPLong, mediaQuery)
            );
          }
        }
      }
    }
  }
  /* eslint-enable guard-for-in */

  return !returnClassNamesByProperty
    ? Array.from(classNamesByProperty.values()).flat()
    : classNamesByProperty;
};

export default processCss;
