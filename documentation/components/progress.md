## Progress

A linear progress bar.

#### Import component

```js
import { Progress } from 'juhuui';
```

#### How to

```js-live
<Progress
  height="3"
  max="100"
  min="0"
  value="69"
/>
```

#### Styling

```js-live
<Stack>
  <Progress
    bg="green.800"
    color="green.300"
    height="2"
    value="23"
  />
  <Progress
    bg="gray.200"
    color="yellow.700"
    height="3"
    value="53"
  />
  <Progress
    bg="orange.200"
    color="red.300"
    height="4"
    value="86"
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
    <th>div</th>
    <th></th>
  </tr>
  <tr>
    <th>bg</th>
    <th>string|array|theme</th>
    <th>gray.500</th>
    <th>background-color</th>
  </tr>
  <tr>
    <th>color</th>
    <th>string|array|theme</th>
    <th>orange</th>
    <th>progress color</th>
  </tr>
  <tr>
    <th>fun</th>
    <th>boolean</th>
    <th>false</th>
    <th></th>
  </tr>
  <tr>
    <th>height</th>
    <th>string|array|theme</th>
    <th>height</th>
    <th></th>
  </tr>
  <tr>
    <th>max</th>
    <th>string|number</th>
    <th>100</th>
    <th>end value</th>
  </tr>
  <tr>
    <th>min</th>
    <th>string|number</th>
    <th>0</th>
    <th>starting value</th>
  </tr>
  <tr>
    <th>overflow</th>
    <th>string|array</th>
    <th>hidden</th>
    <th></th>
  </tr>
  <tr>
    <th>position</th>
    <th>string|array</th>
    <th>relative</th>
    <th></th>
  </tr>
  <tr>
    <th>value</th>
    <th>string|number</th>
    <th>69</th>
    <th>progress value</th>
  </tr>
</TableBox>
