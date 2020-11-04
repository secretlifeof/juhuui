# JUHUUI

### UI tool intended for design systems

I made this tool because because I wanted the best of (very objective) Styled-Components, Chakra-UI, but with atomic CSS classes. Merge and nest components. Create variants. Hope that you will experience the same joy that I have using Juhuui.

---

#### 🔔 Work in progress

This is a work in progress and the API is still being finalized. Please install juhuui@next for features described below.Feedback is also kindness :-)

---

#### Features

- Nesting components
- Theme (default/customizable)
- Relatively Small (<10kb)
- Descriptive class names in developer mode (_"color-orange sm:color-blue md:color-green"_)
- @media queries are written as arrays (_['green', 'orange', 'pink']_)
- Same shortcuts as Styled-System
- Extract critical CSS for server side rendering
- Implement darkmode using CSS variables

## Installation

**install from npm:**

```shell
npm install juhuui@next
```

## Usage

It needs a createElement function so it knows how build components. Add this somewhere only once in your javascript tree.

```js
import { setup } from 'juhuui';
import { createElement } from 'react';

setup(createElement);
```

## Inline and overwriting styled components

Juhu you can start building components.

```js
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

```javascript
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

```javascript
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

```js
import { css } from 'juhuui';

const classNames = css({
  color: 'green',
  bg: ['blue.300', 'green400', 'brown.500']
});

<div classNames={classNames}></div>;
```

## Server side rendering

For extracting critical CSS please use the extractCss function.

Here is a short example how you would do this in Next.js. The data attributes needs to be called "data-process".

```js
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
  defaultFun: true,
  forwardRef
});
```

## Motivation

Creating a design system tool with a clean API. One that behind the scenes generates atomic CSS classes. Merging components and setting up variants should feel simple (hopefully that is the case).

Any feedback is met with love and curiosity. Have fun! 💚

## Future stuff

- [x] ForwardRef works for styled components not inline
- [ ] Add vendor prefix to options
- [ ] Minimal version without a default theme
- [ ] Default React/Preact versions without a need for calling setup
- [ ] Improve type safety

## Benchmarks

You can test and compare it yourself [here](https://ui-benchmark.vercel.app). All credits go to [Styled-Components](https://github.com/styled-components/styled-components) and [Necolas](https://github.com/necolas) for creating this.

## Thanks

Thanks to all for being here and beforehand for anybody who wants to contribute either by reporting a bug or by a PR.

## Inspiration

- [HTM](https://github.com/developit/htm) by [@developit](https://twitter.com/_developit)
- [Goober](https://github.com/cristianbote/goober) by [@cristianbote](https://twitter.com/cristianbote_)
- [Chakra-UI](https://github.com/chakra-ui/chakra-ui) by [@segunadebayo](https://twitter.com/thesegunadebayo)
- [@JoviDeCroock](https://twitter.com/jovidec) for being an inspiration on how to behave online
