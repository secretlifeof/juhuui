## Grid

Grids are fun! This is just a Box component with display="grid".

#### Import component

```js
import { Grid } from 'juhuui';
```

#### How to

```js-live
<Grid
  templateColumns="4vw 4vw 4vw 4vw"
  templateRows="4vw 4vw 4vw 4vw"
>
  <Box bg="green.300" />
  <Box bg="blue.300" />
  <Box bg="orange.300" />
  <Box bg="yellow.300" />
  <Box bg="pink.300" />
  <Box bg="green.400" />
  <Box bg="purple.400" />
  <Box bg="red.500" />
  <Box bg="orange.300" />
  <Box bg="blue.800" />
  <Box bg="green.500" />
  <Box bg="gray.400" />
  <Box bg="yellow.200" />
  <Box bg="gray.50" />
  <Box bg="blue.200" />
  <Box bg="green" />
</Grid>
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
    <th>grid</th>
    <th></th>
  </tr>
  <tr>
    <th>fun</th>
    <th>boolean</th>
    <th>false</th>
    <th></th>
  </tr>
</TableBox>

and all CSS properties.
