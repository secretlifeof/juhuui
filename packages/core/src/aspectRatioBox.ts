import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { ComponentType, CSSRules } from './types';

export interface P {
  fun?: boolean;
  ratio?: number;
  pseudo?: any;
  [key: string]: any;
}

export type Props = P & CSSRules;

/**
 * Constrain a box to a ratio.
 * @param ratio - Ratio as number
 * @returns JSX Element
 * @example
 * <AspectRatioBox><Img /></AspectRatioBox>
 */
const aspectRatioBox = new Base(
  ({ fun = true, ratio = 4 / 3 }: any) => ({
    fun,
    baseStyles: {
      position: 'relative',
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
      }
    }
  }),
  ['ratio']
);

const AspectRatioBox = ((props: Props) =>
  aspectRatioBox.render(props)) as ComponentType<P>;

attachMethodsToInstance(AspectRatioBox, aspectRatioBox);

AspectRatioBox.displayName = 'AspectRatioBox';

export default AspectRatioBox;
