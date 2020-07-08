# JUHUUI

### A relatively small and performant UI-library

> Hello creature. How are you? Do you also feel average? 😽

Juhuui is similar to other UI-libraries (there are sooo many...). The only thing that can be said, **try it and see if your brain feels comfortable using it**. [HTM](https://github.com/developit/htm) is the only dependency and is used for loading SVGs. It is flexible (not dependant on React/Preact), small (<9kb) and themeable.

---

#### 🔔 Find more information on our **[website](https://juhuui.com)**

---

#### Features

- Same shortcuts as Styled-System
- Theme (default/customizable)
- Small (<9kb)
- SSR rendering possible / extract critical CSS
- Easy to implement darkmode
- Mediaqueries are written as arrays (_['green', 'orange', 'pink']_)

## Installation

**install from npm:**

```js
npm install juhuui
```

## Usage

It needs a createElement function so it knows how build components. Add this somewhere only once in your javascript tree.

```js
import { setup } from 'juhuui';
import { createElement } from 'react'; // or h from Preact

setup(createElement);
```

Juhu, now you can start building components

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

## Vanilla taste

If you like vanilla or svelte you can use the exported css function. This can be used without setup.

```js
import { css } from 'juhuui';

const classNames = css({
  color: 'green',
  bg: ['blue.300', 'green400', 'brown.500']
});

const div = document.createElement('div');
div.classList.add(...classNames.split(' '));
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

The setup function takes a second object with options (more might be added), but at this moment there are only two.

```js
import { setup, theme } from 'juhuui';
import { h } from 'preact';

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
  defaultFun: true // activate fun=true on all components
});
```

## Motivation

The goal was to build a relatively small UI library without dependencies (not completely met). Using atomic CSS was an idea that came along afterwards. This is my first open source project and also my first using typescript. Calling it type safe would be an exaggeration.

Any feedback is met with love and curiosity. Have fun! 💚

## Future stuff

- [ ] ForwardRef 🤯 (need help implementing this)
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
- [@JoviDeCroock](https://twitter.com/jovidec) for being compassionate
