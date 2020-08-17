import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import checkTheme from './theme/checkTheme';

interface Props {
  divideEqual: boolean;
  isInline: boolean | boolean[];
  isReversed: boolean;
  pseudo: any;
  spacing: string | number;
  gap: string | number;
  rest: any;
}

const stackInstance = new Base(
  ({
    divideEqual = true,
    isInline = false,
    isReversed = false,
    pseudo = {},
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
      pseudo: {
        '& > *:not(:first-child)': {
          ...(isReversed ? { marginBottom: my } : { marginTop: my }),
          ...(isReversed ? { marginRight: mx } : { marginLeft: mx })
        },
        ...(divideEqual && {
          '& > *': {
            flex: 1
          }
        }),
        ...pseudo
      }
    };
  }
);

function Stack(props: any): Render {
  return stackInstance.render(props);
}

attachMethodsToInstance(Stack, stackInstance);

Stack.displayName = 'Stack';

export default Stack;
