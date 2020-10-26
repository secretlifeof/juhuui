import getStyleTag from '../system/getStyleTag';
import { isDev } from '../utilities/is';

export const CACHE_SSR = new Set();

const virtualInjector = (rule: string): void => {
  CACHE_SSR.add(rule);
};

const injectorDOM = (rule: string, tag?: string) => {
  const target = getStyleTag(tag) as HTMLStyleElement;

  const ruleIsMedia = rule.includes('@');

  target.innerHTML = ruleIsMedia
    ? target.innerHTML + rule
    : rule + target.innerHTML;
};

export const injectorCSSOM = (
  rule: string,
  tag?: string,
  media?: boolean
): void => {
  const sheet = getStyleTag(tag).sheet as CSSStyleSheet;

  sheet.insertRule(rule, media ? sheet.cssRules.length : 0);
};

const injectCss = (rule: string, media?: boolean): void => {
  try {
    !isDev ? injectorCSSOM(rule, undefined, media) : injectorDOM(rule);
  } catch {
    virtualInjector(rule);
  }
};

export default injectCss;
