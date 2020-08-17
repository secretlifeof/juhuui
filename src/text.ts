import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';

const textInstance = new Base({
  as: 'span'
});

function Text(props: any): Render {
  return textInstance.render(props);
}

attachMethodsToInstance(Text, textInstance);

Text.displayName = 'Text';

export default Text;
