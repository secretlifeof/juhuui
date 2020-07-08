import base, { Base } from './system/base';


function Link(props: any, ref: object) : Base {
  return base({ as: 'a', ...props }, ref);
}

Link.displayName = 'Link'

export default Link;
