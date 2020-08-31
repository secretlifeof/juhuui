import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

const linkInstance = new Base({
  as: 'a'
});

const Link = ((props: CSSRules): Render => {
  return linkInstance.render(props);
}) as ComponentType;

attachMethodsToInstance(Link, linkInstance);

Link.displayName = 'Link';

export default Link;
