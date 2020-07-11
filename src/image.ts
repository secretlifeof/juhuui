import base, { Base } from './system/base';
import withHelper from './system/withHelper';

function Image(props: any): Base {
  return base({ as: 'img', ...props });
}

Image.with = withHelper(Image);

Image.displayName = 'Image';

export default Image;
