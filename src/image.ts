import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

const imageInstance = new Base({
  as: 'img'
});

function Image(props: CSSRules): Render {
  return imageInstance.render(props);
}

attachMethodsToInstance(Image as ComponentType, imageInstance);

Image.displayName = 'Image';

export default Image;
