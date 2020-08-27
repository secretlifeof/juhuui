import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

const linkInstance = new Base({
  as: 'a'
});

function Link(props: CSSRules): Render {
  return linkInstance.render(props);
}

attachMethodsToInstance(Link as ComponentType, linkInstance);

Link.displayName = 'Link';

export default Link;
