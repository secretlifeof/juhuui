/**
 *  Prototype function so that components can be written like
 *
 * const HelloWorld = Text.with(props => ({color: 'green', props.fw.bg}))
 * or Text.with({color: 'green', props.fw.bg})
 * <HelloWorld fw={{bg: 'yellow'}}>green</HelloWorld>
 */

/* eslint no-empty-pattern: "off"  */
const withHelper = (fn: any) => {
  return (val: any) => {
    return function Styled(props: any) {
      const styles = typeof val === 'function' ? val(props) : val;
      return fn({ ...styles, ...props });
    };
  };
};

export default withHelper;
