import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { ComponentType, CSSRules } from './types';

export interface Props extends CSSRules {
  activeColor: string;
  fun: boolean;
  hoverColor: string;
  pseudo: any;
}

interface BaseStyle {
  [key: string]: string;
}

export const baseStyle: BaseStyle = {
  alignItems: 'center',
  appearance: 'none',
  border: '1px solid',
  backgroundColor: 'inherit',
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1.2',
  outline: 'none',
  position: 'relative',
  userSelect: 'none',
  transition: 'all 250ms',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap'
};

const button = new Base(
  ({ activeColor, fun, hoverColor, pseudo }: Props) => ({
    ...baseStyle,
    as: 'button',
    borderRadius: 'md',
    _hover: {
      background: hoverColor
    },
    fun,
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
  }),
  ['activeColor', 'hoverColor']
);

function Button(props: any) {
  return button.render(props);
}

attachMethodsToInstance(Button as ComponentType, button);

Button.displayName = 'Button';

export default Button;
