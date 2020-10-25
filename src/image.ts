import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

interface P {
  [key: string]: any;
}

const imageInstance = new Base({
  as: 'img'
});

/**
 * <img /> tag
 * @returns JSX Element
 * @example
 * <Img src="https://..."/>
 */
const Image = ((props: CSSRules): Render => {
  return imageInstance.render(props);
}) as ComponentType<P>;

attachMethodsToInstance(Image, imageInstance);

Image.displayName = 'Image';

export default Image;
