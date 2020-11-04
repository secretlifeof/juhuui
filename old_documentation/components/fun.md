## Fun

Fun has no predefined CSS properties but you can use pseudo properties (elements and classes) like :hover and ::after.

The simplest way is to use pseudo properties directly by just adding an \_ (underscore) before the property. This works for all pseudo properties except :root, :lang, :nth-child, :nth-last-child, :nth-last-of-type or :nth-of-type.

#### Simple

```js-live
<Fun
  color="green.500"
  _hover={{ color: "blue.500" }}
>Let´s not be funny</Fun>
```

#### Complex

If you need more control use the pseudo prop.

```js-live
<Fun
  pseudo={{
    "& > div::before" : { content: "'BUHU '" },
    "&:hover > div::after" : { content: "' 😎'" },
    "&:hover": { color: "orange" },
  }}
>
  <div>friends!</div>
</Fun>
```

#### Props

All CSS properties.
