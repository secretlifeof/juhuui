import { processCss } from '../css/processCss';
import { CSSRules } from '../types';

export const css = (props: CSSRules): string => {
  const { classNames } = processCss(props);
  return classNames.join(' ');
};

export default css;
