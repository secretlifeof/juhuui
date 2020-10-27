import { processCss } from '../css/processCss';
import { CSSRules } from '../types';

export const css = (css: CSSRules): string => {
  const { classNames } = processCss({ css });
  return classNames.join(' ');
};

export default css;
