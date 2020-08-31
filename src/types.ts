// @ts-nocheck
import * as CSS from 'csstype';

import {
  CSSShortProperties,
  ShortProperties
} from './properties/getShortProperty';
import { Render } from './system/render';

type GenericRecord<KeyT extends PropertyKey, ValueT> = {
  [Key in KeyT]: {
    [Key2 in Key]: CSS.PropertiesHyphen[ShortProperties[Key]];
  };
}[KeyT];

type CSSShortRules = GenericRecord<CSSShortProperties, string>;

export type CSSProperties = CSS.PropertiesFallback<
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

export type CSSProps = CSSPropsFn | CSSRules;

export interface Variants {
  [k: string]: {
    [k: string]: CSSProperties;
  };
}

export type As = keyof JSX.IntrinsicElements; // 'div' | 'span' | 'main';

export interface InstanceType {
  /**
   *  Set html tag or component
   *  @param as - Tag or component
   *  @returns component. Must be combined with with()
   *  @example
   *  const Comp = Box.as('main')
   *  <Comp>main</Comp>
   */
  as: (as: As) => InstanceType;
  /**
   *  Merge other Juhuui components
   *  @param components - Component or components[]
   *  @returns component. Must be combined with with()
   *  @example
   *  const First = Box.with({color:'green'})
   *  const Comp = Box.merge(First).with()
   *  <Comp>main</Comp>
   */
  merge: (components: InstanceType) => InstanceType;
  /**
   *  Add variants props
   *  @param variantObj - Variants obj [propName]:{ variant:{ CSSRules } }
   *  @returns component. Must be combined with with()
   *  @example
   *  const Variant = Box.variant({
   *    variants: { sm: { size: '5px' }, lg: { size: '10px' } }
   *  });
   */
  variants: (variantObj: Variants) => InstanceType;
  /**
   *  Add CSSRules to component
   *  @param props - CSSRules | (props)=>({ CSSRules })
   *  @param filter - string[] containing props to filter from DOM
   *  @returns JSX Element
   *  @example
   *  const Simple = Box.with({ color: 'green' });
   *  const Play = Box.with(({ bgC }) => ({ bg: bgC }), ['bgC']);
   */
  with: (props?: CSSProps, filter?: string[]) => Render;
}

export interface ComponentType extends InstanceType {
  (props: CSSRules): Render;
  displayName: string;
}

export type InputValue =
  | string
  | number
  | null
  | undefined
  | Array<string | number | null>;
