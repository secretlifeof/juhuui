## Accordion

Here we use react-spring to build an accordion component. Please click on "Torader" to see how it works. Torader is the norwegian word for diatonic button accordion.

> !! At the moment forwardRef is not implemented so that animated(Box) does not work

```js-live
() => {
  const [open, setOpen] = useState(false);
  const [contentMaxHeight, setContentMaxHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const calcContentMaxHeight = () => {
      ref.current && setContentMaxHeight(ref.current.scrollHeight);
    };

    calcContentMaxHeight();

    window.addEventListener('resize', () => calcContentMaxHeight());

    return () => window.removeEventListener('resize', calcContentMaxHeight());
  }, [ref, contentMaxHeight]);

  const props = useSpring({
    opacity: open ? 1 : 0,
    maxHeight: open ? `${contentMaxHeight}px` : '0px',
  });

  return (
    <Box>
      <Heading
        fun
        bg="juhuui.200"
        border="1px solid juhuui.300"
        borderRadius="sm"
        cursor="pointer"
        m="1"
        p="2"
        _hover={{ bg : "blue.50" }}
        onClick={() => setOpen((state) => !state)}
      >
        Accordion
      </Heading>
      <animated.div
        style={{
          overflow: 'hidden',
          ...props,
        }}
        ref={ref}
      >
        <Box m="2" color="pink.400">
          <div>Norwegian : Trekkspill</div>
          <div>German : Akkordeon</div>
          <div>Lithuanian : Akordeonas</div>
        </Box>
      </animated.div>
    </Box>
  );
};
```
