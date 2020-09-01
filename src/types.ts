// @ts-nocheck
import * as CSS from 'csstype';

import type { InstanceType } from './base/attachAttrs';
import {
  CSSShortProperties,
  ShortProperties
} from './properties/getShortProperty';

/*
 *  To produce shortcuts with CSS property values
 *  i.e. c produces list of colors
 */
type GenericRecord<KeyT extends PropertyKey, ValueT> = {
  [Key in KeyT]: {
    [Key2 in Key]: CSS.PropertiesHyphen[ShortProperties[Key]];
  };
}[KeyT];

type CSSShortRules = GenericRecord<CSSShortProperties, string>;

export type CSSProperties = CSS.StandardPropertiesFallback<
  string | number | Array<string | number | null>
>;

type Pseudos = {
  [P in CSS.AdvancedPseudos]: CSSProperties;
};

interface PseudoType {
  pseudo?: Pseudos;
  _after?: CSSProperties;
  _hover?: CSSProperties;
  _active?: CSSProperties;
}

export type CSSRules = PseudoType | CSSProperties | CSSShortRules;

export interface CSSPropsFn {
  (props: any): CSSRules;
}

export type CSSProps = CSSPropsFn | CSSRules | { [key: string]: any };

export interface Variants {
  [k: string]: {
    [k: string]: CSSProperties;
  };
}

export type As = keyof JSX.IntrinsicElements;

export interface ComponentType extends InstanceType {
  (props: CSSRules | { [key: string]: any }): ComponentType | any;
  displayName: string;
}

export type InputValue =
  | string
  | number
  | null
  | undefined
  | Array<string | number | null>;
