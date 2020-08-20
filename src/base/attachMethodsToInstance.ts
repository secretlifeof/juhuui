function attachMethodsToInstance(Component: any, instance: any) {
  /* eslint no-param-reassign: ["error", { "props": false }] */
  Component.as = function a(as: any) {
    return instance.as(as);
  };
  Component.merge = function m(components: any) {
    return instance.merge(components);
  };
  Component.variants = function w(variantObj: any) {
    return instance.variants(variantObj);
  };
  Component.with = function w(props: any) {
    return instance.with(props);
  };
}

export default attachMethodsToInstance;
