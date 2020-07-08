import defaultTheme, { Theme } from '../theme';

interface Config {
	theme?: Theme;
	// forwardRef?: Function;
	defaultFun: boolean;
}

/* eslint-disable import/no-mutable-exports */
export let h: (nodeName: string, attributes: any, children: any[]) => any;
export let themeInternal: Theme = defaultTheme;
export let defaultFun = false;
// forwardRef: Function | undefined;
/* eslint-enable import/no-mutable-exports */

const setup = (
	createElement: (nodeName: string, attributes: any, children: any[]) => any,
	options: Config
): void => {
	const { theme: inTheme, defaultFun: inDefaultFun } = options || {};
	themeInternal = { ...defaultTheme, ...inTheme };
	h = createElement;
	defaultFun = inDefaultFun;
	// forwardRef = forwardRefInput;
};

// Can not make this work. Thankful for help.
// export const options : { h: any, theme: Theme, defaultFun: boolean } = {
//   h: {},
//   theme: defaultTheme,
//   defaultFun: false
// }

// const setup = (
//   createElement: (nodeName: string, attributes: any, children: any[]) => any,
//   o: Options
// ) : void => {
//   const { theme, defaultFun } = o || {};
//   options.theme = { ...defaultTheme, ...theme };
//   options.h = createElement;
//   options.defaultFun = defaultFun;
//   // forwardRef = forwardRefInput;
// }

export default setup;
