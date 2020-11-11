## Theme

Changing the theme is simple. The setup function takes a second options object, also containing theme.

```javascript
import { setup, theme as juhuuiTheme } from 'juhuui';
import { createElement } from 'react';

const theme = {
  colors: {
    ...juhuuiTheme.colors,
    juhuui: {
      50: 'var(--c50)',
      100: 'var(--c100)',
      200: 'var(--c200)',
      300: 'var(--c300)',
      900: 'var(--c900)'
    }
  }
};

setup(createElement, {
  theme
});
```

### Defaults

The default theme properties are provided as an object for convenience.

#### breakpoints

An array of breakpoints. This follows the mobile first principle so the first value are added to root. The rest are added to "@media (min-width: \$breakpoint)".

```js
['30em', '48em', '62em'];
```

#### colors

```javascript
{
  black: '#000',
  white: '#fff',

  gray: {
    50: '#FAFAFB',
    100: '#ECEDF1',
    200: '#DDDFE6',
    300: '#CED2DC',
    400: '#C5C9D5',
    500: '#BABFCD',
    600: '#9AA2B6',
    700: '#6A7592',
    800: '#474E62',
    900: '#181A21'
  },

  red: {
    50: '#F8E1E1',
    100: '#F1C3C3',
    200: '#E28787',
    300: '#DE7878',
    400: '#D44C4C',
    500: '#C93030',
    600: '#AC2A2A',
    700: '#902323',
    800: '#651818',
    900: '#390E0E'
  },

  orange: {
    50: '#FDF0E1',
    100: '#FBE1C3',
    200: '#F8CA96',
    300: '#F5B468',
    400: '#F3A44A',
    500: '#f2952a',
    600: '#E6820F',
    700: '#C06C0C',
    800: '#864C09',
    900: '#3A2004'
  },

  yellow: {
    50: '#FEFBE3',
    100: '#FDF8C6',
    200: '#FCF29C',
    300: '#FBED72',
    400: '#FAE955',
    500: '#F9E739',
    600: '#F8E00F',
    700: '#D4BF07',
    800: '#7F7304',
    900: '#2A2601'
  },

  green: {
    50: '#EFF7E4',
    100: '#D7ECBD',
    200: '#BEE095',
    300: '#AED87A',
    400: '#9ED160',
    500: '#8EC947',
    600: '#7AB434',
    700: '#517823',
    800: '#293C11',
    900: '#141E09'
  },

  blue: {
    50: '#F0F4FD',
    100: '#C3D1F8',
    200: '#87A3F1',
    300: '#698CED',
    400: '#4B75EA',
    500: '#2D5FE7',
    600: '#194BD3',
    700: '#13389E',
    800: '#0C256A',
    900: '#061335'
  },

  purple: {
    50: '#FBF5FD',
    100: '#F0D9F8',
    200: '#E4BCF3',
    300: '#DDA9EF',
    400: '#D18CEA',
    500: '#C979E6',
    600: '#B84FDF',
    700: '#851FAA',
    800: '#53136A',
    900: '#320C40'
  },

  pink: {
    50: '#FCF0F8',
    100: '#F7D3EB',
    200: '#F4C4E4',
    300: '#F1B5DD',
    400: '#EFA6D7',
    500: '#EC97D0',
    600: '#DF51B0',
    700: '#D32799',
    800: '#8C1A66',
    900: '#2F0922'
  }
}
```

#### fonts

Accessed by fontFamily.

```javascript
{
  body: 'system-ui, sans-serif',
  heading: 'Georgia, serif',
  mono: 'Menlo, monospace'
}
```

#### fontSizes

Accessed by fontSize.

```javascript
{
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '2.65rem',
  '6xl': '3rem',
  '7xl': '3.5rem',
  '8xl': '4rem'
}
```

#### fontWeights

Accessed by fontWeight.

```javascript
{
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
}
```

#### icons

Accessed by the name property on Icon and ButtonIcon. No defaults.

#### letterSpacings

Accessed by letterSpacing.

```javascript
{
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em'
}
```

#### lineHeights

Accessed by lineHeight.

```javascript
{
  none: '1',
  shorter: '1.25',
  short: '1.375',
  base: '1.5',
  tall: '1.625',
  taller: '2'
}
```

#### opacity

Accessed by opacity.

```javascript
{
  '0': '0',
  '20%': '0.2',
  '40%': '0.4',
  '60%': '0.6',
  '80%': '0.8',
  '100%': '1'
}
```

#### radii

Accessed by border, borderBottomLeftRadius, borderBottomRightRadius, borderRadius, borderTopLeftRadius and borderTopRightRadius.

```javascript
{
  none: '0',
  sm: '0.125rem',
  md: '0.25rem',
  lg: '0.5rem',
  full: '9999px'
}
```

#### shadows

Accessed by boxShadow.

```javascript
{
  sm: 'rgba(99, 99, 99, 0.2) 0px 2px 7px 0px',
  md:
    'rgba(0, 0, 0, 0.1) 0px 20px 23px -7px, rgba(0, 0, 0, 0.04) 0px 10px 9px -7px',
  lg: 'rgba(0, 0, 0, 0.2) 0px 21px 50px -8px',
  xl:
    'rgba(17, 17, 26, 0.1) 0px 8px 21px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 21px 67px',
  '2xl': 'rgba(0, 0, 0, 0.15) 2px 34px 36px 1px',
  outline:
    'rgba(0, 0, 0, 0.1) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;',
  inner: 'rgba(0, 0, 0, 0.04) 0px -1px 5px 0px inset;'
}
```

#### sizes

Accessed by bottom, gridGap, gridRowGap, gridColumnGap, height, left, margin, marginTop, marginRight, marginBottom, marginLeft, maxHeight, maxWidth, minHeight, minWidth, mx, my, padding, paddingTop, paddingRight, paddingBottom, paddingLeft, right, space, top and width.

```javascript
{
  '0': '0px',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '14': '3.5rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
  '3xs': '14rem',
  '2xs': '16rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  full: '100%',
  half: '50%'
}
```

#### various

All CSS properties can be accessed by this key.

#### zIndices

Accessed by zIndex.

```javascript
{
  hide: -1,
  base: 0,
  floating: 1,
  top: 2
}
```
