import { processCss } from '../css/processCss';
import { CSSRules } from '../types';

export const css = (styles: CSSRules): string => {
  const classNames = processCss({ css: styles });
  return classNames.join(' ');
};

export default css;
