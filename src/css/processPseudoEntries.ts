/* eslint-disable no-restricted-syntax */
/**
 *  Processes pseudo props (_hover, pseudo, etc)
 */

import {
  CSSShortProperties,
  getShortProperty
} from '../properties/getShortProperty';
import processEntries from './processEntries';

export interface Pair {
  [key: string]: string[] | string;
}

export interface Pseudo {
  [key: string]: any; // string | number | Array<string | number | null>;
}

/* eslint-disable guard-for-in */
function processPseudoEntries(
  entries: Pseudo,
  selector: string,
  mediaQuery?: string
): any {
  const classNamesByProperty = new Map();

  for (const property in entries) {
    const value = entries[property];

    const cssProperty =
      (getShortProperty(property as CSSShortProperties) as string | string[]) ||
      property;

    processEntries(
      cssProperty,
      value,
      (p: string, c: string | string[]) => classNamesByProperty.set(p, c),
      selector,
      mediaQuery
    );
  }
  /* eslint-enable guard-for-in */

  return Array.from(classNamesByProperty.values()).flat();
}

export default processPseudoEntries;
