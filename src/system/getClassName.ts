/**
 *  Creates or returns classNames
 */

import checkTheme from '../theme/checkTheme';
import hash from '../utilities/hash';
import ifStrToKebabCase from '../utilities/ifStrToKebabCase';
import getPrecedence from './getPrecedence';
import updateSheet from './updateSheet';

const CACHE = new Map();
const precedenceCache = new Map();

const updateClass = (updateStyleSheet: string) => {
  const precedenceItem = precedenceCache.get(updateStyleSheet);

  const { property, value, media, mediaArr, selector } = precedenceItem;

  const themedValue = checkTheme(property, value);

  const cn = hash(
    `${selector}${property}${!mediaArr ? themedValue : mediaArr}`
  );

  updateSheet(`.${cn}`.repeat(2), {
    property,
    value: themedValue,
    media,
    selector
  });
};

const getClassName = (
  propertyCamelCased: string,
  value: string | number,
  media: string | undefined | number = '',
  selector: string | undefined = '',
  mediaArr?: Array<string | number | null> | false
) => {
  const property = ifStrToKebabCase(propertyCamelCased);
  const key = `${media}${selector}${property}${!mediaArr ? value : mediaArr}`;

  const {
    itemAffectedByPrecedence,
    precedence,
    updateStyleSheet
  } = getPrecedence(propertyCamelCased);

  if (itemAffectedByPrecedence) {
    precedenceCache.set(propertyCamelCased, {
      key,
      property,
      value,
      media,
      mediaArr,
      selector
    });
  }

  let className = CACHE.get(key);
  if (!className) {
    const themedValue = checkTheme(property, value);

    className = hash(
      `${selector}${property}${!mediaArr ? themedValue : mediaArr}`
    );

    updateSheet(`.${className}`.repeat(precedence), {
      property,
      value: themedValue,
      media,
      selector
    });

    if (updateStyleSheet) {
      updateClass(updateStyleSheet);
    }

    CACHE.set(key, className);

    return className;
  }

  if (updateStyleSheet) {
    updateClass(updateStyleSheet);
  }

  return className;
};

export default getClassName;
