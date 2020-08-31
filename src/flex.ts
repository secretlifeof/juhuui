import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

const flexInstance = new Base({ display: 'flex' });

const Flex = ((props: CSSRules): Render => {
  return flexInstance.render(props);
}) as ComponentType;

attachMethodsToInstance(Flex, flexInstance);

Flex.displayName = 'Flex';

export default Flex;
