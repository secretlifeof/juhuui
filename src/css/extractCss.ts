import { CACHE_SSR } from './injectCss';

/**
 * Returns a css string from strings added by virtualInjector
 */

const getCss = () : string => {
  const css = Array.from(CACHE_SSR).join('');

  return css;
}

export default getCss;
