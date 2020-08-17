import render from '../system/render';

function as(this: any, a: any) {
  this.mergedProps = { ...this.mergedProps, as: a };

  return this;
}

function withComponent(this: any, val: any, attrsIn: any) {
  /* eslint-disable @typescript-eslint/no-use-before-define */
  const attachAttrsBound = attachAttrs.bind(this);
  /* eslint-enable @typescript-eslint/no-use-before-define */

  const { mergedProps } = this;
  const WrappedComponent = (props?: any, ref = { current: null }) => {
    const refOut = ref && ref.current ? { ref } : {};
    const styles = typeof val === 'function' ? val(props) : val;
    const attrs = typeof attrsIn === 'function' ? attrsIn(props) : attrsIn;
    const initValues = this.getInitialValues(props);
    const filteredProps = this.getFilteredProps(props);

    return render({
      ...initValues,
      ...attrs,
      ...mergedProps,
      ...styles,
      ...filteredProps,
      ...refOut
    });
  };

  attachAttrsBound(WrappedComponent, { ...attrsIn, ...mergedProps, ...val });

  this.mergedProps = {};

  return WrappedComponent;
}

function merge(this: any, components: any) {
  const mergedProps = Array.isArray(components)
    ? components.reduce((acc: any, cur: any) => ({ ...acc, ...cur.attrs }), {})
    : components.attrs;

  this.mergedProps = { ...this.mergedProps, ...mergedProps };

  return this;
}

function attachAttrs(this: any, component: any, attrs: any) {
  /* eslint no-param-reassign: ["error", { "props": false }] */
  component.as = as.bind(this);
  // attrs argument necessary for passing attrs to nested component
  component.with = withComponent.bind(this, attrs);
  component.attrs = attrs;
  component.merge = merge.bind(this);
}

export default attachAttrs;
