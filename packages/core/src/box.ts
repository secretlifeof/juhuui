import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { ComponentType, CSSRules } from './types';

const box = new Base();

interface P {
  [key: string]: any;
}

export type Props = CSSRules | P;

/**
 *  Component without a default style
 *  @param props - Object of any CSS properties/shortcuts/pseudo
 *  @returns JSX Element
 */
const Box = ((props: Props) => box.render(props)) as ComponentType<P>;

attachMethodsToInstance(Box, box);

Box.displayName = 'Box';

export default Box;
