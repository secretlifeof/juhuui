/**
 *  Returns classNames [string|arr]
 *  Calls getClassName that creates css-string/hashed className
 */

import getClassName from '../system/getClassName';
import { themeInternal as theme } from '../system/setup';
import type { InputValue } from '../types';

const createCss = (
  property: string[] | string,
  value: InputValue,
  selector?: string
): string | string[] => {
  if (value === null || value === undefined) return '';

  if (!Array.isArray(value) && !Array.isArray(property)) {
    return getClassName(property, value, undefined, selector);
  }

  if (Array.isArray(value)) {
    const classNames: string[] = [];

    for (let i = 0; i < value.length; i++) {
      const v = value[i];
      if (!Array.isArray(property) && v) {
        classNames.push(
          getClassName(
            property,
            v,
            i > 0 ? theme.breakpoints[i - 1] : undefined,
            selector,
            value
          )
        );
      }

      if (Array.isArray(property) && v) {
        for (let j = 0; j < property.length; j++) {
          classNames.push(
            getClassName(
              property[j],
              v,
              i > 0 ? theme.breakpoints[i - 1] : undefined,
              selector,
              value
            )
          );
        }
      }
    }

    return Array.from(new Set(classNames));
  }

  if (Array.isArray(property) && !Array.isArray(value)) {
    const classNames: string[] = [];

    for (let j = 0; j < property.length; j++) {
      classNames.push(getClassName(property[j], value, undefined, selector));
    }

    return classNames;
  }

  return '';
};

export default createCss;
