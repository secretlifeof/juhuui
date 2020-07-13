import { forwardRef } from './setup';

/**
 *  Prototype function for with api
 *
 *  const HelloWorld = Text.with(props => ({color: 'green', props.fw.bg}))
 *  or Text.with({color: 'green', props.fw.bg})
 *  <HelloWorld fw={{bg: 'yellow'}}>green</HelloWorld>
 */

const withHelper = (fn: any) => {
  return (val: any) => {
    function Styled(props: any, ref: any) {
      const styles = typeof val === 'function' ? val(props) : val;
      return fn({ ...styles, ...props, ...(forwardRef && ref) });
    }
    return forwardRef ? forwardRef(Styled) : Styled;
  };
};

export default withHelper;
