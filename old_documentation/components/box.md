## Box

Box is the simplest component. It´s the home base, meaning there are no predefined CSS properties.

#### Simple

```js-live
<Box color="green.500">We love Hello World!</Box>
```

#### Complex

Have Fun by adding fun=true. This is how pseudo properties are activated. Please take som advice from my creator. If something didn´t work, it was not rarely because of missing the magic word.

> !! _fun can be activated by default on all components by adding defaultFun={true} to the options object_

```js-live
<Box
  fun
  color="green.500"
  _hover={{ color: "purple.500" }}
  pseudo={{
    "> span::before": { content: "'colorful '" },
    "&:hover > span::before": { content: "'purple '" }
  }}
>
  We love a <span>World!</span>
</Box>
```

#### Props

All CSS properties.
