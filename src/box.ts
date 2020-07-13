import base, { Base } from './system/base';
import withHelper from './system/withHelper';

export interface Props {
  fun?: boolean;
  pseudo?: any;
  ref?: any;
}

const Box = (props: Props): Base => {
  return base(props);
};

Box.with = withHelper(Box);

Box.displayName = 'Box';

export default Box;
