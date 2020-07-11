import base, { Base } from './system/base';
import withHelper from './system/withHelper';

function Fun(props: any): Base {
  return base({ fun: true, ...props });
}

Fun.with = withHelper(Fun);

export default Fun;
