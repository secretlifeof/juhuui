import type { InputValue } from '../types';
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
  selector?: string | undefined,
  mediaQuery?: string
) => {
  if (!value && value !== 0) return;
  const className = createCss(cssProperty, value, selector, mediaQuery);

  if (!Array.isArray(cssProperty)) {
    addClassName(cssProperty, className);
  } else {
    for (const cssP of cssProperty) {
      addClassName(cssP, className);
    }
  }
};

export default processEntries;
