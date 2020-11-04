## Input

Organizing ist not always simple. Help yourself with a list.

#### Import component

```js
import { List, ListItem } from 'juhuui';
```

#### Base

```js-live
<Input />
```

#### Outlined

```js-live
<Input
  bg='white'
  border='1px solid'
  boxShadow='none !important'
  borderColor='inherit'
  userSelect='all'
  _disabled={{
    opacity: '0.4',
    cursor: 'not-allowed',
  }}
  _focus={{
    zIndex: 1,
    borderColor: 'blue.500',
    boxShadow: `0 0 0 1px blue`
  }}
  _invalid={{
    borderColor: 'red.500',
    boxShadow: `0 0 0 1px red`
  }}
/>
```

#### Filled

```js-live
<Input
  bg='yellow.100'
  border='2px solid'
  boxShadow='none !important'
  borderColor='transparent'
  userSelect='all'
  _disabled={{
    opacity: '0.4',
    cursor: 'not-allowed',
  }}
  _focus={{
    zIndex: 1,
    bg: 'transparent',
    borderColor: 'blue.500',
  }}
  _hover={{
    bg: 'blue.100',
  }}
  _invalid={{
    borderColor: 'red.500',
  }}
/>
```

#### Flushed

```js-live
<Input
  bg='transparent'
  borderBottom='2px solid'
  boxShadow='none !important'
  borderColor='inherit'
  rounded="0"
  userSelect='all'
  _focus={{
    zIndex: 1,
    borderColor: 'blue.500',
  }}
  _invalid={{
    borderColor: 'red.500',
  }}
/>
```

#### Sizes

```js-live
<Stack gap="2">
  <Input
    size="sm"
    bg='white'
    border='1px solid'
    boxShadow='none !important'
    borderColor='inherit'
    userSelect='all'
    _disabled={{
      opacity: '0.4',
      cursor: 'not-allowed',
    }}
    _focus={{
      zIndex: 1,
      borderColor: 'blue.500',
      boxShadow: `0 0 0 1px blue`
    }}
    _invalid={{
      borderColor: 'red.500',
      boxShadow: `0 0 0 1px red`
    }}
  />
  <Input
    size="md"
    bg='white'
    border='1px solid'
    boxShadow='none !important'
    borderColor='inherit'
    userSelect='all'
    _disabled={{
      opacity: '0.4',
      cursor: 'not-allowed',
    }}
    _focus={{
      zIndex: 1,
      borderColor: 'blue.500',
      boxShadow: `0 0 0 1px blue`
    }}
    _invalid={{
      borderColor: 'red.500',
      boxShadow: `0 0 0 1px red`
    }}
  />
  <Input
    size="lg"
    bg='white'
    border='1px solid'
    boxShadow='none !important'
    borderColor='inherit'
    userSelect='all'
    _disabled={{
      opacity: '0.4',
      cursor: 'not-allowed',
    }}
    _focus={{
      zIndex: 1,
      borderColor: 'blue.500',
      boxShadow: `0 0 0 1px blue`
    }}
    _invalid={{
      borderColor: 'red.500',
      boxShadow: `0 0 0 1px red`
    }}
  />
</Stack>

```

#### Props

<TableBox>
  <tr>
    <th>PROPNAME</th>
    <th>INPUT</th>
    <th>DEFAULT</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <th>as</th>
    <th>string</th>
    <th>input</th>
    <th></th>
  </tr>
  <tr>
    <th>alignItems</th>
    <th>string</th>
    <th>center</th>
    <th></th>
  </tr>
  <tr>
    <th>appearance</th>
    <th>string</th>
    <th>none</th>
    <th></th>
  </tr>
  <tr>
    <th>display</th>
    <th>string</th>
    <th>flex</th>
    <th></th>
  </tr>
  <tr>
    <th>outline</th>
    <th>string</th>
    <th>none</th>
    <th></th>
  </tr>
  <tr>
    <th>position</th>
    <th>string</th>
    <th>relative</th>
    <th></th>
  </tr>
  <tr>
    <th>size</th>
    <th>sm|md|lg</th>
    <th>md</th>
    <th></th>
  </tr>
  <tr>
    <th>transition</th>
    <th>string</th>
    <th>all 0.2s</th>
    <th></th>
  </tr>
  <tr>
    <th>width</th>
    <th>string</th>
    <th>100%</th>
    <th></th>
  </tr>
</TableBox>

and all CSS properties.
