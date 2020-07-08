import { Box, Heading } from 'juhuui';
import MDtoJSX from 'markdown-to-jsx';
import React, { createElement} from 'react';

import CodeDisplay from './codeDisplay';
import LiveCode from './liveCode';

const H2 = (props) => <Heading as="h2" color="juhuui.300" {...props} />;
const H3 = (props) => <Heading as="h3" color="juhuui.800" {...props} />;
const H4 = (props) => <Heading as="h4" color="juhuui.300" {...props} />;

const Table = (props) => {
  return (
    <Box
      fun
      as="table"
      border="1px solid black"
      width="100%"
      py="2"
      pl="4"
      bg="gray.200"
      borderRadius="md"
      color="gray.700"
      fontSize="sm"
      overflow="auto"
      textAlign="left"
      {...props}
    />
  );
};

const Blockquote = (props) => {
  return (
    <Box
      fun
      width="100%"
      py="2"
      pl="4"
      bg="purple.100"
      borderRadius="md"
      color="gray.600"
      fontSize="sm"
      overflow="auto"
      textAlign="left"
      {...props}
    />
  );
};

const Markdown = ({ contents }) => (
  <MDtoJSX
    options={{
      forceBlock: true,
      overrides: {
        h2: H2,
        h3: H3,
        h4: H4,
        TableBox: Table,
        blockquote: Blockquote,
      },
      createElement(type, props, children) {
        const {className} = props
        if (className && className === 'lang-js-live') {
          return <LiveCode content={children} />;
        }

        if (type === 'code')
          return (
            <CodeDisplay
              lang={className && className.slice(5)}
            >
              {children}

            </CodeDisplay>
          );

        return createElement(type, props, children);
      },
    }}
  >
    {contents}
  </MDtoJSX>
);

export default Markdown;
