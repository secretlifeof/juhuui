import { Flex, Fun, Icon, Link, Text, css } from 'juhuui';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';

import FrameMain from '../components/frameMain';

const theme = {
  light: {
    '--c50': 'white',
    '--c100': '#fff7eb',
    '--c200': '#e9f8e8',
    '--c300': '#37b311',
    '--c800': '#07130f',
    '--c900': '#07130f'
  },
  dark: {
    '--c50': 'black',
    '--c100': 'black',
    '--c200': 'black',
    '--c300': 'yellow',
    '--c800': '#07130f',
    '--c900': '#fff7eb'
  }
};

function Header() {
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
    <FrameMain
      bg="juhuui.300"
      d="flex"
      justify="space-between"
      align="center"
      h={['20', '16']}
      color="white"
      pos="relative"
      w="100%"
      position="fixed"
      top="0"
      zIndex="sticky"
      className="frameMain"
      fontSize="md"
    >
      <NextLink href="/">
        <Text fontSize={['3xl', 'xl']} cursor="pointer" letterSpacing="0.050em">
          JUHUUI
        </Text>
      </NextLink>
      <Flex
        fun
        pseudo={{
          '& > div': { pl: ['4', '8', '4'] },
          '& > a': { ml: ['4', '4', '6'] },
          '& > svg': { ml: ['8', '4', '6'] }
        }}
        align="center"
        letterSpacing="0.037em"
      >
        <NextLink href="/documentation">
          <Fun
            as="a"
            _hover={{ color: 'black' }}
            cursor="pointer"
            d={['none', 'initial', 'initial']}
          >
            Documentation
          </Fun>
        </NextLink>
        <NextLink href="/components">
          <Fun
            as="a"
            _hover={{ color: 'black' }}
            cursor="pointer"
            d={['none', 'initial', 'initial']}
          >
            Components
          </Fun>
        </NextLink>
        <NextLink href="/recipes">
          <Fun
            as="a"
            _hover={{ color: 'black' }}
            cursor="pointer"
            d={['none', 'initial', 'initial']}
          >
            Recipes
          </Fun>
        </NextLink>
        <Link
          href="https://github.com/secretlifeof/juhuui"
          target="_blank"
          size={['8', '6']}
        >
          <Icon
            name="github"
            cursor="pointer"
            color="white"
            hoverColor="black"
          />
        </Link>
        {/* <Icon
          name="moon"
          cursor="pointer"
          color="white"
          hoverColor="black"
          size={['8', '6']}
          onClick={() =>
            setDarkMode((state) => (state === 'light' ? 'dark' : 'light'))
          }
        /> */}
      </Flex>
    </FrameMain>
  );
}

export default Header;
