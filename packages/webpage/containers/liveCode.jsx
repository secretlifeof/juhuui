import {
  AspectRatioBox,
  Box,
  Button,
  CircularProgress,
  Divider,
  Flex,
  Fun,
  Grid,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  Link,
  List,
  ListItem,
  Progress,
  Stack,
  Tag,
  Text,
  Textarea,
} from 'juhuui';
import React, { useEffect, useRef, useState } from 'react';
import { LiveEditor, LiveError, LivePreview,LiveProvider } from 'react-live';
import { animated,useSpring } from 'react-spring';

import { allTheme } from '../pages/_app';

const { colors } = allTheme;

const theme = {
  plain: {
    backgroundColor: colors.gray[200],
    color: colors.gray[700],
    // fontFamily: 'Cairo',
  },
  styles: [
    {
      types: ['comment', 'punctuation'],
      style: {
        color: colors.gray[400],
      },
    },
    {
      types: ['tag'],
      style: {
        color: colors.red[500],
      },
    },
    {
      types: ['keyword'],
      style: {
        color: colors.blue[600],
      },
    },
    {
      types: ['operator'],
      style: {
        color: colors.pink[300],
      },
    },
    {
      types: ['string'],
      style: {
        color: colors.green[500],
      },
    },
    {
      types: ['function function-variable'],
      style: {
        color: colors.orange[500],
      },
    },
    {
      types: ['class-name'],
      style: {
        color: colors.orange[300],
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: colors.gray[800],
      },
    },
    {
      types: ['attr-value'],
      style: {
        color: colors.green[500],
      },
    },
  ],
};

const scope = {
  React,
  useState,
  useEffect,
  useRef,
  AspectRatioBox,
  Box,
  Button,
  CircularProgress,
  Divider,
  Flex,
  Fun,
  Grid,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  Link,
  List,
  ListItem,
  Progress,
  Stack,
  Tag,
  Text,
  Textarea,
  useSpring,
  animated,
};

const LiveCode = ({ content }) => {
  return (
    <LiveProvider code={content} scope={scope} theme={theme}>
      <hr />
      <Box>
        <LivePreview />
      </Box>
      <hr />
      <Box
        fun
        fontSize="sm"
        pseudo={{
          '& > div': { borderRadius: 'md', border: '2px solid transparent' },
          '&:hover > div': { border: '2px solid black' },
        }}
      >
        <LiveEditor />
      </Box>
      <LiveError />
    </LiveProvider>
  );
};

export default LiveCode;
