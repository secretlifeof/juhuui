## List

Organizing ist not always simple. Help yourself with a list.

#### Import component

```js
import { List, ListItem } from 'juhuui';
```

#### Unordered list

```js-live
<List>
  <ListItem>Dance</ListItem>
  <ListItem>Tanzen</ListItem>
  <ListItem>Bailando</ListItem>
</List>
```

#### Ordered list

```js-live
<List as="ol">
  <ListItem>One</ListItem>
  <ListItem>Two</ListItem>
  <ListItem>Three</ListItem>
</List>
```

#### Props

##### List

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
    <th>ul</th>
    <th></th>
  </tr>
  <tr>
    <th>listStylePosition</th>
    <th>string</th>
    <th>inside</th>
    <th></th>
  </tr>
  <tr>
    <th>spacing</th>
    <th>string|array</th>
    <th>0</th>
    <th>marginBottom of children li</th>
  </tr>
  <tr>
    <th>styleType</th>
    <th>string</th>
    <th>space-counter</th>
    <th>listStyleType</th>
  </tr>
</TableBox>

and all CSS properties.

##### ListItem

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
    <th>li</th>
    <th></th>
  </tr>
  <tr>
    <th>fun</th>
    <th>boolean</th>
    <th>false</th>
    <th></th>
  </tr>
  <tr>
    <th>spacing</th>
    <th>string|array</th>
    <th>0</th>
    <th>marginBottom</th>
  </tr>
</TableBox>

and all CSS properties.
