import base, { Base } from './system/base';
import withHelper from './system/withHelper';

interface Props {
  activeColor: string;
  fun: boolean;
  hoverColor: string;
  variant: string;
  variantColor: string;
  buttonSize: string;
  rest: any;
}

interface BaseStyle {
  [key: string]: string;
}

interface Sizes {
  [key: string]: {
    [key: string]: string | number;
  };
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

export const sizes: Sizes = {
  xs: {
    height: 6,
    minWidth: 6,
    fontSize: 'xs',
    px: 2
  },
  sm: {
    height: 8,
    minWidth: 8,
    fontSize: 'sm',
    px: 3
  },
  md: {
    height: 10,
    minWidth: 10,
    fontSize: 'md',
    px: 4
  },
  lg: {
    height: 12,
    minWidth: 12,
    fontSize: 'lg',
    px: 6
  }
};

function Button({
  activeColor = '',
  buttonSize = 'md',
  fun = true,
  hoverColor = '',
  ...rest
}: Props): Base {
  const style = {
    ...baseStyle,
    ...sizes[buttonSize],
    borderRadius: 'md',
    _hover: {
      background: hoverColor
    },
    _active: {
      background: activeColor
    }
  };

  const pseudo = {
    '&:focus': {
      boxShadow: 'outline'
    },
    '&:disabled': {
      opacity: '40%',
      cursor: 'not-allowed',
      boxShadow: 'none'
    }
  };

  return base({ ...style, pseudo, as: 'button', fun, ...rest });
}

Button.with = withHelper(Button);

Button.displayName = 'Button';

export default Button;
