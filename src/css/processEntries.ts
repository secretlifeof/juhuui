import type { InputValue } from '../types';
// import ifStrToKebabCase from '../utilities/ifStrToKebabCase';
import createCss from './createCss';

/**
 *  Processes all entries to return classNames
 */

const processEntries = (
  property: string | string[],
  value: InputValue,
  addClassName: (property: string, className: string | string[]) => void,
  selector?: string | undefined
) => {
  // const cssProperty = ifStrToKebabCase(property);

  const className = createCss(property, value, selector);

  if (!Array.isArray(property)) {
    addClassName(property, className);
  } else {
    for (let i = 0; i < property.length; i++) {
      addClassName(property[i], className);
    }
  }
};

export default processEntries;
