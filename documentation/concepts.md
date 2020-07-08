## Concepts

All components end up in a function called base that produces a css string and add that to a style tag. Base take all props except pseudo properties (i.e. \_hover, \_after & the pseudo props). To activate processing of pseudo properties use the Fun component or just add fun={true}. Are you confused? Please reader further. The reason for this is performance optimization.

#### Base

Base is the simplest function. If you create the Box component beneath, what happens under the hood is that base is called with the argument "padding". It knows that "padding" is a css property so it processes it. Meaning it removes the prop and creates a CSS entry that is added to a style tag. All unrecognized props are forwarded to the component.

```jsx
<Box padding="3px">Base</Box>
```

The same happens if you add a media query. More on that under [theme](/documentation/theme).

```jsx
<Box padding={['3px', '6px', '9px']}>Base with media queries</Box>
```

#### Fun

This is where things become fun and also flexible.

All pseudo properties (except :root and a few more) can be accessed by adding an underscore before (or after).

```jsx
<Fun color="yellow" _hover={{ color: 'blue' }}>
	<div>Why did you make me blue? </div>
</Fun>
```

is the same as

```jsx
<Box fun color="yellow" _hover={{ color: 'blue' }}>
	<div>Why did you make me blue? </div>
</Box>
```

If you wish to make complex selectors you can use the pseudo prop.

```jsx
<Fun pseudo={{ '&:hover p': { color: 'green' } }}>
	<div>I´m Divvy</div>
	<p>Yo I´m Piddy and I love green</p>
</Fun>
```

This should leave you with enough flexibility.
