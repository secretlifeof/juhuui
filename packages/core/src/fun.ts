import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

interface P {
  [key: string]: any;
}

const funInstance = new Base({ fun: true });

/**
 * Box with fun="true". Activate pseudo properties.
 * @returns JSX Element
 * @example
 * <Fun _hover={{color: 'red'}}>Hello</Fun>
 */
const Fun = ((props: CSSRules): Render => {
  return funInstance.render(props);
}) as ComponentType<P>;

attachMethodsToInstance(Fun, funInstance);

Fun.displayName = 'Fun';

export default Fun;
