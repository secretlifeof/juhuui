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

type Pseudos = {
  [P in CSS.AdvancedPseudos]: CSSProperties;
};

export type CSSProperties = CSS.StandardPropertiesFallback<
  string | number | Array<string | number | null>
>;

type Media = {
  media: {
    [media: string]: CSSProperties | CSSShortRules;
  };
};

export type CSSRules = CSSProperties | CSSShortRules | Pseudos | Media;

export interface CSSPropsFn {
  (props: any): CSSRules;
}

export type CSSProps = CSSRules | ((props: any) => CSSRules);

export interface Variants {
  [k: string]: {
    [k: string]: CSSProperties;
  };
}

export type As = keyof JSX.IntrinsicElements;

export interface ComponentType<T> extends InstanceType {
  (props: CSSRules | ?T): ComponentType | JSX.Element;
  displayName: string;
}

export type InputValue =
  | string
  | number
  | null
  | undefined
  | Array<string | number | null>;
