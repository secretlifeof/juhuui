import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';

const funInstance = new Base({ fun: true });

function Fun(props: any): Render {
  return funInstance.render(props);
}

attachMethodsToInstance(Fun, funInstance);

Fun.displayName = 'Fun';

export default Fun;
