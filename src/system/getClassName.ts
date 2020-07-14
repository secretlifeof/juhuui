/**
 *  Creates or returns classNames
 */

import checkTheme from '../theme/checkTheme';
import hash from '../utilities/hash';
import updateSheet from './updateSheet';

const getClassName = () => {
  const CACHE = new Map();

  return (
    property: string,
    value: string | number,
    media: string | undefined | number = '',
    selector: string | undefined = '',
    mediaArr?: Array<string | number | null> | false
  ) => {
    const key = `${media}${selector}${property}${!mediaArr ? value : mediaArr}`;
    let className = CACHE.get(key);
    if (!className) {
      const themedValue = checkTheme(property, value);
      className = hash(
        `${selector}${property}${!mediaArr ? themedValue : mediaArr}`
      );

      updateSheet(className, {
        property,
        value: themedValue,
        media,
        selector
      });

      CACHE.set(key, className);

      return className;
    }
    return className;
  };
};

export default getClassName();
