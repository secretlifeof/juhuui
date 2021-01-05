import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

interface P {
  [key: string]: any;
}

export type Props = P & CSSRules;

const baseStyle = {
  display: 'flex',
  alignItems: 'center',
  // position: 'relative',
  transition: 'border 0.2s',
  outline: 'none',
  appearance: 'none',
  width: '100%',
  border: '2px solid black',
  '&[readonly]': {
    borderStyle: 'dotted',
    cursor: 'notAllowed'
  },
  '&[disabled]': {
    backgroundColor: '#eee',
    cursor: 'not-allowed'
  }
};

const sizeStyle = {
  fontSize: 'md',
  px: 4,
  height: 10,
  lineHeight: 1
  // rounded: 'md'
};

const inputInstance = new Base({
  baseStyles: { ...baseStyle, ...sizeStyle },
  fun: true,
  as: 'input'
});

/**
 * Input tag with some default styling.
 * @returns JSX Element
 * @example
 * <Input />
 */
const Input = ((props: Props): Render =>
  inputInstance.render(props)) as ComponentType<P>;

attachMethodsToInstance(Input, inputInstance);

Input.displayName = 'Input';

export default Input;
