## Introduction

Juhuui is a UI library that is inspired by Material-ui and Chakra-ui. Behind the scenes it creates atomic CSS. UI libraries in general can be recommended. This is just another one. Our principles are stolen (or borrowed) from other great thinkers. We have a copy & paste [recipes](/recipes) section for all components that can be composed from smaller ones like menu, spinner or an accordion. Juhuui is themeable and you can write media queries in a simple but opinionated way. We value bodily contact, so feel free to give us a kiss or a github star.

> If you wish to know more about atomic CSS we recommend this [article by Sébastien Lorber](https://sebastienlorber.com/atomic-css-in-js).

### Getting started

Let´s get started. Because it isn´t dependent on React or Preact it needs a createElement function.

```javascript
createElement(tag | component, { props }, [children]);
```

#### Installation

```javascript
npm install juhuui
```

#### Setup

Add this somewhere in the root of your project. Only once.

```javascript
import { setup } from 'juhuui';
import { createElement } from 'react';

setup(createElement);
```

#### Simple component

All components take css property names (written in camelCase) as props.

```javascript
import { Box } from 'juhuui';

<Box fontSize="3em" color="brown">
  Hello world
</Box>;
```

#### Styled-Components way

All components can be written in a style similar to Styled-Components. Styles can be extended by writing them inline. At the moment you cannot extend styles by nesting components. Use the 'fw' prop to forward arguments because it will be removed from the DOM.

```javascript
import { Text } from 'juhuui';

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
```

#### Vanilla style

You can also just let Juhuui return a string of classNames. Use the css prop. For this no setup is needed.

```javascript
import { css } from 'juhuui';

// forgot how to write HTML 🤷🏽‍♀️ 🤷🏽‍♂️
const classNames = css({
  color: 'green',
  bg: ['blue.300', 'green400', 'brown.500']
});

<div className={classNames}>Hello world</div>;
```

Hey, if you feel that something is missing please give some feedback :-)
