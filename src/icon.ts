import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { themeInternal as theme } from './system/setup';
import { ComponentType, CSSRules } from './types';
import createElement from './utilities/createElementFromString';

interface P {
  color: string;
  hoverColor?: string;
  size: string;
  name: string;
  pseudo: object;
  svg: string;
}

type Props = P & CSSRules;

const iconInstance = new Base(
  ({ color, hoverColor, name, pseudo, svg }: Props) => {
    const themeSvg = theme.icons[name];
    // @ts-ignore
    const child = createElement(svg || themeSvg);

    return {
      as: 'svg',
      fun: true,
      ...child.props,
      height: 'auto',
      width: 'auto',
      // p to avoid bug with safari
      p: '1px',
      pseudo: {
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
        ...pseudo
      }
    };
  }
);

const Icon = ((props: Props): Render => {
  return iconInstance.render(props);
}) as ComponentType;

attachMethodsToInstance(Icon, iconInstance);

Icon.displayName = 'Icon';

export default Icon;
