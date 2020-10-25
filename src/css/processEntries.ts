import type { InputValue } from '../types';
// import ifStrToKebabCase from '../utilities/ifStrToKebabCase';
import createCss from './createCss';

/**
 *  Processes all entries to return classNames
 */

type ClassNames = string | string[];
type CSSProperty = string | string[];

const processEntries = (
  cssProperty: CSSProperty,
  value: InputValue,
  addClassName: (property: string, className: ClassNames) => void,
  selector?: string | undefined
) => {
  const className = createCss(cssProperty, value, selector);

  if (!Array.isArray(cssProperty)) {
    addClassName(cssProperty, className);
  } else {
    for (let i = 0; i < cssProperty.length; i++) {
      addClassName(cssProperty[i], className);
    }
  }
};

export default processEntries;
