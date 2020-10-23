import processProps from '../css/processProps';
import { CSSRules } from '../types';

export const css = (props: CSSRules): string => {
  const system = processProps(props);
  return system.classNames.join(' ');
};

export default css;
