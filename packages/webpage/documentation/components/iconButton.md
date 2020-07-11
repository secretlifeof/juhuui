## IconButton

Push me icon. It is the same component as Button except that is excepts a name prop for adding an icon. You can also add a svg string('&lt;svg&gt;...&lt;svg&gt;') with the svg prop.

#### Import component

```js
import { IconButton } from 'juhuui';
```

#### Simple icon button

Yo, css styling is the way to go. All css are accepted.

> Shortcuts:  
> hoverColor => \_hover={{ bg: 'green.200' }}  
> activeColor => \_active={{ bg: 'green.500' }}

```js-live
<IconButton
  activeColor="gray.200"
  aria-label="Fly to the moon"
  bg="yellow.300"
  borderColor="pink.200"
  buttonSize="md"
  color="blue.100"
  hoverColor="yellow.400"
  name="moon"
/>
```

#### Sizes

Choose between 4 predefined sizes (xs, sm, md, lg) or set the size/width/height property by yourself. Default size is md.

```js-live
<Stack divideEqual={false} isInline>
  <IconButton
    bg="yellow.300"
    borderColor="pink.200"
    buttonSize="xs"
    color="blue.100"
    hoverColor="yellow.400"
    name="moon"
  />
  <IconButton
    bg="yellow.300"
    borderColor="pink.200"
    buttonSize="sm"
    color="blue.100"
    hoverColor="yellow.400"
    name="moon"
  />
  <IconButton
    bg="yellow.300"
    borderColor="pink.200"
    buttonSize="md"
    color="blue.100"
    hoverColor="yellow.400"
    name="moon"
  />
  <IconButton
    bg="yellow.300"
    borderColor="pink.200"
    buttonSize="lg"
    color="blue.100"
    hoverColor="yellow.400"
    name="moon"
  />
</Stack>
```

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
