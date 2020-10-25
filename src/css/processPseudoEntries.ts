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
