<img alt="juhuui" src="https://juhuui.com/juhuui-social-logo.png">

[![npm version](https://img.shields.io/npm/v/juhuui.svg)](http://npm.im/juhuui)
[![npm downloads](https://img.shields.io/npm/dm/juhuui.svg)](http://npm.im/juhuui)
[![gzip size](http://img.badgesize.io/https://unpkg.com/juhuui/dist/juhuui.umd.js?compression=gzip&label=gzip)](http://npm.im/juhuui)
[![brotli size](http://img.badgesize.io/https://unpkg.com/juhuui/dist/juhuui.umd.js?compression=brotli&label=brotli)](http://npm.im/juhuui)

### UI tool intended for design systems

I made this tool wanting the best (very objective) of Styled-Components, Chakra-UI but with atomic CSS (single purpose classes). You can merge, nest and create variants. All this sweetness is packed into good performance.

Hopefully you will have the same joy using juhuUi as me.

---

#### Features

- Nesting components
- Theme (default/customizable)
- Descriptive class names in developer mode 🍭("color-orange sm:color-blue md:color-green")
- @media queries are written as arrays 🎨 (['green', 'orange', 'pink'])
- Same shortcuts as Styled-System ⚡️ ('p' for padding, 'my' for [margin-top, margin-bottom], 'c' for color, 'bg' backgroundColor, etc. )
- Extract "critical CSS" for server side rendering
- Implement darkmode using CSS variables

## Installation

```shell
yarn add juhuui
```

**or**

```shell
npm install juhuui
```

## Usage

It needs a createElement function so it knows how build components. Add this somewhere only once in your javascript tree. This is the solution for now.

```js
import { setup } from 'juhuui';
import { createElement } from 'react';

setup(createElement);
```

## Inline and overwriting styled components

Juhu you can start building components.

```jsx
import {
  AspectRatioBox,
  Button,
  Box,
  CircularProgress,
  Divider,
  Flex,
  Fun,
  Grid,
  Heading,
  Icon,
  IconButton,
  Input,
  Link,
  List,
  ListItem,
  Progress,
  Stack,
  Tag,
  Text,
  Textarea
} from 'juhuui';

const SayWhat = () => (
  <Flex css={{ direction: 'column' }}>
    <Box css={{ color: 'green' }}>RAINBOW</Box>
    <Fun
      css={{
        '&:hover *': {
          fill: ['red', 'yellow', 'blue']
        }
      }}
    >
      <Text>ZAUBERMOON</Text>
      <Icon name="moon" color="green" />
    </Fun>
  </Flex>
);
```

## Styled component

All components can be created externally. This is useful for separating styles and components. Styles can be overwritten by writing them inline. Please use the 'fw' prop to forward arguments because 'fw' will be removed from the DOM. The with function takes a second argument, an array of strings to be removed from the DOM, as an alternative to 'fw'.

```jsx
import { Text, Box } from 'juhuui';

const UpperCase = Text.with({
  textTransform: 'uppercase',
  c: 'orange.600'
})

<UpperCase>Hello there!</UpperCase>;

// or

const Colorful = Text.with(({fw}) => ({
  bg: fw.background,
  color: 'orange.600'
}))

<Colorful fw={{ background: 'yellow.200' }}>Orange</Colorful>;
// or overwrite styles by adding a css property inline
<Colorful css={{ backgroundColor  "red.300" }} fw={{ backgroundColor: 'yellow.200' }}>Red</Colorful>;

// or merge

const GreenBox = Box.with({ bg: 'green' })
const Red = Text.with({ color: 'red' })
const SpaceCase = Colorful.merge([GreenBox, Red]).with({ textTransform: 'uppercase' })

<SpaceCase>Invisible green</SpaceCase>
// or inline merge
<Box merge={[GreenBox, Red]}>
```

## Create variants

Variants are a probably a necessity for a good design system.

```jsx
import { Button } from 'juhuui'

const B = Button.variants({ variant: {
  green: {
    bg: 'green'
  },
  blue: {
    bg: 'blue'
  }
} }).with()

<B variant="green">GREENIE</B>
```

## Create class names

Function for creating class names. Just for the power of freedom. Performance is better than the above. If you are looking for a tool that only creates class names we recommend a smaller tool called [otion](https://github.com/kripod/otion).

```jsx
import { css } from 'juhuui';

const classNames = css({
  color: 'green',
  bg: ['blue.300', 'green400', 'brown.500']
});

<div classNames={classNames}></div>;
```

## Media queries

Media queries can be written as an array of values (associated with the theme object) or by using the media key.

```jsx
import { Box } from 'juhuui';

const Mercy = Box.with({
  media: {
    '(min-width: 90em)': {
      color: 'green.400',
    }
  }
  color: ['blue.300', 'green200', 'brown.500']
});

<Mercy>Merci</Mercy>;
```

## Server side rendering

For extracting critical CSS please use the extractCss function.

Here is a short example how you would do this in Next.js. The data attributes needs to be called "data-process".

```jsx
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { extractCss } from 'juhuui';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();

    const { css, data } = extractCss();
    return { ...page, css, data };
  }

  render() {
    return (
      <Html>
        <Head>
          <style
            id={'_juhuui'}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
            data-process={this.props.data}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

## Options

The setup function takes a second object with options.

```js
import { setup, theme } from 'juhuui';
import { h, forwardRef } from 'preact';

const newTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    juhuui: {
      50: 'white',
      100: '#fff7eb',
      200: '#e9f8e8',
      300: '#37b311',
      800: '#07130f',
      900: '#07130f'
    }
  }
};

setup(h, {
  theme: newTheme,
  defaultFun: true, // defaults to true
  forwardRef
});
```

## Future stuff

- [x] ForwardRef works for styled components not inline
- [ ] Move theme to a different package
- [ ] Default React/Preact versions without a need for calling setup
- [ ] Improve type safety (! high priority. Help highly appreciated)

## Benchmarks

You can test and compare it [live](https://ui-benchmark.vercel.app) or download the [repository](https://github.com/secretlifeof/ui-benchmarks). All credits go to [Styled-Components](https://github.com/styled-components/styled-components) and [Necolas](https://github.com/necolas) for creating this.

## Thanks

Thanks to all for being here and beforehand for anybody who wants to contribute either by reporting a bug or by a PR.

Any feedback is met with love and curiosity. Have fun! 💚

## Inspiration

- [HTM](https://github.com/developit/htm) by [@developit](https://twitter.com/_developit)
- [Goober](https://github.com/cristianbote/goober) by [@cristianbote](https://twitter.com/cristianbote_)
- [Chakra-UI](https://github.com/chakra-ui/chakra-ui) by [@segunadebayo](https://twitter.com/thesegunadebayo)
- [@JoviDeCroock](https://twitter.com/jovidec) mostly for his kindness
