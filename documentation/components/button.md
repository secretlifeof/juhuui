## Button

Click me. Creates an html button with some predefined basic properties.

#### Import component

```js
import { Button } from 'juhuui';
```

#### Simple button

Style with the css properties you know.

> Shortcuts:  
> hoverColor => \_hover={{ bg: 'green.200' }}  
> activeColor => \_active={{ bg: 'green.500' }}

```js-live
<Button
  bg="blue.600"
  borderColor="gray.400"
  buttonSize="md"
  color="blue.100"
  hoverColor="green.400"
>
  Do not touch
</Button>
```

#### Sizes

Choose between 4 predefined sizes (xs, sm, md, lg) or set the size/width/height property by yourself. Default size is md.

```js-live
<Stack divideEqual={false} isInline>
  <Button
    bg="blue.600"
    buttonSize="xs"
    color="blue.100"
  >
    xs button
  </Button>
  <Button
    bg="blue.600"
    buttonSize="sm"
    color="blue.100"
  >
    sm button
  </Button>
  <Button
    bg="blue.600"
    buttonSize="md"
    color="blue.100"
  >
    md button
  </Button>
  <Button
    bg="blue.600"
    buttonSize="lg"
    color="blue.100"
  >
    lg button
  </Button>
</Stack>
```

#### Examples

```js-live
<Flex justify="space-between">
  <Button
    bg="blue.600"
    borderColor="gray.400"
    buttonSize="md"
    color="blue.100"
    hoverColor="green.400"
  >
    Please be gentle
  </Button>
  <Button
    borderColor="green.500"
    buttonSize="md"
    color="green.600"
    hoverColor="gray.200"
  >
    Please be gentle
  </Button>
  <Button
    borderColor="gray.800"
    buttonSize="md"
    color="gray.800"
    _hover={{
      textDecoration: 'underline',
    }}
  >
    Please be gentle
  </Button>
  <Button
    border="none"
    buttonSize="md"
    color="gray.800"
    hoverColor="gray.200"
  >
    Please be gentle
  </Button>
  <Button
    bg="gray.200"
    border="none"
    buttonSize="md"
    color="gray.800"
    hoverColor="gray.300"
  >
    Please be gentle
  </Button>
</Flex>
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
    <th>activeColor</th>
    <th>string|array</th>
    <th></th>
    <th>set on active bg-color</th>
  </tr>
  <tr>
    <th>alignItems</th>
    <th>string|array</th>
    <th>center</th>
    <th></th>
  </tr>
  <tr>
    <th>appearance</th>
    <th>string|array</th>
    <th>none</th>
    <th></th>
  </tr>
  <tr>
    <th>border</th>
    <th>string|array</th>
    <th>1px solid</th>
    <th></th>
  </tr>
  <tr>
    <th>backgroundColor</th>
    <th>string|array</th>
    <th>inherit</th>
    <th></th>
  </tr>
  <tr>
    <th>buttonSize</th>
    <th>string</th>
    <th>solid</th>
    <th>choose size between xs, sm, md, lg</th>
  </tr>
  <tr>
    <th>cursor</th>
    <th>string|array</th>
    <th>pointer</th>
    <th></th>
  </tr>
  <tr>
    <th>hoverColor</th>
    <th>string|array</th>
    <th></th>
    <th>set on hover bg-color</th>
  </tr>
  <tr>
    <th>justifyContent</th>
    <th>string|array</th>
    <th>center</th>
    <th></th>
  </tr>
  <tr>
    <th>lineHeight</th>
    <th>string|array</th>
    <th>1.2</th>
    <th></th>
  </tr>
  <tr>
    <th>outline</th>
    <th>string|array</th>
    <th>none</th>
    <th></th>
  </tr>
  <tr>
    <th>position</th>
    <th>string|array</th>
    <th>relative</th>
    <th></th>
  </tr>
  <tr>
    <th>userSelect</th>
    <th>string|array</th>
    <th>none</th>
    <th></th>
  </tr>
  <tr>
    <th>transition</th>
    <th>string|array</th>
    <th>all 250ms</th>
    <th></th>
  </tr>
  <tr>
    <th>verticalAlign</th>
    <th>string|array</th>
    <th>middle</th>
    <th></th>
  </tr>
  <tr>
    <th>whiteSpace</th>
    <th>string|array</th>
    <th>nowrap</th>
    <th></th>
  </tr>
</TableBox>

and all CSS properties.
