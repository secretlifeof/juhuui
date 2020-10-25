import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import checkTheme from './theme/checkTheme';
import { ComponentType, CSSRules } from './types';

interface P {
  divideEqual?: boolean;
  isInline?: boolean | boolean[];
  isReversed?: boolean;
  pseudo?: any;
  spacing?: string | number;
  gap?: string | number;
  [key: string]: any;
}

type Props = P & CSSRules;

const stackInstance = new Base(
  ({
    divideEqual = true,
    isInline = false,
    isReversed = false,
    spacing,
    gap: gapIn = 2
  }: Props) => {
    const isInlineArr = Array.isArray(isInline);
    const gap = spacing || gapIn;
    const isGapArr = Array.isArray(gap);
    const INITIAL = 'initial';

    const rowReversed = isReversed ? 'row-reverse' : 'row';
    const columnReversed = isReversed ? 'column-reverse' : 'column';
    const flexDirectionArr =
      isInlineArr &&
      (isInline as boolean[]).map((bol: boolean) =>
        bol ? rowReversed : columnReversed
      );
    const flexDirectionStr = isInline ? rowReversed : columnReversed;
    const flexDirection = isInlineArr ? flexDirectionArr : flexDirectionStr;

    const spacingValue = !Array.isArray(gap)
      ? checkTheme('mx', gap.toString())
      : gap.map((value) => checkTheme('mx', value));

    /* eslint no-nested-ternary: "off"  */
    const mx = isGapArr
      ? spacingValue.map((value: string, index: number) =>
          isInlineArr
            ? (isInline as boolean[])[index]
              ? value
              : INITIAL
            : isInline
            ? value
            : INITIAL
        )
      : isInlineArr
      ? (isInline as boolean[]).map((value: boolean) =>
          value ? spacingValue : INITIAL
        )
      : isInline
      ? spacingValue
      : INITIAL;
    const my = isGapArr
      ? spacingValue.map((value: string, index: number) =>
          isInlineArr
            ? (isInline as boolean[])[index]
              ? INITIAL
              : value
            : isInline
            ? INITIAL
            : value
        )
      : isInlineArr
      ? (isInline as boolean[]).map((value: boolean) =>
          !value ? spacingValue : INITIAL
        )
      : isInline
      ? INITIAL
      : spacingValue;

    return {
      display: 'flex',
      flexDirection,
      '& > *:not(:first-child)': {
        ...(isReversed ? { marginBottom: my } : { marginTop: my }),
        ...(isReversed ? { marginRight: mx } : { marginLeft: mx })
      },
      ...(divideEqual && {
        '& > *': {
          flex: 1
        }
      })
    };
  },
  ['divideEqual', 'isInline', 'isReversed', 'spacing', 'gap']
);

/**
 * Stack.
 * @param divideEqual - Divide size of children equally
 * @param gap - Gap between children
 * @param isInline - true is vertical, false is horizontal orientation
 * @param isReversed - Direction of children
 * @param stack - Gap between children
 * @returns JSX Element
 * @example
 * <Stack>
 *  <Box>Hello</Box>
 *  <Box>there</Box>
 * </Stack>
 */
const Stack = ((props: Props): Render => {
  return stackInstance.render(props);
}) as ComponentType<P>;

attachMethodsToInstance(Stack, stackInstance);

Stack.displayName = 'Stack';

export default Stack;
