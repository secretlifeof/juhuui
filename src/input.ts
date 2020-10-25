// @ts-nocheck
import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

interface P {
  [key: string]: any;
}

type Props = P & CSSRules;

const baseStyle = {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  transition: 'all 0.2s',
  outline: 'none',
  appearance: 'none',
  width: '100%'
};

const sizeStyle = {
  fontSize: 'md',
  px: 4,
  height: 10,
  rounded: 'md'
};

const inputInstance = new Base({
  ...baseStyle,
  ...sizeStyle,
  fun: true,
  as: 'input'
});

/**
 * Input tag with some default styling.
 * @returns JSX Element
 * @example
 * <Input />
 */
const Input = ((props: Props): Render => {
  return inputInstance.render(props);
}) as ComponentType<P>;

attachMethodsToInstance(Input, inputInstance);

Input.displayName = 'Input';

export default Input;
