import defaultTheme, { Theme } from '../theme';

interface Config {
  theme?: Theme;
  forwardRef?: Function;
  defaultFun: boolean;
}

/* eslint-disable import/no-mutable-exports */
export let h: (nodeName: string, attributes: any, children: any[]) => any;
export let themeInternal: Theme = defaultTheme;
export let defaultFun = true;
export let forwardRef: Function | undefined;
/* eslint-enable import/no-mutable-exports */

const setup = (
  createElement: (nodeName: string, attributes: any, children: any[]) => any,
  options: Config
): void => {
  const {
    theme: inTheme,
    defaultFun: inDefaultFun,
    forwardRef: forwardRefInput
  } = options || {};
  themeInternal = { ...defaultTheme, ...inTheme };
  h = createElement;
  defaultFun = inDefaultFun;
  forwardRef = forwardRefInput;
};

export default setup;
