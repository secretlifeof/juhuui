import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import input from './input';
// import { Render } from './system/render';

type Input = ReturnType<typeof input>;

const textareaInstance = new Base({
  as: 'textarea',
  lineHeight: 'short',
  minHeight: '80px',
  py: '8px',
  resize: 'none'
});

function Textarea(props: any): Input {
  return textareaInstance.render(props);
}

attachMethodsToInstance(Textarea, textareaInstance);

Textarea.displayName = 'Textarea';

export default Textarea;
