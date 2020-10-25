// @ts-nocheck
import render from '../system/render';
import { forwardRef, h } from '../system/setup';
import { As, CSSProps, CSSRules } from '../types';
import mergeObjects from '../utilities/mergeObjects';
import attachAttrs, { WrappedComponentType } from './attachAttrs';
import getFilteredProps from './getFilteredProps';

// export interface BaseSignature {
//   props?: any;
//   ref?: any;
//   mergedProps?: any;
//   removeProps?: any;
// }

class Base {
  props: CSSProps | any;

  ref: any;

  mergedProps: any;

  removeProps: any;

  variant: any;

  constructor(p?: CSSProps | any, removeProps?: any[]) {
    this.props = p || {};
    this.removeProps = removeProps || [];
    this.ref = {};
    this.mergedProps = {};
    this.variant = {};
  }

  /**
   *
   *
   */
  as(as: As) {
    this.mergedProps = { ...this.mergedProps, as };

    return this;
  }

  getInitialValues(props: CSSRules) {
    const initValues = this.props;
    return typeof initValues === 'function' ? initValues(props) : initValues;
  }

  getVariantStyles(props: any, variants: any = {}) {
    const variantNames = Object.keys(variants);
    let variantStyles = {};
    for (let i = 0; i < variantNames.length; i++) {
      const variantName = variantNames[i];
      const variantObj = variants[variantName];
      const selectedVariant = props[variantName];
      const variantStyle = variantObj[selectedVariant];

      if (variantStyle) {
        variantStyles = mergeObjects(variantStyles, variantStyle);
      }
    }
    this.removeProps = [...this.removeProps, ...variantNames];

    return variantStyles;
  }

  render(props: CSSRules = {}) {
    const initValues = this.getInitialValues(props);
    const filteredProps = getFilteredProps(props, this.removeProps);
    return render({ ...initValues, ...filteredProps });
  }

  /**
   * Reset props after use so they will not be spilled to other components
   */
  reset() {
    this.mergedProps = {};
    this.variant = {};
    this.removeProps = [];
  }

  variants(types: any) {
    this.variant = types;

    return this;
  }

  /**
   *  Add CSSRules to component
   *  @param val - CSSRules | (props)=>({ CSSRules })
   *  @param filter - string[] containing props to filter from DOM
   *  @returns JSX Element
   *  @example
   *  const Simple = Box.with({ color: 'green' });
   *  const Play = Box.with(({ bgC }) => ({ bg: bgC }), ['bgC']);
   */
  with(val?: CSSProps, filter: string[] = []) {
    const attachAttrsBound = attachAttrs.bind(this);
    const valIsFunction = typeof val === 'function';

    const { mergedProps, variant } = this;
    const filters = [...this.removeProps, ...Object.keys(variant), ...filter];

    const WrappedComponent = ((props?: CSSRules, ref) => {
      const refOut = ref && forwardRef ? { ref } : {};

      const styles = valIsFunction ? val(props) : val;
      const initValues = this.getInitialValues(props as CSSRules);
      const variantStyles = this.getVariantStyles(props, variant);
      const mergedStyles = mergeObjects({}, mergedProps, variantStyles, styles);
      const filteredProps = getFilteredProps(props, [...filters]);

      return render({
        baseStyles: {
          ...initValues,
          ...mergedStyles
        },
        ...filteredProps,
        ...refOut
      });
    }) as WrappedComponentType;

    const attachedProps = {
      forwardProps: { ...mergedProps, ...val },
      forwardFunctions: [val],
      forwardFilter: filters,
      forwardVariant: variant,
      attrs: { ...mergedProps, ...val }
    };

    // if used without forwardRef
    attachAttrsBound(WrappedComponent, attachedProps);

    // if used with forwardRef
    const Forwarded = (forwardRef
      ? forwardRef(WrappedComponent)
      : WrappedComponent) as WrappedComponentType;
    attachAttrsBound(Forwarded, attachedProps);

    this.reset();

    // return WrappedComponent;
    return Forwarded;
  }

  merge(components: any) {
    const mergedProps = Array.isArray(components)
      ? components.reduce(
          (acc: any, cur: any) => ({ ...acc, ...cur.attrs }),
          {}
        )
      : components.attrs;

    this.mergedProps = { ...this.mergedProps, ...mergedProps };

    return this;
  }
}

export default Base;
