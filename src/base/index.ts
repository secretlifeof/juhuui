import render from '../system/render';
import { forwardRef } from '../system/setup';
import attachAttrs from './attachAttrs';

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

  constructor(p?: any, removeProps?: any[]) {
    this.props = p || {};
    this.removeProps = removeProps || [];
    this.ref = {};
    this.mergedProps = {};
    // this.attrs = {};
  }

  getFilteredProps(props: any) {
    const filteredProps = { ...props };
    this.removeProps.forEach((prop) => delete filteredProps[prop]);
    return filteredProps;
  }

  getInitialValues(props: any) {
    const initValues = this.props;
    return typeof initValues === 'function' ? initValues(props) : initValues;
  }

  with(val: any) {
    const attachAttrsBound = attachAttrs.bind(this);

    const { mergedProps } = this;
    const WrappedComponent = (props?: any, ref = { current: null }) => {
      const refOut = ref && ref.current ? { ref } : {};
      const styles = typeof val === 'function' ? val(props) : val;
      const initValues = this.getInitialValues(props);
      const filteredProps = this.getFilteredProps(props);

      return render({
        ...initValues,
        ...mergedProps,
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

    // reset mergedProps after use
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

  as(a: string) {
    this.mergedProps = { ...this.mergedProps, as: a };

    return this;
  }

  render(props: any = {}) {
    const initValues = this.getInitialValues(props);
    const filteredProps = this.getFilteredProps(props);
    return render({ ...initValues, ...filteredProps });
  }
}

export default Base;
