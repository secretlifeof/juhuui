import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';

const imageInstance = new Base({
  as: 'img'
});

function Image(props: any): Render {
  return imageInstance.render(props);
}

attachMethodsToInstance(Image, imageInstance);

Image.displayName = 'Image';

export default Image;
