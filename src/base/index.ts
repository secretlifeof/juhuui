// @ts-nocheck
import render from '../system/render';
import { forwardRef } from '../system/setup';
import attachAttrs from './attachAttrs';
import getFilteredProps from './getFilteredProps';

export interface BaseSignature {
  props?: any;
  ref?: any;
  mergedProps?: any;
  removeProps?: any;
  new (n?: string): any;
}

class Base {
  props: any;

  ref: any;

  mergedProps: any;

  removeProps: any;

  variant: any;

  constructor(p?: any, removeProps?: any[]) {
    this.props = p || {};
    this.removeProps = removeProps || [];
    this.ref = {};
    this.mergedProps = {};
    this.variant = {};
  }

  as(a: string) {
    this.mergedProps = { ...this.mergedProps, as: a };

    return this;
  }

  getInitialValues(props: any) {
    const initValues = this.props;
    return typeof initValues === 'function' ? initValues(props) : initValues;
  }

  getVariantStyles(props: any) {
    const variants = { ...this.variant };
    const variantNames = Object.keys(variants);
    let variantStyles = {};
    for (let i = 0; i < variantNames.length; i++) {
      const variantName = variantNames[i];
      const variantObj = variants[variantName];
      const selectedVariant = props[variantName];
      const variantStyle = variantObj[selectedVariant];

      if (variantStyle) {
        variantStyles = { ...variantStyles, ...variantStyle };
      }
    }
    this.removeProps = [...this.removeProps, ...variantNames];

    return variantStyles;
  }

  render(props: any = {}) {
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
  }

  variants(types: any) {
    this.variant = types;

    return this;
  }

  with(val: any) {
    const attachAttrsBound = attachAttrs.bind(this);

    const { mergedProps } = this;
    const WrappedComponent = (props?: any, ref = { current: null }) => {
      const refOut = ref && ref.current ? { ref } : {};
      const styles = typeof val === 'function' ? val(props) : val;
      const initValues = this.getInitialValues(props);
      const variantStyles = this.getVariantStyles(props);
      const filteredProps = getFilteredProps(props, this.removeProps);

      return render({
        ...initValues,
        ...mergedProps,
        ...variantStyles,
        ...styles,
        ...filteredProps,
        ...refOut
      });
    };

    // if used without forwardRef
    attachAttrsBound(WrappedComponent, { ...mergedProps, ...val });

    const Forwarded = forwardRef
      ? forwardRef(WrappedComponent)
      : WrappedComponent;
    // if used with forwardRef
    attachAttrsBound(Forwarded, { ...mergedProps, ...val });

    // this.reset();
    this.mergedProps = {};

    // return WrappedComponent;
    return forwardRef ? Forwarded : WrappedComponent;
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
