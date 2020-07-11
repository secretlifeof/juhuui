import base, { Base } from './system/base';
import withHelper from './system/withHelper';

function Flex(props: any): Base {
  const style = {
    display: 'flex'
  };

  return base({ ...style, ...props });
}

Flex.with = withHelper(Flex);

Flex.displayName = 'Flex';

export default Flex;
