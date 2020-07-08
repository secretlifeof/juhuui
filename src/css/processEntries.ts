import ifStrToKebabCase from '../utilities/ifStrToKebabCase';
import createCss from './createCss';

/**
 *  Processes all entries to return classNames
 */

const processEntries = () => {
  return (
    property: string | string[],
    value: string | number | Array<string | number | null>,
    addClassName: (property: string, className: string | string[]) => void,
    selector?: string | undefined
  ) => {
    const cssProperty = ifStrToKebabCase(property);

    const className = createCss(cssProperty, value, selector);

    if (!Array.isArray(cssProperty)) {
      addClassName(cssProperty, className);
    } else {
      for (let i = 0; i < cssProperty.length; i++) {
        addClassName(cssProperty[i], className);
      }
    }
  };
};

export default processEntries();
