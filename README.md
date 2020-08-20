# JUHUUI

### UI tool intended for design systems

Juhuui is a a UI library and a tool made for building design systems. Merge and nest components in a simple manner. Variants can be created programmatically.

---

#### 🔔 Work in progress

This is a work in progress and the API is still being finalized. Please install juhuui@next for features described below.
You can of course test it and provide some feedback :-)

---

#### Features

- Nesting components
- Theme (default/customizable)
- Small (<10kb)
- Same shortcuts as Styled-System
- Extract critical CSS for server side rendering
- Easy to implement darkmode
- @media queries are written as arrays (_['green', 'orange', 'pink']_)

## Installation

**install from npm:**

```js
npm install juhuui@next
```

## Usage

It needs a createElement function so it knows how build components. Add this somewhere only once in your javascript tree.

```js
import { setup } from 'juhuui';
import { createElement } from 'react'; // or h from Preact

setup(createElement);
```

## Inline components

Juhu you can start building components.

```js
import { Box, Flex, Fun, Icon, Text } from 'juhuui';

const SayWhat = () => (
  <Flex direction="column">
    <Box color="green">RAINBOW</Box>
    <Fun
      pseudo={{
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

All components can be created externally. This is useful for separating styles and components. Styles can be overwritten by writing them inline. Please use the 'fw' prop to forward arguments because 'fw' will be removed from the DOM.

```javascript
import { Text, Box } from 'juhuui';

const UpperCase = Text.with({
  textTransform: 'uppercase',
  color: 'orange.600'
})

<UpperCase>Hello there!</UpperCase>;

// or

const Colorful = Text.with({(fw}) => ({
  bg: fw.background,
  color: 'orange.600'
}))

<Colorful fw={{ background: 'yellow.200' }}>Orange</Colorful>;
// or overwrite styles by adding a css property to the component
<Colorful color="red.300" fw={{ background: 'yellow.200' }}>Red</Colorful>;

// or merge

const GreenBox = Box.with({ bg: 'green' })
const Red = Text.with({ color: 'red' })
const SpaceCase = Red.merge([GreenBox]).with({ textTransform: 'uppercase' })

<SpaceCase>Invisible green</SpaceCase>
```

## Create class names

Function for creating class names. To give you the freedom of designing like according to your needs. If you are looking for a tool that only creates class names we recommend a smaller tool called [otion](https://github.com/kripod/otion).

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

Here is a short example how you would do this in Next.js.

```js
// _document.js
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { extractCss } from 'juhuui';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();

    const css = extractCss();
    return { ...page, css };
  }

  render() {
    return (
      <Html>
        <Head>
          <style
            id={'_juhuui'}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
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
  defaultFun: true, // activate fun=true on all components
  forwardRef // necessary if you need refs
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
- [ ] More recipes
- [ ] Improve type safety
- [ ] Improve performance after server side rendering

## Benchmarks

please see [benchmarks.md](/benchmarks.md)

## Thanks

Thanks to all for being here and beforehand for anybody who wants to contribute either by reporting a bug or by a PR.

## Inspiration

- [HTM](https://github.com/developit/htm) by [@developit](https://twitter.com/_developit)
- [Goober](https://github.com/cristianbote/goober) by [@cristianbote](https://twitter.com/cristianbote_)
- [Chakra-UI](https://github.com/chakra-ui/chakra-ui) by [@segunadebayo](https://twitter.com/thesegunadebayo)
- [@JoviDeCroock](https://twitter.com/jovidec) for being an inspiration on how to behave online
