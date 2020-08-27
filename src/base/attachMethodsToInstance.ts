import { As, CSSProps, InstanceType } from '../types';

function attachMethodsToInstance<T extends InstanceType>(
  component: T,
  instance: InstanceType
): T {
  /* eslint no-param-reassign: ["error", { "props": false }] */

  component.as = function a(as: As) {
    return instance.as(as);
  };
  component.merge = function m(components: any) {
    return instance.merge(components);
  };
  component.variants = function w(variantObj: any) {
    return instance.variants(variantObj);
  };
  component.with = function w(props: CSSProps, filter: string[]) {
    return instance.with(props, filter);
  };
  return component as any;
}

export default attachMethodsToInstance;
