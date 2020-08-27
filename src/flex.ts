import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

const flexInstance = new Base({ display: 'flex' });

function Flex(props: CSSRules): Render {
  return flexInstance.render(props);
}

attachMethodsToInstance(Flex as ComponentType, flexInstance);

Flex.displayName = 'Flex';

export default Flex;
