import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';

const linkInstance = new Base({
  as: 'a'
});

function Link(props: any): Render {
  return linkInstance.render(props);
}

attachMethodsToInstance(Link, linkInstance);

Link.displayName = 'Link';

export default Link;
