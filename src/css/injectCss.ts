import getStyleTag from '../system/getStyleTag';

const RAW_TAG = '_juhuui_raw';
export const CACHE_SSR = new Set();

const virtualInjector = (rule: string): void => {
  CACHE_SSR.add(rule);
};

// const injectorDOM = (tag?: string) => {
//   const target = getStyleTag(tag) as HTMLStyleElement;

//   // target.innerHTML = Array.from(CACHE_WORK).join('');
// };

export const injectorCSSOM = (rule: string, tag?: string): void => {
  const sheet = getStyleTag(tag).sheet as CSSStyleSheet;

  sheet.insertRule(rule, sheet.cssRules.length);
};

const injectCss = (rule: string, rawString?: string): void => {
  try {
    !rawString ? injectorCSSOM(rule) : injectorCSSOM(rule, RAW_TAG);
  } catch {
    virtualInjector(rule);
  }
  // if (firstRun) {
  //   !rawString ? injectorDOM() : injectorDOM(RAW_TAG);
  // } else {
  //   !rawString ? injectorCSSOM() : injectorCSSOM(RAW_TAG);
  //   CACHE_WORK.clear();
  // }
};

export default injectCss;
