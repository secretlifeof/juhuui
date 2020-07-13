import { Box, Flex, Fun, Heading } from 'juhuui';
import NLINK from 'next/link';
import React from 'react';

import SyntaxHighlighter from '../components/syntaxHighlighter';

export const jsTheme = {
  '.keyword': { color: 'blue.600' },
  '.tag': { color: 'red.500' },
  '.tag .punctuation': { color: 'green.500' },
  '.operator': { color: 'pink.300' },
  '.string': { color: 'green.500' },
  '.punctuation': { color: 'gray.400' },
  '.function-variable function': { color: 'orange.500' },
  '.comment': { color: 'gray.400' }
};

const start = `import { Box } from "juhuui"

const Pyramide = () => (
  <Box color="green">Green Beans</Box>
  <Box background={["red.500", "blue.100", "gray.200"]}>Theme colors</Box>
)`;

const install = `npm install juhuui`;

const setup = `import { setup } from "juhuui"
import h from "preact" // or createElement from React

setup(h)
`;

const showOff = `import { Box, Flex } from "juhuui"

const Square = (props) => (
  <Box
    width={0}  // use a number
    height="0"  // or a string
    my="8"  // some properties have shortcuts / my = margin-left + margin-right 
    borderLeft="6vw solid green.200"
    borderRight="6vw solid"
    borderBottom="12vw solid blue.200"
    borderLeftColor={['pink.200', 'green.300', 'green.400']}
    borderRightColor={['pink.500', 'green.100', 'green.800']}
    {...props}
  />
);

const ManySquares = () => (
  <Flex justify="space-between">
    <Square borderBottomColor={['purple.200', 'blue.500', 'green.200']} />
    <Square borderBottomColor={['blue.200', 'orange.400', 'orange.200']} />
    <Square borderBottomColor={['yellow.200', 'red.600', 'blue.200']} />
    <Square borderBottomColor={['orange.200', 'cyan.400', 'purple.200']} />
    <Square borderBottomColor={['red.400', 'green.500', 'pink.200']} />
    <Square borderBottomColor={['cyan.800', 'orange.200', 'yellow.200']} />
  </Flex>
)
`;

const Code = (props) => (
  <pre>
    <Box
      overflow="scroll"
      py="2"
      pl="4"
      bg="gray.200"
      borderRadius="md"
      {...props}
    />
  </pre>
);

const Square = (props) => (
  <Box
    width={0}
    height="0"
    my="8"
    borderLeft="solid green.200"
    borderLeftWidth={['20px', '40px', '70px']}
    borderRight="solid"
    borderRightWidth={['20px', '40px', '70px']}
    borderBottom="solid blue.200"
    borderBottomWidth={['40px', '80px', '140px']}
    borderLeftColor={['pink.200', 'green.300', 'green.400']}
    borderRightColor={['pink.500', 'green.100', 'green.800']}
    {...props}
  />
);

function GettingStarted() {
  return (
    <Box pb="4vw" fontSize={['md', 'md', 'md']}>
      <Heading as="h1" pb="6">
        Getting Started
      </Heading>
      <Heading as="h2" pb="8" color="orange.300">
        First of all. Thank you for being here :-)
      </Heading>
      <Heading as="h2" color="juhuui.300">
        Installation
      </Heading>
      <Heading as="h4">To download run</Heading>
      <Fun
        pseudo={{
          '.symbol': { color: 'green.500' },
          '.tag': { color: 'red.500' },
          '.string': { color: 'green.500' },
          '.parenthesis': { color: 'gray.400' },
          '.codeWord': { color: 'orange.500' }
        }}
      >
        <Code>
          <SyntaxHighlighter code={install} language="html" />
        </Code>
      </Fun>
      <Heading as="h2" pt="8" color="juhuui.300">
        Setup
      </Heading>
      <Heading as="h4" lineHeight="1.4">
        Because JUHUUI is not very smart (just like its creator), you need to
        feed it before you can start playing or working. Feed it a createElement
        function and it will be HAPPY. This is also where more options can be
        set. Add this somewhere in the root of your app. In Next.js you can add
        this to _app.js.
      </Heading>
      <Fun pseudo={jsTheme}>
        <Code>
          <SyntaxHighlighter code={setup} language="js" />
        </Code>
      </Fun>
      <Heading as="h2" pt="8" color="juhuui.300">
        Simple component
      </Heading>
      <Heading as="h4" lineHeight="1.4em">
        Now you can start styling. Let´s start with the simplest component
        called Box. All components take CSS properties as props. Just like the
        ones you add to the style prop in (P)React. And all those can also take
        an array of values to produce media queries. Isn´t that simple?
      </Heading>
      <Fun pseudo={jsTheme}>
        <Code>
          <SyntaxHighlighter code={start} language="js" />
        </Code>
      </Fun>
      <Heading as="h2" pt="8" color="juhuui.300">
        A little bit more
      </Heading>
      <Heading as="h4" lineHeight="1.4em">
        Showing of is not really satisfying but...
      </Heading>
      <Fun pseudo={jsTheme}>
        <Code>
          <SyntaxHighlighter code={showOff} language="js" />
        </Code>
      </Fun>
      <Flex justify="space-between">
        <Square borderBottomColor={['purple.200', 'blue.500', 'green.200']} />
        <Square borderBottomColor={['blue.200', 'orange.400', 'orange.200']} />
        <Square borderBottomColor={['yellow.200', 'red.600', 'blue.200']} />
        <Square borderBottomColor={['orange.200', 'cyan.400', 'purple.200']} />
        <Square borderBottomColor={['red.400', 'green.500', 'pink.200']} />
        <Square borderBottomColor={['cyan.800', 'orange.200', 'yellow.200']} />
      </Flex>
      <Heading as="h4" lineHeight="1.4em">
        ...there are no excuses!
      </Heading>
      <Flex
        fun
        color="juhuui.300"
        fontSize={['sm', 'lg']}
        justify="space-between"
        direction={['column', 'row']}
        pt="5"
        textAlign={['center', 'initial']}
        pseudo={{
          '& div': { cursor: 'pointer', textDecoration: 'underline' },
          '& div:hover': { color: 'blue.600', textDecoration: 'initial' }
        }}
      >
        <NLINK href="/components/[mdx]" as="/components/box">
          <Fun>
            <span role="img" aria-label="robot">
              🤖
            </span>
            show me more COMPONENTS
          </Fun>
        </NLINK>
        <NLINK href="/documentation" as="/documentation">
          <Fun py={['4', '0']}>
            deep dive into more DOCS
            <span role="img" aria-label="exploding head">
              🤯
            </span>
          </Fun>
        </NLINK>
      </Flex>
    </Box>
  );
}

export default GettingStarted;
