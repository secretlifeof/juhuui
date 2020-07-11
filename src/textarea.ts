import input from './input';
import withHelper from './system/withHelper';

type Input = ReturnType<typeof input>;

function Textarea(props: any): Input {
  const style = {
    as: 'textarea',
    lineHeight: 'short',
    minHeight: '80px',
    py: '8px',
    resize: 'none'
  };

  return input({ ...style, ...props });
}

Textarea.with = withHelper(Textarea);

Textarea.displayName = 'Textarea';

export default Textarea;
