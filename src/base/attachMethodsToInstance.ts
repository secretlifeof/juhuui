function attachMethodsToInstance(Component: any, instance: any) {
  /* eslint no-param-reassign: ["error", { "props": false }] */
  Component.as = function a(as: any) {
    return instance.as(as);
  };
  Component.with = function w(props: any) {
    return instance.with(props);
  };
  Component.merge = function m(components: any) {
    return instance.merge(components);
  };
}

export default attachMethodsToInstance;
