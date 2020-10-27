import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import input from './input';
import { ComponentType, CSSRules } from './types';

type Input = ReturnType<typeof input>;

interface P {
  [key: string]: any;
}

const textareaInstance = new Base({
  as: 'textarea',
  baseStyles: {
    lineHeight: 'short',
    minHeight: '80px',
    py: '8px',
    resize: 'none'
  }
});

/**
 * Textarea tag with some default styling.
 * @returns JSX Element
 * @example
 * <Textarea />
 */
const Textarea = ((props: CSSRules): Input => {
  return textareaInstance.render(props);
}) as ComponentType<P>;

attachMethodsToInstance(Textarea, textareaInstance);

Textarea.displayName = 'Textarea';

export default Textarea;
