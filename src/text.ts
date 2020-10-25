import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

interface P {
  [key: string]: any;
}

const textInstance = new Base({
  as: 'span'
});

/**
 * Box set as="span".
 * @returns JSX Element
 * @example
 * <Text>Hello</Text>
 */
const Text = ((props: CSSRules): Render => {
  return textInstance.render(props);
}) as ComponentType<P>;

attachMethodsToInstance(Text, textInstance);

Text.displayName = 'Text';

export default Text;
