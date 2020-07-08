import base, { Base } from './system/base';


function Image(props: any, ref: object) : Base {
  return base({ as: 'img', ...props }, ref);
}

Image.displayName = 'Image'

export default Image;
