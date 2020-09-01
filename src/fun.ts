import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

const funInstance = new Base({ fun: true });

/**
 * Box with fun="true". Activate pseudo properties.
 * @returns JSX Element
 * @example
 * <Fun _hover={{color: 'red'}}>Hello</Fun>
 */
function Fun(props: CSSRules): Render {
  return funInstance.render(props);
}

attachMethodsToInstance(Fun as ComponentType, funInstance);

Fun.displayName = 'Fun';

export default Fun;
