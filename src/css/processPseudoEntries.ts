/**
 *  Processes pseudo props (_hover, pseudo, etc)
 */

import { CSSShortProperties, getShortProperty } from '../properties';
import processEntries from './processEntries';

export interface Pair {
  [key: string]: string[] | string;
}

export interface Pseudo {
  [key: string]: any; // string | number | Array<string | number | null>;
}

function processPseudoEntries(entries: Pseudo, selector: string): any {
  const classNamesByProperty = new Map();

  for (let i = 0, e = Object.entries(entries); i < e.length; i++) {
    const [property, value]: [
      CSSShortProperties | string,
      string | number | Array<string | number | null>
    ] = e[i];

    // Why did I add this?
    // if (typeof value === 'object' && !Array.isArray(value)) {
    //   for (const k in value) {
    //     const v = value[k];

    //     classNamesByProperty.set(k, createPseudoEntries({ [k]: v }, selector));
    //   }
    //   continue;
    // }

    const cssProperty =
      (getShortProperty(property as CSSShortProperties) as string | string[]) ||
      property;

    processEntries(
      cssProperty,
      value,
      (p: string, c: string | string[]) => classNamesByProperty.set(p, c),
      selector
    );
  }

  return Array.from(classNamesByProperty.values()).flat();
}

export default processPseudoEntries;
