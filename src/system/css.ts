import processProps from '../css/processProps';
import { CSSRules } from '../types';

const css = (props: CSSRules): string => {
  const system = processProps(props);
  return system.classNames.join(' ');
};

export default css;
