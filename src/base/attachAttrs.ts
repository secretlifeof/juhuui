import render from '../system/render';
import { forwardRef } from '../system/setup';
import getFilteredProps from './getFilteredProps';

function as(this: any, a: any) {
  this.mergedProps = { ...this.mergedProps, as: a };

  return this;
}

function withComponent(this: any, attrsIn: any, val: any, filter: string[]) {
  /* eslint-disable @typescript-eslint/no-use-before-define */
  const attachAttrsBound = attachAttrs.bind(this);
  /* eslint-enable @typescript-eslint/no-use-before-define */

  const { mergedProps } = this;
  const WrappedComponent = (props?: any, ref = { current: null }) => {
    const refOut = ref && forwardRef ? { ref } : {};
    const styles = typeof val === 'function' ? val(props) : val;
    const attrs = typeof attrsIn === 'function' ? attrsIn(props) : attrsIn;
    const initValues = this.getInitialValues(props);
    const variantStyles = this.getVariantStyles(props);
    const filteredProps = getFilteredProps(props, [
      ...this.removeProps,
      ...filter
    ]);

    return render({
      ...initValues,
      ...attrs,
      ...mergedProps,
      ...variantStyles,
      ...styles,
      ...filteredProps,
      ...refOut
    });
  };

  // if used without forwardRef
  attachAttrsBound(WrappedComponent, { ...attrsIn, ...mergedProps, ...val });

  const Forwarded = forwardRef
    ? forwardRef(WrappedComponent)
    : WrappedComponent;
  // if used with forwardRef
  attachAttrsBound(Forwarded, { ...mergedProps, ...val });

  this.mergedProps = {};

  return forwardRef ? Forwarded : WrappedComponent;
}

function merge(this: any, components: any) {
  const mergedProps = Array.isArray(components)
    ? components.reduce((acc: any, cur: any) => ({ ...acc, ...cur.attrs }), {})
    : components.attrs;

  this.mergedProps = { ...this.mergedProps, ...mergedProps };

  return this;
}

function variants(this: any, types: any) {
  this.variant = types;

  return this;
}

function attachAttrs(this: any, component: any, attrs: any) {
  /* eslint no-param-reassign: ["error", { "props": false }] */
  component.as = as.bind(this);
  // attrs argument necessary for passing attrs to nested component
  component.with = withComponent.bind(this, attrs);
  component.attrs = attrs;
  component.merge = merge.bind(this);
  component.variants = variants.bind(this);
}

export default attachAttrs;
