import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { baseStyle } from './button';
import { Render } from './system/render';
import { themeInternal as theme } from './system/setup';
import { ComponentType, CSSRules } from './types';
import createElement from './utilities/createElementFromString';

interface P {
  activeColor?: string;
  fun?: boolean;
  name?: string;
  hoverColor?: string;
  pseudo?: object;
  svg?: string;
  [key: string]: any;
}

type Props = P & CSSRules;

const iconButtonInstance = new Base(
  ({ activeColor, hoverColor, name, svg }: Props) => {
    const themeSvg = name && theme.icons[name];
    // @ts-ignore
    const child = createElement(svg || themeSvg);

    return {
      children: child,
      as: 'button',
      baseStyles: {
        ...baseStyle,
        borderRadius: 'md',
        '&:hover': {
          background: hoverColor
        },
        fun: true,
        '&:active': {
          background: activeColor
        },
        '&:focus': {
          boxShadow: 'outline'
        },
        '&:disabled': {
          opacity: '40%',
          cursor: 'not-allowed',
          boxShadow: 'none'
        }
      }
    };
  },
  ['activeColor', 'hoverColor', 'name', 'svg']
);
/**
 * Button with SVG icon with some default styling.
 * @param activeColor - :active background
 * @param hoverColor - :hover background
 * @param name - svg from theme obj.
 * @param svg - optional svg string
 * @returns JSX Element
 * @example
 * <IconButton name="moon">Click</IconButton>
 */
const IconButton = ((props: Props): Render => {
  return iconButtonInstance.render(props);
}) as ComponentType<P>;

attachMethodsToInstance(IconButton, iconButtonInstance);

IconButton.displayName = 'IconButton';

export default IconButton;
