import render from '../system/render';
import { forwardRef } from '../system/setup';
import getFilteredProps from './getFilteredProps';

function as(this: any, component: any, a: any) {
  this.mergedProps = { ...this.mergedProps, as: a };

  return component;
}

function withComponent(
  this: any,
  {
    forwardProps = {},
    forwardFunctions = [],
    forwardFilter = [],
    forwardVariant = {}
  },
  val: any,
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
  const WrappedComponent = (props?: any, ref = { current: null }) => {
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
  };

  const parentProps = {
    forwardProps: { ...forwardProps, ...mergedProps, ...val },
    forwardFunctions: [...forwardFunctions, val],
    forwardFilter: filters,
    forwardVariant: variant
  };

  // if used without forwardRef
  attachAttrsBound(WrappedComponent, parentProps);

  const Forwarded = forwardRef
    ? forwardRef(WrappedComponent)
    : WrappedComponent;
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

function attachAttrs(this: any, component: any, parentProps: any = {}) {
  /* eslint no-param-reassign: ["error", { "props": false }] */
  // components attribute is necessary for nesting components
  component.as = as.bind(this, component);
  component.with = withComponent.bind(this, parentProps);
  component.merge = merge.bind(this, component);
  component.variants = variants.bind(this, component);
}

export default attachAttrs;
