// @ts-nocheck
/**
 *  Creates or returns classNames
 */

import checkTheme from '../theme/checkTheme';
import hash from '../utilities/hash';
import { ifStrToKebabCase } from '../utilities/ifStrToKebabCase';
import { isDev } from '../utilities/is';
import getPrecedence from './getPrecedence';
import updateSheet from './updateSheet';

export const CACHE_CLASSNAMES = new Map();
const usedClassNames = new Map();

const getClassName = (
  propertyCamelCased: string,
  value: string | number,
  media: string | undefined | number = '',
  selector: string | undefined = '',
  mediaArr?: Array<string | number | null> | false
) => {
  const property = ifStrToKebabCase(propertyCamelCased);
  const key = `${media}${selector}${property}${!mediaArr ? value : mediaArr}`;

  const { precedence } = getPrecedence(property as string);

  let className = CACHE_CLASSNAMES.get(key);
  if (!className) {
    const themedValue = checkTheme(property, value);

    let devClassName = '';
    if (isDev) {
      if (typeof value === 'object') {
        console.log('VALUE is OBJECT', property, value);
      }

      devClassName = `${property}-${themedValue}${media ? `-${media}` : ''}${
        selector ? `-PP${selector.replace(' ', '-')}` : ''
      })`.replace(/[~!@$%^&*()+=,.';:"?/><[\]{}`# ]/g, '');
      const usedClassName = usedClassNames.get(devClassName);

      if (usedClassName) {
        devClassName += usedClassName;
        usedClassNames.set(devClassName, usedClassName + 1);
      } else {
        usedClassNames.set(devClassName, 1);
      }
    }

    className = !isDev
      ? hash(`${selector}${property}${!mediaArr ? themedValue : mediaArr}`)
      : devClassName;

    updateSheet(`.${className}`.repeat(precedence), {
      property,
      value: themedValue,
      media,
      selector
    });

    CACHE_CLASSNAMES.set(key, className);

    return className;
  }

  return className;
};

export default getClassName;
