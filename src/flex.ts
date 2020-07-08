import base, { Base } from './system/base';


function Flex(props: any, ref: object) : Base {
  const style = {
    display: 'flex',
  };

  return base({ ...style, ...props }, ref);
}

Flex.displayName = 'Flex'

export default Flex;
