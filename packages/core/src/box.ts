import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { ComponentType, CSSRules } from './types';

const box = new Base();

interface P {
  [key: string]: any;
}

type Props = CSSRules;

/**
 *  Component without a default style
 *  @param props - Object of any CSS properties/shortcuts/pseudo
 *  @returns JSX Element
 */
const Box = ((props: Props) => {
  return box.render(props);
}) as ComponentType<P>;

attachMethodsToInstance(Box, box);

Box.displayName = 'Box';

export default Box;
