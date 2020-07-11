import base, { Base } from './system/base';
import withHelper from './system/withHelper';

function Link(props: any): Base {
  return base({ as: 'a', ...props });
}

Link.with = withHelper(Link);

Link.displayName = 'Link';

export default Link;
