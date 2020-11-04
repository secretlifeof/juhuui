## CircularProgress

Visualization of some progress in circular form.

#### Import component

```js
import { CircularProgress } from 'juhuui';
```

#### Simple component

```js-live
<CircularProgress
  max="100"
  min="0"
  value="76"
/>
```

#### Styling

```js-live
<Stack divideEqual={false} isInline>
  <CircularProgress
    color="gray.400"
    max="100"
    min="0"
    trackColor="pink.300"
    value="76"
  />
  <CircularProgress
    color="gray.400"
    label="true"
    max="100"
    min="0"
    trackColor="pink.300"
    value="76"
  />
  <CircularProgress
    capIsRound="false"
    color="gray.400"
    max="100"
    min="0"
    thickness="0.4"
    trackColor="pink.300"
    value="76"
  />
  <CircularProgress
    angle="90"
    color="green.400"
    max="100"
    min="0"
    size="12"
    trackColor="green.800"
    value="33"
  />
  <CircularProgress
    color="gray.400"
    label="true"
    fontSize="xl"
    max="100"
    min="0"
    size="16"
    trackColor="pink.300"
    value="76"
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
    <th>angle</th>
    <th>string|number</th>
    <th>0</th>
    <th>angle of starting point</th>
  </tr>
  <tr>
    <th>capIsRound</th>
    <th>boolean</th>
    <th>true</th>
    <th></th>
  </tr>
  <tr>
    <th>color</th>
    <th>string|array|theme</th>
    <th>green.500</th>
    <th>color of finished track</th>
  </tr>
  <tr>
    <th>label</th>
    <th>boolean</th>
    <th>false</th>
    <th>show label</th>
  </tr>
  <tr>
    <th>max</th>
    <th>string|number</th>
    <th>100</th>
    <th>max value</th>
  </tr>
  <tr>
    <th>min</th>
    <th>string|number</th>
    <th>0</th>
    <th>min value</th>
  </tr>
  <tr>
    <th>size</th>
    <th>string|array|theme</th>
    <th>12</th>
    <th>width/height</th>
  </tr>
  <tr>
    <th>thickness</th>
    <th>string|number</th>
    <th>0.2</th>
    <th>strokeWidth</th>
  </tr>
  <tr>
    <th>trackColor</th>
    <th>string|array|theme</th>
    <th>gray.400</th>
    <th>color of track</th>
  </tr>
  <tr>
    <th>value</th>
    <th>string|number</th>
    <th>80</th>
    <th>value finished (not percentage)</th>
  </tr>
</TableBox>
