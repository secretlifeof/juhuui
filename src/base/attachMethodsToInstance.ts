import { As, CSSProps, InstanceType } from '../types';

// function attachMethodsToInstance<T>(
//   component: T,
//   instance: InstanceType
// ): T & InstanceType {
// Object.defineProperty(component, 'as', {
//   value: (as: As) => instance.as(as)
// });
//   Object.defineProperty(component, 'merge', {
//     value: (components: any) => instance.merge(components)
//   });
//   Object.defineProperty(component, 'variants', {
//     value: (variantObj: any) => instance.variants(variantObj)
//   });
//   Object.defineProperty(component, 'with', {
//     value: (props: CSSProps, filter: string[]) => instance.with(props, filter)
//   });
//   return component as any;
// }

function attachMethodsToInstance<T extends InstanceType>(
  component: T,
  instance: InstanceType
): T {
  /* eslint no-param-reassign: ["error", { "props": false }] */

  component.as = function a(as: As) {
    return instance.as(as);
  };
  component.merge = function merge(components: any) {
    return instance.merge(components);
  };
  component.variants = function variants(variantObj: any) {
    return instance.variants(variantObj);
  };
  component.with = function w(props?: CSSProps, filter?: string[]) {
    return instance.with(props, filter);
  };
  return component as any;
}

export default attachMethodsToInstance;
