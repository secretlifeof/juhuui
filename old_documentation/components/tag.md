## Tag

Just a simple name tag.

#### Import component

```js
import { Tag } from 'juhuui';
```

#### How to

```js-live
<Flex
  fun
  pseudo={{
    '> *': {
      mr: 2,
    },
  }}
>
  <Tag>Christiane</Tag>
  <Tag>Anja</Tag>
  <Tag>Natalia</Tag>
</Flex>
```

#### Sizes

```js-live
<Flex
  fun
  pseudo={{
    '> *': {
      mr: 2,
    },
  }}
>
  <Tag tagSize="sm">Nicolai</Tag>
  <Tag tagSize="md">Julian</Tag>
  <Tag tagSize="lg">Horst</Tag>
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
    <th>alignItems</th>
    <th>string</th>
    <th>center</th>
    <th></th>
  </tr>
  <tr>
    <th>as</th>
    <th>string</th>
    <th>div</th>
    <th></th>
  </tr>
  <tr>
    <th>bg</th>
    <th>string|theme</th>
    <th>gray.200</th>
    <th>backgroundColor</th>
  </tr>
  <tr>
    <th>display</th>
    <th>string|theme</th>
    <th>inline-flex</th>
    <th></th>
  </tr>
  <tr>
    <th>fontWeight</th>
    <th>string</th>
    <th>medium</th>
    <th></th>
  </tr>
  <tr>
    <th>fun</th>
    <th>boolean</th>
    <th>false</th>
    <th></th>
  </tr>
  <tr>
    <th>rounded</th>
    <th>string|theme</th>
    <th>md</th>
    <th></th>
  </tr>
  <tr>
    <th>tagSize</th>
    <th>sm|md|lg</th>
    <th>lg</th>
    <th>choose predefined size</th>
  </tr>
</TableBox>

and all CSS properties.
