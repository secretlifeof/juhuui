import { processCss } from '../css/processCss';
import { CSSRules } from '../types';

export const css = (props: CSSRules): string => {
  const system = processCss(props);
  return system.classNames.join(' ');
};

export default css;
