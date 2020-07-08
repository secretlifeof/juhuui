## Introduction

Juhuui is a UI library that is inspired by Material-ui and Chakra-ui. Behind the scenes it creates atomic CSS. The existing libraries are good and Rebass also has a small amount of components like Juhuui. Our principles are stolen from other great thinkers. We plan to have a [recipes](/recipes) section for all the components that that can composed from smaller ones like menu, spinner or an accordion, so they can be copy and pasted. It is themeable (else it would not be a UI library) and writing media queries is opinionated but simple. We love creature to creature contact, so feel free to give us a kiss.

> Recommended reading about atomic CSS-in-JS in this [article by Sébastien Lorber](https://sebastienlorber.com/atomic-css-in-js).

It is not dependent on React or Preact, so it needs a createElement function.

```javascript
createElement(tag | component, { props }, [children]);
```

### Getting started

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

#### Vanilla style

You can also just let Juhuui return a string of classNames. Use the css prop. For this no setup is needed.

```javascript
import { css } from 'juhuui';

// need to use JSX because we forgot how to write HTML 🤷🏽‍♂️ 🤷🏽‍♀️
const classNames = css({
	color: 'green',
	bg: ['blue.300', 'green400', 'brown.500']
});

<div className={classNames}>Hello world</div>;
```

Hey, if you feel that something is missing please give some feedback :-)
