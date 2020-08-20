import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';

export interface Props {
  fun: boolean;
  ratio: number;
  pseudo: any;
  rest: any;
  // [key: string]: any;
}
const aspectRatioBox = new Base(
  ({ fun = true, ratio = 4 / 3, pseudo: pseudoIn = {} }) => ({
    fun,
    position: 'relative',
    pseudo: {
      '&:before': {
        height: '0',
        content: "''",
        display: 'block',
        paddingBottom: Array.isArray(ratio)
          ? ratio.map((r) => `${(1 / r) * 100}%`)
          : `${(1 / ratio) * 100}%`
      },
      '& *:first-child': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
      },
      ...pseudoIn
    }
  }),
  ['ratio']
);

function AspectRatioBox(props: Props) {
  return aspectRatioBox.render(props);
}

attachMethodsToInstance(AspectRatioBox, aspectRatioBox);

AspectRatioBox.displayName = 'AspectRatioBox';

export default AspectRatioBox;
