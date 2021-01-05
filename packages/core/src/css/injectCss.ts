import { getStyleTag } from '../system/getStyleTag';
import { isDev } from '../utilities/is';

export const CACHE_SSR = new Set();

const virtualInjector = (rule: string): void => {
  CACHE_SSR.add(rule);
};

const injectorDOM = (rule: string) => {
  const target = getStyleTag() as HTMLStyleElement;

  const ruleIsMedia = rule.includes('@');
  const targetInnerHTML = target.innerHTML;

  if (!targetInnerHTML.includes(rule)) {
    target.innerHTML = ruleIsMedia
      ? target.innerHTML + rule
      : rule + target.innerHTML;
  }
};

export const injectorCSSOM = (rule: string, media?: boolean): void => {
  const sheet = getStyleTag().sheet as CSSStyleSheet;

  sheet.insertRule(rule, media ? sheet.cssRules.length : 0);
};

const injectCss = (rule: string, media?: boolean): void => {
  try {
    !isDev ? injectorCSSOM(rule, media) : injectorDOM(rule);
  } catch {
    virtualInjector(rule);
  }
};

export default injectCss;
