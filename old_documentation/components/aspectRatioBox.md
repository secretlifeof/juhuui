## AspectRatioBox

Contain elements like images and iframes to certain aspect ratios.

Takes a ratio prop number (4/3) or array of numbers ([4/3, 16/4, 1]). It needs to be a number and cannot be a string.

First import the AspectRatioBox component.

```js
import { AspectRatioBox } from 'juhuui';
```

#### Example with an iframe

```js-live
<AspectRatioBox maxW="40vw" ratio={ 1 }>
  <iframe
    src="https://www.youtube.com/embed/0ZiEMnPcmQQ"
    frameborder="0"
    allowfullscreen>
  </iframe>
</AspectRatioBox>
```

#### Example with an image

```js-live
<AspectRatioBox maxW="40vw" ratio={ 4/3 }>
  <Image
    objectFit="cover"
    src="https://bit.ly/2MGsKMU"
    alt="black lives matter"
  />
</AspectRatioBox>
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
    <th>ratio</th>
    <th>number or array of numbers</th>
    <th>4/3</th>
    <th>ratio of box (width/height)</th>
  </tr>
  <tr>
    <th>fun</th>
    <th>boolean</th>
    <th>true</th>
    <th>activate fun</th>
  </tr>
</TableBox>

and all CSS properties.
