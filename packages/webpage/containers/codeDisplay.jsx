import { Box } from 'juhuui';
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
  '.comment': { color: 'gray.400' },
  '.class-name': { color: 'orange.300' },
  '.attr-name': { color: 'gray.800' },
  '.attr-value': { color: 'green.500' },
};

const CodeDisplay = ({ children, lang = 'js', ...props }) => {
  return (
    <Box
      fun
      py="2"
      pl="4"
      bg="gray.200"
      borderRadius="md"
      pseudo={jsTheme}
      color="gray.700"
      fontSize="sm"
      overflow="auto"
      {...props}
    >
      <SyntaxHighlighter code={children} language={lang} />
    </Box>
  );
};

export default CodeDisplay;
