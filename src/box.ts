import base, { Base} from './system/base';

interface Props {
  fun?: boolean;
  pseudo?: any;
  css?: string | undefined;
}

const Box = ({ css, ...props }: Props, ref: object) : Base => {
  return base(props, ref, css);
};

Box.displayName = 'Box'

export default Box;
