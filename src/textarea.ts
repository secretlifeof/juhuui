import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import input from './input';
import { ComponentType, CSSRules } from './types';

type Input = ReturnType<typeof input>;

const textareaInstance = new Base({
  as: 'textarea',
  lineHeight: 'short',
  minHeight: '80px',
  py: '8px',
  resize: 'none'
});

const Textarea = ((props: CSSRules): Input => {
  return textareaInstance.render(props);
}) as ComponentType;

attachMethodsToInstance(Textarea, textareaInstance);

Textarea.displayName = 'Textarea';

export default Textarea;
