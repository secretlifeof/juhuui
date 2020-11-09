import { CACHE_SSR } from './injectCss';
import { CACHE_PROCESS } from './processCss';

/**
 * Returns a css string from strings added by virtualInjector
 */

interface Extract {
  css: string;
  data: string;
}

const getCss = (): Extract => {
  const css = Array.from(CACHE_SSR).join('');
  const dataArr: any[] = [];
  CACHE_PROCESS.forEach((value, key) => dataArr.push([key, value]));

  return { css, data: JSON.stringify(dataArr) };
};

export default getCss;
