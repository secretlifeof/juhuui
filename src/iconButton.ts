import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { baseStyle } from './button';
import { Render } from './system/render';
import { themeInternal as theme } from './system/setup';
import { ComponentType, CSSRules } from './types';
import createElement from './utilities/createElementFromString';

interface Props {
  activeColor: string;
  fun: boolean;
  name: string;
  buttonSize: string;
  hoverColor: string;
  pseudo: object;
  svg: string;
  variant: string;
  variantColor: string;
  rest: any;
}

const iconButtonInstance = new Base(
  ({ activeColor, hoverColor, name, pseudo, svg }: Props) => {
    const themeSvg = theme.icons[name];
    // @ts-ignore
    const child = createElement(svg || themeSvg);

    return {
      ...baseStyle,
      children: child,
      as: 'button',
      borderRadius: 'md',
      _hover: {
        background: hoverColor
      },
      fun: true,
      _active: {
        background: activeColor
      },
      pseudo: {
        '&:focus': {
          boxShadow: 'outline'
        },
        '&:disabled': {
          opacity: '40%',
          cursor: 'not-allowed',
          boxShadow: 'none'
        },
        ...pseudo
      }
    };
  },
  ['activeColor', 'hoverColor']
);

function IconButton(props: CSSRules): Render {
  return iconButtonInstance.render(props);
}

attachMethodsToInstance(IconButton as ComponentType, iconButtonInstance);

IconButton.displayName = 'IconButton';

export default IconButton;
