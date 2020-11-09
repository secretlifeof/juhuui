import colors, { ColorObject } from './colors';
import fonts from './fonts';
import fontSizes from './fontSizes';
import fontWeights from './fontWeights';
import icons from './icons';
import letterSpacings from './letterSpacings';
import lineHeights from './lineHeights';
import opacity from './opacity';
import radii from './radii';
import shadows from './shadows';
import sizes from './sizes';
import zIndices from './zIndices';

export interface Theme {
  breakpoints: string[];
  colors: {
    [key: string]: ColorObject | string | any;
  };
  fonts: {
    [key: string]: string;
  };
  fontSizes: {
    [key: string]: string;
  };
  fontWeights: {
    [key: string]: number;
  };
  icons: {
    [key: string]: string;
  };
  letterSpacings: {
    [key: string]: string;
  };
  lineHeights: {
    [key: string]: string;
  };
  opacity: {
    [key: string]: string;
  };
  radii: {
    [key: string]: string;
  };
  shadows: {
    [key: string]: string;
  };
  sizes: {
    [key: string]: string;
  };

  various: {
    [key: string]: any;
  };
  zIndices: {
    [key: string]: number;
  };
  [key: string]: any;
}

const theme: Theme = {
  breakpoints: ['48em', '62em'],
  colors,
  fonts,
  fontSizes,
  fontWeights,
  icons,
  letterSpacings,
  lineHeights,
  sizes,
  shadows,
  opacity,
  radii,
  various: {},
  zIndices
};

export { sizes };

export default theme;
