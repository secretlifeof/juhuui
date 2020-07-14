import base, { Base } from './system/base';
import { themeInternal as theme } from './system/setup';
import withHelper from './system/withHelper';
import createElement from './utilities/createElementFromString';

interface Props {
  color: string;
  // isInline: boolean;
  hoverColor?: string;
  size: string;
  name: string;
  // fun: boolean;
  pseudo: object;
  svg: string;
  rest: any;
}

function Icon({
  hoverColor,
  color,
  name = 'moon',
  // isInline = false,
  pseudo: pseudoIn = {},
  svg,
  ...rest
}: Props): Base {
  const themeSvg = theme.icons[name];
  // @ts-ignore
  const child = createElement(svg || themeSvg);

  const pseudo = {
    '& *': {
      fill: color,
      stroke: color
    },
    ...(hoverColor && {
      '&:hover *': {
        fill: hoverColor,
        stroke: hoverColor
      }
    }),
    ...pseudoIn
  };

  const style = {
    height: 'auto',
    width: 'auto',
    ...rest
  };

  return base({ ...child.props, pseudo, fun: true, as: 'svg', ...style });
}

Icon.with = withHelper(Icon);

Icon.displayName = 'Icon';

export default Icon;
