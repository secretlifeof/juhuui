import base, { Base } from './system/base';

function Text(props: any, ref: object) : Base {
  return base({ as: 'span', ...props }, ref, 'span');
}

Text.displayName = 'Text';

export default Text;
