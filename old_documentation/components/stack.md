## Stack

Luckily this is not about stacking card boxes. Stack your content with some space between. Either inline or on top of each other.

#### Import component

```js
import { Stack } from 'juhuui';
```

#### How to

```js-live
<Stack gap="4">
  <Box bg="blue.300" borderWidth="1px" p="4" rounded="md" shadow="md">
    <Heading color="white" mt="2">
      Go green
    </Heading>
    <Box>
      Eating vegetables is good for our planet. I also heard it is <br />
      good for our stomach, isn´t that some crazy shit?
    </Box>
  </Box>
  <Box bg="blue.200" borderWidth="1px" p="4" rounded="md" shadow="md">
    <Heading color="white" mt="2">
      Listen to others
    </Heading>
    <Box>
      If we listen to ourselves, listening to others <br /> with compassion is no biggie.
    </Box>
  </Box>
</Stack>
```

#### Inline and reversed

```js-live
<Stack gap="4" isInline isReversed>
  <Box bg="blue.300" borderWidth="1px" p="4" rounded="md" shadow="md">
    <Heading color="white" mt="2">
      Go green
    </Heading>
    <Box>
      Eating vegetables is good for our planet. I also heard it is <br />
      good for our stomach, isn´t that some crazy shit?
    </Box>
  </Box>
  <Box bg="blue.200" borderWidth="1px" p="4" rounded="md" shadow="md">
    <Heading color="white" mt="2">
      Listen to others
    </Heading>
    <Box>
      If we listen to ourselves, listening to others <br /> with compassion is no biggie.
    </Box>
  </Box>
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
    <th>divideEqual</th>
    <th>boolean</th>
    <th>true</th>
    <th>set flex="1" on children</th>
  </tr>
  <tr>
    <th>gap</th>
    <th>string|theme</th>
    <th>2</th>
    <th>space between elements</th>
  </tr>
  <tr>
    <th>isInline</th>
    <th>boolean|array</th>
    <th>false</th>
    <th>stack vertical. array for responsive mode.</th>
  </tr>
    <tr>
    <th>isReversed</th>
    <th>boolean</th>
    <th>false</th>
    <th>reverse order.</th>
  </tr>
  <tr>
    <th>spacing</th>
    <th>string|theme</th>
    <th></th>
    <th>same as gap</th>
  </tr>
</TableBox>

and all CSS properties.
