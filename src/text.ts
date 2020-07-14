import base, { Base } from './system/base';
import withHelper from './system/withHelper';

function Text(props: any): Base {
  return base({ as: 'span', ...props });
}

Text.with = withHelper(Text);

Text.displayName = 'Text';

export default Text;
