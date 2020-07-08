import { defaultFun } from '../system/setup';
import ifStrToKebabCase from '../utilities/ifStrToKebabCase';
import isValidProp from './isValidProp';
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

function processProps() {
  const CACHE = new Map();

  return ({ children, as, fun = defaultFun, ...props }: Props) => {
    const returnProps: any = { children, as };

    const classNamesByProperty = new Map();

    for (let i = 0, entries = Object.entries(props); i < entries.length; i++) {
      const [propName, propVal]: [
        string,
        Pseudo | NestedPseudo | string | number
      ] = entries[i];

      const valid = isValidProp(propName, fun);
      const { property } = valid;

      if (!property) {
        returnProps[propName] = propVal;
      } else {
        const isCacheCompatible = !valid.fun;
        const cacheKey = isCacheCompatible && `${propName}${propVal}`;
        const cachedClassNames = isCacheCompatible && CACHE.get(cacheKey);

        if (cachedClassNames) {
          if (!Array.isArray(property)) {
            classNamesByProperty.set(property, cachedClassNames);
          } else {
            for (let j = 0; j < property.length; j++) {
              classNamesByProperty.set(property[j], cachedClassNames);
            }
          }
        } else if (valid.fun) {
          if (propName === 'pseudo') {
            for (let j = 0, e = Object.entries(propVal); j < e.length; j++) {
              const [selector, pseudoValues]: [string, Pseudo] = e[j];

              const selectorWithAmp = selector.includes('&')
                ? selector
                : `& ${selector}`;
              classNamesByProperty.set(
                selectorWithAmp,
                processPseudoEntries(pseudoValues, selectorWithAmp)
              );
            }
          } else {
            const pseudoSelector = ifStrToKebabCase(property);
            const classNames = processPseudoEntries(
              propVal as Pseudo,
              pseudoSelector as string
            );
            classNamesByProperty.set(property, classNames);
          }
        } else {
          processEntries(
            property,
            propVal as string,
            (p: string, className: string | string[]) => {
              classNamesByProperty.set(p, className);
              isCacheCompatible && CACHE.set(cacheKey, className);
            }
          );
        }
      }
    }

    return {
      classNames: Array.from(classNamesByProperty.values()).flat(),
      returnProps
    };
  };
}

export default processProps();
