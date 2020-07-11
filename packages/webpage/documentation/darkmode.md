## Darkmode

The recommended way of using dark mode with juhuui is to add CSS-variables to the theme object. We find that this a descriptive way of writing colors (please see Icon-example below).

This website uses the following setup:

```js
import { setup, theme as juhuuiTheme } from 'juhuui';
import { h } from 'preact';

const theme = {
  colors: {
    ...juhuTheme.colors,
    juhuui: {
      100: 'var(--c100)',
      200: 'var(--c200)',
      300: 'var(--c300)',
      900: 'var(--c900)'
    }
  }
};

setup(h, { theme });
```

Create the global variables inside a global.css file:

```css
:root {
  --c100: #fff7eb;
  --c200: #e9f8e8;
  --c300: #37b311;
  --c900: #07130f;
}

@media (prefers-color-scheme: dark) {
  :root {
    --c100: #07130f;
    --c300: #59c438;
    --c900: #fff7eb;
  }
}
```

Wherever you would like to have a switch for dark mode, please try something like the following:

```jsx
import { useState, useEffect } from 'preact/hooks';
import { Icon } from 'juhuui';

const Header = () => {
  const [darkMode, setDarkMode] = useState('light');

  useEffect(() => {
    const currentMode = localStorage.getItem('theme');

    if (currentMode && currentMode !== darkMode) {
      setDarkMode(currentMode);
    }
  }, []);

  useEffect(() => {
    Object.entries(theme[darkMode]).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
    localStorage.setItem('theme', darkMode);
  }, [darkMode]);

  return (
    <Icon
      fun
      name="moon"
      cursor="pointer"
      color="juhuui.900"
      hoverColor="juhuui.50"
      size="6"
      onClick={() =>
        setDarkMode((prevState) => (prevState === 'light' ? 'dark' : 'light'))
      }
    />
  );
};
```
