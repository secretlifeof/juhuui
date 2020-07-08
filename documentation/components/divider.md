## Divider

This is not something we should do in person to person life. But dividing layout is helpful.

#### Import component

```js
import { Divider } from 'juhuui';
```

#### Horizontal

Creates an hr tag.

```js-live
<Divider />
```

#### Vertical

Creates a div.

```js-live
<Flex>
  Let us
  <Divider
    borderColor="orange.400"
    orientation="vertical"
  />
  remove
  <Divider
    borderColor="orange.400"
    orientation="vertical"
  />
  boundaries
  <Divider
    borderColor="orange.600"
    orientation="vertical"
  />
</Flex>
```

#### Styling - Horizontal

```js-live
<Flex direction="column">
  penthouse
  <Divider
    borderTop="0.1rem solid"
    borderColor="green.500"
    my="4"
  />
  I feel safe
  <Divider
    borderTop="0.2rem solid"
    borderColor="green.500"
    my="3"
  />
  ground floor
  <Divider
    borderTop="0.5rem solid"
    borderColor="green.500"
  />
</Flex>
```

#### Styling - Vertical

If you want to do some crazy shit feel free.

```js-live
<Flex>
  narrow
  <Divider
    borderLeft="0.1rem solid"
    borderColor="green.500"
    orientation="vertical"
  />
  wider
  <Divider
    borderLeft="0.2rem solid"
    borderColor="green.500"
    mx="4"
    orientation="vertical"
  />
  to wide
  <Divider
    borderLeft="0.5rem solid"
    borderColor="green.500"
    mx="6"
    orientation="vertical"
  />
  ...or what do you fancy?
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
    <th>borderColor</th>
    <th>string|array</th>
    <th>inherit</th>
    <th></th>
  </tr>
  <tr>
    <th>borderLeft|borderTop</th>
    <th>string|array</th>
    <th>0.0625rem solid</th>
    <th></th>
  </tr>
  <tr>
    <th>fun</th>
    <th>boolean</th>
    <th>false</th>
    <th></th>
  </tr>
  <tr>
    <th>height</th>
    <th>string|array</th>
    <th>vertical (auto)</th>
    <th></th>
  </tr>
  <tr>
    <th>mx|my</th>
    <th>string|array</th>
    <th>2</th>
    <th></th>
  </tr>
  <tr>
    <th>orientation</th>
    <th>string|array</th>
    <th>horizontal</th>
    <th></th>
  </tr>
</TableBox>

and all CSS properties.
