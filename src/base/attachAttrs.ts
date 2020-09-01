import render, { Render } from '../system/render';
import { forwardRef } from '../system/setup';
import { As, CSSProps, CSSRules, Variants } from '../types';
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
}

export interface WrappedComponentType extends InstanceType {
  (props?: CSSRules, ref?: { current: any }): Render;
}

function as(this: any, component: any, a: As) {
  this.mergedProps = { ...this.mergedProps, as: a };

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

  const { mergedProps, variant } = this;
  const filters = [
    ...this.removeProps,
    ...forwardFilter,
    ...Object.keys(variant),
    ...filter
  ];
  const WrappedComponent = ((props?: CSSRules, ref = { current: null }) => {
    const refOut = ref && forwardRef ? { ref } : {};
    const styles = typeof val === 'function' ? val(props) : val;
    const attrs =
      typeof forwardProps === 'function' ? forwardProps(props) : forwardProps;
    const functionAttrs = forwardFunctions.reduce((acc, cur: any) => {
      return { ...acc, ...(typeof cur === 'function' ? cur(props) : cur) };
    }, {});
    const initValues = this.getInitialValues(props);
    const variantStyles = this.getVariantStyles(props, {
      ...forwardVariant,
      ...variant
    });
    const filteredProps = getFilteredProps(props, filters);

    return render({
      ...initValues,
      ...attrs,
      ...mergedProps,
      ...functionAttrs,
      ...variantStyles,
      ...styles,
      ...filteredProps,
      ...refOut
    });
  }) as WrappedComponentType;

  const parentProps = {
    forwardProps: { ...forwardProps, ...mergedProps, ...val },
    forwardFunctions: [...forwardFunctions, val],
    forwardFilter: filters,
    forwardVariant: variant
  };

  // if used without forwardRef
  attachAttrsBound(WrappedComponent, parentProps);

  const Forwarded = (forwardRef
    ? forwardRef(WrappedComponent)
    : WrappedComponent) as WrappedComponentType;
  // if used with forwardRef
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

  return component as any;
}

export default attachAttrs;
