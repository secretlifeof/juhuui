import { themeInternal as theme } from '../system/setup';
import get from '../utilities/get';

interface AssociatedThemeProperty {
  [key: string]: string;
}

/**
 * Checks values against theme object and returns theme value
 *
 */

const themeProperty: AssociatedThemeProperty = {
  background: 'colors',
  'background-color': 'colors',
  border: 'radii',
  'border-bottom': 'colors',
  'border-bottom-color': 'colors',
  'border-bottom-left-radius': 'radii',
  'border-bottom-right-radius': 'radii',
  'border-color': 'colors',
  'border-left': 'colors',
  'border-left-color': 'colors',
  'border-radius': 'radii',
  'border-right': 'colors',
  'border-right-color': 'colors',
  'border-top': 'colors',
  'border-top-color': 'colors',
  'border-top-left-radius': 'radii',
  'border-top-right-radius': 'radii',
  bottom: 'sizes',
  'box-shadow': 'shadows',
  color: 'colors',
  'font-family': 'fonts',
  'font-size': 'fontSizes',
  'font-weight': 'fontWeights',
  'grid-gap': 'sizes',
  'grid-row-gap': 'sizes',
  'grid-column-gap': 'sizes',
  height: 'sizes',
  fill: 'colors',
  left: 'sizes',
  'letter-spacing': 'letterSpacings',
  'line-height': 'lineHeights',
  margin: 'sizes',
  'margin-top': 'sizes',
  'margin-right': 'sizes',
  'margin-bottom': 'sizes',
  'margin-left': 'sizes',
  'max-height': 'sizes',
  'max-width': 'sizes',
  'min-height': 'sizes',
  'min-width': 'sizes',
  mx: 'sizes',
  my: 'sizes',
  padding: 'sizes',
  'padding-top': 'sizes',
  'padding-right': 'sizes',
  'padding-bottom': 'sizes',
  'padding-left': 'sizes',
  right: 'sizes',
  stroke: 'colors',
  space: 'sizes',
  top: 'sizes',
  width: 'sizes',
  'z-index': 'zIndices'
};

const colorProperty = new Set([
  'color',
  'background',
  'background-color',
  'border-color',
  'border-top-color',
  'border-right-color',
  'border-bottom-color',
  'border-left-color',
  'border',
  'border-left',
  'border-right',
  'border-top',
  'border-bottom',
  'fill',
  'stroke'
]);

const longColorProperty = new Set([
  'border',
  'background',
  'border-color',
  'border-left',
  'border-right',
  'border-top',
  'border-bottom'
]);

const checkTheme = () => {
  const CACHE = new Map();

  return (property: string | string[], value: string | number) => {
    const p = !Array.isArray(property) ? property : property[0];
    const selectedThemeProperty: string = themeProperty[p];
    if (!selectedThemeProperty) return value;

    if (colorProperty.has(p)) {
      let color: string | object = CACHE.get(value);

      if (!color) {
        color = longColorProperty.has(p)
          ? (value as string)
              .split(' ')
              .map((c) => {
                const receivedColor = get(theme.colors, c, c);
                return typeof receivedColor === 'string'
                  ? receivedColor
                  : color;
              })
              .join(' ')
          : get(theme.colors, value as string, value);
        CACHE.set(value, color);
      }

      return color && typeof color !== 'object' ? color : value;
    }

    return theme[selectedThemeProperty][value] || theme.various[value] || value;
  };
};

export default checkTheme();
