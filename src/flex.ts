import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';

const flexInstance = new Base({ display: 'flex' });

function Flex(props: any): Render {
  return flexInstance.render(props);
}

attachMethodsToInstance(Flex, flexInstance);

Flex.displayName = 'Flex';

export default Flex;
