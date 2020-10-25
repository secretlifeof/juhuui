import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

interface P {
  [key: string]: any;
}

const flexInstance = new Base({ display: 'flex' });

/**
 * Box with display="flex".
 * @returns JSX Element
 * @example
 * <Flex><div/><div/></Flex>
 */
const Flex = ((props: CSSRules): Render => {
  return flexInstance.render(props);
}) as ComponentType<P>;

attachMethodsToInstance(Flex, flexInstance);

Flex.displayName = 'Flex';

export default Flex;
