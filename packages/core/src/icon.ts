import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { themeInternal as theme } from './system/setup';
import { ComponentType, CSSRules } from './types';
import createElement from './utilities/createElementFromString';

interface P {
  color?: string;
  hoverColor?: string;
  size?: string;
  name?: string;
  pseudo?: object;
  svg?: string;
  [key: string]: any;
}

type Props = P & CSSRules;

const iconInstance = new Base(
  ({ color, hoverColor, name, svg }: Props) => {
    const themeSvg = name && theme.icons[name];
    // @ts-ignore
    const child = createElement(svg || themeSvg);

    return {
      as: 'svg',
      fun: true,
      ...child.props,
      // height: 'auto',
      // width: 'auto',
      baseStyles: {
        size: '8',
        p: '1px',
        '& *': {
          fill: color,
          stroke: color
        },
        ...(hoverColor && {
          '&:hover *': {
            fill: hoverColor,
            stroke: hoverColor
          }
        })
      }
      // p to avoid bug with safari
    };
  },
  ['hoverColor', 'color', 'name', 'svg']
);

/**
 * SVG Icon.
 * @param color - Stroke & fill color
 * @param hover - Stroke & fill hover color
 * @param name - SVG string from theme
 * @param svg - SVG string
 * @returns JSX Element
 * @example
 * <Icon name="moon" />
 */
const Icon = ((props: Props): Render => {
  return iconInstance.render(props);
}) as ComponentType<P>;

attachMethodsToInstance(Icon, iconInstance);

Icon.displayName = 'Icon';

export default Icon;
