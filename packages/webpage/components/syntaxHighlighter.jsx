import React from 'react';
/* eslint  simple-import-sort/sort: "off" */
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-css';

const SyntaxHighlighter = ({ code, language = 'js' }) => {
  const highLighted = highlight(code, languages[language]);
  return <div dangerouslySetInnerHTML={{ __html: highLighted }} />;
};

export default SyntaxHighlighter;
