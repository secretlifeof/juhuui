## Flex

Lets flex some muscles, but please be gentle to yourself. This is quite simple, a Box with display="flex".

#### Import component

```js
import { Flex } from 'juhuui';
```

#### How to

```js-live
<Flex direction="row">
  Hello
  <Divider
    borderColor="orange.400"
    orientation="vertical"
  />
  Hallo
  <Divider
    borderColor="orange.400"
    orientation="vertical"
  />
  Heisann
  <Divider
    borderColor="orange.400"
    orientation="vertical"
  />
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
    <th>display</th>
    <th>string|array</th>
    <th>flex</th>
    <th></th>
  </tr>
  <tr>
    <th>fun</th>
    <th>boolean</th>
    <th>false</th>
    <th></th>
  </tr>
</TableBox>

and all css properties.
