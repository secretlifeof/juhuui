## Theme

Changing the theme is simple. The setup function takes a second options object, also containing theme.

```javascript
import { setup, theme as juhuuiTheme } from 'juhuui';
import { createElement } from 'react';

const theme = {
  colors: {
    ...juhuuiTheme.colors,
    juhuui: {
      50: 'var(--c50)',
      100: 'var(--c100)',
      200: 'var(--c200)',
      300: 'var(--c300)',
      900: 'var(--c900)'
    }
  }
};

setup(createElement, {
  theme
});
```

### Defaults

#### breakpoints

An array of breakpoints. This follows the mobile first principle so the first value are added to root. The rest are added to "@media (min-width: \$breakpoint)".

```js
['30em', '48em', '62em'];
```

#### colors

#### fonts

Accessed by fontFamily.

<TableBox>
  <tr>
    <th>KEY</th>
    <th>DEFAULT</th>
  </tr>
  <tr>
    <th>body</th>
    <th>system-ui, sans-serif</th>
  </tr>
  <tr>
    <th>heading</th>
    <th>Georgia, serif</th>
  </tr>
  <tr>
    <th>mono</th>
    <th>Menlo, monospace</th>
  </tr>
</TableBox>

#### fontSizes

Accessed by fontSize.

<TableBox>
  <tr>
    <th>KEY</th>
    <th>DEFAULT</th>
  </tr>
  <tr>
    <th>xs</th>
    <th>0.75rem</th>
  </tr>
  <tr>
    <th>sm</th>
    <th>0.875rem</th>
  </tr>
  <tr>
    <th>md</th>
    <th>1rem</th>
  </tr>
  <tr>
    <th>lg</th>
    <th>1.125rem</th>
  </tr>
  <tr>
    <th>xl</th>
    <th>1.25rem</th>
  </tr>
  <tr>
    <th>2xl</th>
    <th>1.5rem</th>
  </tr>
  <tr>
    <th>3xl</th>
    <th>1.875rem</th>
  </tr>
  <tr>
    <th>4xl</th>
    <th>2.25rem</th>
  </tr>
  <tr>
    <th>5xl</th>
    <th>2.65rem</th>
  </tr>
  <tr>
    <th>6xl</th>
    <th>3rem</th>
  </tr>
  <tr>
    <th>7xl</th>
    <th>3.5rem</th>
  </tr>
  <tr>
    <th>8xl</th>
    <th>4rem</th>
  </tr>
</TableBox>

#### fontWeights

Accessed by fontWeight.

<TableBox>
  <tr>
    <th>KEY</th>
    <th>DEFAULT</th>
  </tr>
  <tr>
    <th>hairline</th>
    <th>100</th>
  </tr>
  <tr>
    <th>thin</th>
    <th>200</th>
  </tr>
  <tr>
    <th>light</th>
    <th>300</th>
  </tr>
  <tr>
    <th>normal</th>
    <th>400</th>
  </tr>
  <tr>
    <th>medium</th>
    <th>500</th>
  </tr>
  <tr>
    <th>semibold</th>
    <th>600</th>
  </tr>
  <tr>
    <th>bold</th>
    <th>700</th>
  </tr>
  <tr>
    <th>extrabold</th>
    <th>800</th>
  </tr>
  <tr>
    <th>black</th>
    <th>900</th>
  </tr>
</TableBox>

#### icons

Accessed by the name property on Icon and ButtonIcon.

<TableBox>
  <tr>
    <th>KEY</th>
    <th>DEFAULT</th>
  </tr>
  <tr>
    <th>mooon</th>
    <th>&lt;svg&gt;...&lt;svg&gt;</th>
  </tr>
</TableBox>

#### letterSpacings

Accessed by letterSpacing.

<TableBox>
  <tr>
    <th>KEY</th>
    <th>DEFAULT</th>
  </tr>
  <tr>
    <th>tighter</th>
    <th>-0.05em</th>
  </tr>
  <tr>
    <th>tight</th>
    <th>-0.025em</th>
  </tr>
  <tr>
    <th>normal</th>
    <th>0</th>
  </tr>
  <tr>
    <th>wider</th>
    <th>0.025em</th>
  </tr>
  <tr>
    <th>wider</th>
    <th>0.05em</th>
  </tr>
  <tr>
    <th>widest</th>
    <th>0.1em</th>
  </tr>
</TableBox>

#### lineHeights

Accessed by lineHeight.

<TableBox>
  <tr>
    <th>KEY</th>
    <th>DEFAULT</th>
  </tr>
  <tr>
    <th>none</th>
    <th>1</th>
  </tr>
  <tr>
    <th>shorter</th>
    <th>1.25</th>
  </tr>
  <tr>
    <th>short</th>
    <th>1.375</th>
  </tr>
  <tr>
    <th>base</th>
    <th>1.5</th>
  </tr>
  <tr>
    <th>tall</th>
    <th>1.625</th>
  </tr>
  <tr>
    <th>taller</th>
    <th>2</th>
  </tr>
</TableBox>

#### opacity

Accessed by opacity.

<TableBox>
  <tr>
    <th>KEY</th>
    <th>DEFAULT</th>
  </tr>
  <tr>
    <th>0</th>
    <th>0</th>
  </tr>
  <tr>
    <th>20%</th>
    <th>0.2</th>
  </tr>
  <tr>
    <th>40%</th>
    <th>0.4</th>
  </tr>
  <tr>
    <th>60%</th>
    <th>0.6</th>
  </tr>
  <tr>
    <th>80%</th>
    <th>0.8</th>
  </tr>
  <tr>
    <th>100%</th>
    <th>1</th>
  </tr>
</TableBox>

#### radii

Accessed by border, borderBottomLeftRadius, borderBottomRightRadius, borderRadius, borderTopLeftRadius and borderTopRightRadius.

<TableBox>
  <tr>
    <th>KEY</th>
    <th>DEFAULT</th>
  </tr>
  <tr>
    <th>none</th>
    <th>0</th>
  </tr>
  <tr>
    <th>sm</th>
    <th>0.125rem</th>
  </tr>
  <tr>
    <th>md</th>
    <th>0.25rem</th>
  </tr>
  <tr>
    <th>lg</th>
    <th>0.5rem</th>
  </tr>
  <tr>
    <th>full</th>
    <th>9999px</th>
  </tr>
</TableBox>

#### shadows

Accessed by boxShadow.

<TableBox>
  <tr>
    <th>KEY</th>
    <th>DEFAULT</th>
  </tr>
  <tr>
    <th>sm</th>
    <th>0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)</th>
  </tr>
  <tr>
    <th>md</th>
    <th>0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)</th>
  </tr>
  <tr>
    <th>lg</th>
    <th>0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)</th>
  </tr>
  <tr>
    <th>xl</th>
    <th>0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)</th>
  </tr>
  <tr>
    <th>2xl</th>
    <th>0 25px 50px -12px rgba(0, 0, 0, 0.25)'</th>
  </tr>
  <tr>
    <th>outline</th>
    <th>0 0 0 3px rgba(66, 153, 225, 0.6)</th>
  </tr>
  <tr>
    <th>inner</th>
    <th>inset 0 2px 4px 0 rgba(0,0,0,0.06)</th>
  </tr>
</TableBox>

#### sizes

Accessed by bottom, gridGap, gridRowGap, gridColumnGap, height, left, margin, marginTop, marginRight, marginBottom, marginLeft, maxHeight, maxWidth, minHeight, minWidth, mx, my, padding, paddingTop, paddingRight, paddingBottom, paddingLeft, right, space, top and width.

<TableBox>
  <tr>
    <th>KEY</th>
    <th>DEFAULT</th>
  </tr>
  <tr>
    <th>1</th>
    <th>0.25rem</th>
  </tr>
  <tr>
    <th>2</th>
    <th>0.5rem</th>
  </tr>
  <tr>
    <th>3</th>
    <th>0.75rem</th>
  </tr>
  <tr>
    <th>4</th>
    <th>1rem</th>
  </tr>
  <tr>
    <th>5</th>
    <th>1.25rem</th>
  </tr>
  <tr>
    <th>6</th>
    <th>1.5rem</th>
  </tr>
  <tr>
    <th>8</th>
    <th>2rem</th>
  </tr>
  <tr>
    <th>10</th>
    <th>2.5rem</th>
  </tr>
  <tr>
    <th>12</th>
    <th>3rem</th>
  </tr>
  <tr>
    <th>14</th>
    <th>3.5rem</th>
  </tr>
  <tr>
    <th>16</th>
    <th>4rem</th>
  </tr>
  <tr>
    <th>20</th>
    <th>5rem</th>
  </tr>
  <tr>
    <th>24</th>
    <th>6rem</th>
  </tr>
  <tr>
    <th>32</th>
    <th>8rem</th>
  </tr>
  <tr>
    <th>40</th>
    <th>10rem</th>
  </tr>
  <tr>
    <th>48</th>
    <th>12rem</th>
  </tr>
  <tr>
    <th>56</th>
    <th>14rem</th>
  </tr>
  <tr>
    <th>64</th>
    <th>16rem</th>
  </tr>
  <tr>
    <th>3xs</th>
    <th>14rem</th>
  </tr>
  <tr>
    <th>2xs</th>
    <th>16rem</th>
  </tr>
  <tr>
    <th>xs</th>
    <th>20rem</th>
  </tr>
  <tr>
    <th>sm</th>
    <th>24rem</th>
  </tr>
  <tr>
    <th>md</th>
    <th>28rem</th>
  </tr>
  <tr>
    <th>lg</th>
    <th>32rem</th>
  </tr>
  <tr>
    <th>xl</th>
    <th>36rem</th>
  </tr>
  <tr>
    <th>2xl</th>
    <th>42rem</th>
  </tr>
  <tr>
    <th>3xl</th>
    <th>48rem</th>
  </tr>
  <tr>
    <th>4xl</th>
    <th>56rem</th>
  </tr>
  <tr>
    <th>5xl</th>
    <th>64rem</th>
  </tr>
  <tr>
    <th>6xl</th>
    <th>72rem</th>
  </tr>
  <tr>
    <th>full</th>
    <th>100%</th>
  </tr>
  <tr>
    <th>half</th>
    <th>50%</th>
  </tr>
</TableBox>

#### various

#### zIndices

Accessed by zIndex.

<TableBox>
  <tr>
    <th>KEY</th>
    <th>DEFAULT</th>
  </tr>
  <tr>
    <th>hide</th>
    <th>-1</th>
  </tr>
  <tr>
    <th>base</th>
    <th>0</th>
  </tr>
  <tr>
    <th>docked</th>
    <th>10</th>
  </tr>
  <tr>
    <th>dropdown</th>
    <th>1000</th>
  </tr>
  <tr>
    <th>sticky</th>
    <th>1100</th>
  </tr>
  <tr>
    <th>banner</th>
    <th>1200</th>
  </tr>
  <tr>
    <th>overlay</th>
    <th>1300</th>
  </tr>
  <tr>
    <th>modal</th>
    <th>1400</th>
  </tr>
  <tr>
    <th>popover</th>
    <th>1500</th>
  </tr>
  <tr>
    <th>skipLink</th>
    <th>1600</th>
  </tr>
  <tr>
    <th>toast</th>
    <th>1700</th>
  </tr>
  <tr>
    <th>tooltip</th>
    <th>1800</th>
  </tr>
</TableBox>
