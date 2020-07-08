import input from './input';

type Input = ReturnType<typeof input>

function Textarea(props: any, ref: object) : Input {
  const style = {
    as: 'textarea',
    lineHeight: 'short',
    minHeight: '80px',
    py: '8px',
    resize: 'none',
  };

  return input({ ...style, ...props }, ref);
}

Textarea.displayName = 'Textarea';

export default Textarea;
