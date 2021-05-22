// @ts-nocheck
import { processCss } from '../css/processCss';
import render, { Render } from '../system/render';
import { forwardRef } from '../system/setup';
import { As, CSSProps, CSSRules, Variants } from '../types';
import mergeObjects from '../utilities/mergeObjects';
import getFilteredProps from './getFilteredProps';

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
  attrs: any;
}

export interface WrappedComponentType extends InstanceType {
  (props?: CSSRules, ref?: { current: any }): Render;
}

function as(this: any, component: any, asIn: As) {
  this.asSet = asIn;

  return component;
}

/**
 * TEST
 */
function withComponent(
  this: any,
  {
    forwardProps = {},
    forwardFunctions = [],
    forwardFilter = [],
    forwardVariant = {}
  },
  val?: CSSProps,
  filter: string[] = []
) {
  /* eslint-disable @typescript-eslint/no-use-before-define */
  const attachAttrsBound = attachAttrs.bind(this);
  /* eslint-enable @typescript-eslint/no-use-before-define */

  const { mergedProps, variant, asSet } = this;
  const filters = [
    ...this.removeProps,
    ...forwardFilter,
    ...Object.keys(variant),
    ...filter
  ];

  const valIsFunction = typeof val === 'function';
  const { as: asInOuter, ...stylesIn } = (!valIsFunction && val) ?? {};
  const preProcessedCss = !valIsFunction
    ? processCss({ css: stylesIn }, { returnClassNamesByProperty: true })
    : undefined;
  const preProcessedKeys = preProcessedCss
    ? Array.from(preProcessedCss.keys())
    : [];

  const WrappedComponent = ((
    { merge: mergeProps, ...props }: CSSRules,
    ref?: any
  ) => {
    // const refOut = ref && forwardRef ? { ref } : {};
    const refOut = ref && forwardRef ? { ref } : {};
    // @ts-ignore
    const { as: asIn, ...styles } = (valIsFunction && val(props)) ?? {};
    const { as: asForwarded, ...attrs } =
      typeof forwardProps === 'function' ? forwardProps(props) : forwardProps;
    const functionAttrs = forwardFunctions.reduce(
      (acc, cur: any) => ({
        ...acc,
        ...(typeof cur === 'function' ? cur(props) : cur)
      }),
      {}
    );

    const { baseStyles = {}, as: asBase, ...baseProps } = this.propsIsFunction
      ? this.props(props)
      : this.props;
    const filteredBaseStyles = getFilteredProps(baseStyles, preProcessedKeys);

    const variantStyles = this.getVariantStyles(props, {
      ...forwardVariant,
      ...variant
    });

    const mergedInlineStyles = this.merge(mergeProps || {}, true) ?? {};
    const mergedStyles = mergeObjects(
      mergedInlineStyles,
      mergedProps,
      attrs,
      functionAttrs,
      styles,
      variantStyles
    );
    const filteredProps = getFilteredProps(props, filters);

    return render({
      ...baseProps,
      as: asBase || asSet || asIn || asInOuter || asForwarded,
      baseStyles: {
        ...filteredBaseStyles,
        ...mergedStyles
      },
      preProcessedCss,
      ...filteredProps,
      ...refOut
    });
  }) as WrappedComponentType;

  const parentProps = {
    forwardProps: { ...forwardProps, ...mergedProps, ...val },
    forwardFunctions: [...forwardFunctions, val],
    forwardFilter: filters,
    forwardVariant: variant
    // attrs: { ...forwardProps, ...mergedProps, ...val }
  };

  const Forwarded = (forwardRef
    ? forwardRef(WrappedComponent)
    : WrappedComponent) as WrappedComponentType;
  attachAttrsBound(Forwarded, parentProps);

  this.reset();

  return Forwarded;
}

function merge(this: any, component: any, componentsToBeMerged: any | any[]) {
  const mergedProps = Array.isArray(componentsToBeMerged)
    ? componentsToBeMerged.reduce(
        (acc: any, cur: any) => ({ ...acc, ...cur.attrs }),
        {}
      )
    : componentsToBeMerged.attrs;

  this.mergedProps = { ...this.mergedProps, ...mergedProps };

  return component;
}

function variants(this: any, component: any, types: any) {
  this.variant = types;

  return component;
}

function attachAttrs<T extends InstanceType>(
  this: any,
  component: T,
  parentProps: any = {}
): T {
  /* eslint no-param-reassign: ["error", { "props": false }] */
  // components attribute is necessary for nesting components
  component.as = as.bind(this, component);
  component.with = withComponent.bind(this, parentProps);
  component.merge = merge.bind(this, component);
  component.variants = variants.bind(this, component);
  component.forwardProps = parentProps.forwardProps;

  return component as any;
}

export default attachAttrs;
