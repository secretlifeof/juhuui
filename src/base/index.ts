// @ts-nocheck
import { processCss } from '../css/processCss';
import render from '../system/render';
import { forwardRef } from '../system/setup';
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

const staticPropsToRemove = ['baseStyles', 'fw'];

class Base {
  props: CSSProps | any;

  ref: any;

  mergedProps: any;

  removeProps: any;

  variant: any;

  attrs: any;

  constructor(p?: CSSProps | any, removeProps?: any[] = []) {
    this.props = p || {};
    this.removeProps = [...staticPropsToRemove, ...removeProps];
    this.ref = {};
    this.mergedProps = {};
    this.variant = {};
    this.propsIsFunction = typeof p === 'function';
  }

  /**
   *
   *
   */
  as(asIn: As) {
    this.asSet = asIn;

    return this;
  }

  getInitialValues(props: CSSRules) {
    const initValues = this.props;
    return this.propsIsFunction ? initValues(props) : initValues;
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

  render({ merge, ...props }: CSSRules = {}) {
    const { baseStyles, ...baseProps } = this.getInitialValues(props);
    const filteredProps = getFilteredProps(props, [
      'baseStyles',
      ...this.removeProps
    ]);
    this.merge(merge || {});
    const { mergedProps } = this;
    this.mergedProps = {};

    return render({
      ...baseProps,
      baseStyles: { ...baseStyles, ...mergedProps },
      ...filteredProps
    });
  }

  /**
   * Reset props after use so they will not be spilled to other components
   */
  reset() {
    this.mergedProps = {};
    this.variant = {};
    this.removeProps = staticPropsToRemove;
    this.asSet = undefined;
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

    /**
     * Preprocess styles on styled component mount and not on each render
     * returns an ES6 Map with [cssProperty, className] that is passed to
     * processCss so that those will not be processed a second time
     */
    const { as: asInOuter, ...stylesIn } = (!valIsFunction && val) ?? {};
    const preProcessedCss =
      !valIsFunction &&
      processCss({ css: stylesIn }, { returnClassNamesByProperty: true });
    const preProcessedKeys = preProcessedCss
      ? Array.from(preProcessedCss.keys())
      : [];

    const { mergedProps, variant, asSet } = this;
    const isVariants = Object.keys(variant).length > 0;
    const filters = [...this.removeProps, ...Object.keys(variant), ...filter];

    const WrappedComponent = (({ merge, ...props }: CSSRules, ref = {}) => {
      const refOut = ref && forwardRef ? { ref } : {};

      const { as: asIn, ...styles } = (valIsFunction && val(props)) ?? {};
      const { baseStyles = {}, as: asBase, ...baseProps } = this.propsIsFunction
        ? this.props(props)
        : this.props;
      const filteredBaseStyles = getFilteredProps(baseStyles, preProcessedKeys);

      const variantStyles = isVariants
        ? this.getVariantStyles(props, variant)
        : {};
      const mergedInlineStyles = merge ? this.merge(merge || {}, true) : {};
      const mergedStyles = mergeObjects(
        mergedInlineStyles,
        mergedProps,
        variantStyles,
        styles
      );

      const filteredProps = getFilteredProps(props, filters);

      return render({
        ...baseProps,
        as: asBase || asSet || asIn || asInOuter,
        baseStyles: {
          ...filteredBaseStyles,
          ...mergedStyles
        },
        preProcessedCss,
        ...filteredProps,
        ...refOut
      });
    }) as WrappedComponentType;

    const attachedProps = {
      forwardProps: { ...mergedProps, as: asSet, ...val },
      forwardFunctions: [val],
      forwardFilter: filters,
      forwardVariant: variant
    };

    const Forwarded = (forwardRef
      ? forwardRef(WrappedComponent)
      : WrappedComponent) as WrappedComponentType;
    attachAttrsBound(Forwarded, attachedProps);

    this.reset();
    return Forwarded;
  }

  merge(components: any, returnProps?: boolean) {
    const mergedProps = Array.isArray(components)
      ? components.reduce(
          (acc: any, cur: any) => ({ ...acc, ...cur.forwardProps }),
          {}
        )
      : components.forwardProps;
    !returnProps &&
      (this.mergedProps = { ...this.mergedProps, ...mergedProps });

    return !returnProps ? this : mergedProps;
  }
}

export default Base;
