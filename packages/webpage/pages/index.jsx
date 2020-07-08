import { Box, Button,Flex, Heading, Stack, Text } from 'juhuui';
import NextLink from 'next/link';
import React from 'react';

import FrameMain from '../components/frameMain';
import GettingStarted from '../containers/gettingStarted';

export default () => {
  return (
    <FrameMain minHeight="100vh" bg="juhuui.50" maxWidth="1300px">
      <Flex
        direction="column"
        justify="center"
        align="center"
        h="calc(100vh - 4rem)"
        textAlign="center"
        w="100%"
      >
        <Box w={['70%']} pos="relative">
          <Heading
            as="h1"
            color="juhuui.300"
            fontSize={['4xl', '5xl', '3xl']}
            m="0"
            letterSpacing="0.045em"
            p="0"
            fontWeight="normal"
          >
            JUHUUI
          </Heading>
          <Heading
            as="h2"
            color="juhuui.900"
            fontSize={['xl', '2xl', 'xl']}
            m="0"
            pt={['4']}
            pb={['6']}
            letterSpacing="0.037em"
            fontWeight="normal"
          >
            A hopefully fun and lightweight UI library
          </Heading>
          <Stack
            isInline={[false, true]}
            spacing={['6', '20']}
            justify="center"
            py="4"
          >
            <NextLink href="/documentation">
              <Button
                border="2px solid"
                borderColor="juhuui.300"
                h="10"
                hoverColor="gray.100"
                letterSpacing="0.035em"
                fontSize={["xl","md","md"]}
              >
                Documentation
              </Button>
            </NextLink>
            <NextLink href="/components">
              <Button
                border="2px solid"
                borderColor="juhuui.300"
                h={['8',"10", null]}
                hoverColor="gray.100"
                letterSpacing="0.035em"
                fontSize={["xl","md","md"]}
              >
                Components
              </Button>
            </NextLink>
            <NextLink href="/recipes">
              <Button
                border="2px solid"
                borderColor="juhuui.300"
                h={['8',"10", null]}
                hoverColor="gray.100"
                letterSpacing="0.035em"
                fontSize={["xl","md","md"]}
              >
                Recipes
              </Button>
            </NextLink>
            {/* <Button
              border="2px solid"
              borderColor="juhuui.300"
              h="12"
              hoverColor="gray.100"
              letterSpacing="0.035em"
              fontSize="lg05"
            >
              Github
            </Button> */}
          </Stack>
          <Box
            color="juhuui.900"
            fontSize={['lg', 'lg', 'lg']}
            py={['4']}
            px={[null, '6', '24']}
          >
            Juhuui is a simple creature helping you to be more productive.
            Behind the scenes it uses atomic CSS to. Benchmarks measuring speed
            show that it´s comparable to other UI frameworks. Do you want a
            theme that´s customizable and has some nice defaults? Dark mode?
            Please fasten your seatbelt.
            <Text as="div" color="juhuui.300" fontSize={['2xl', '2xl', 'xl']} py="6">
              ... juhu ... UI ... 
              <span role="img" aria-label="kissing cat">😽</span>
            </Text>
          </Box>
        </Box>
      </Flex>
      <GettingStarted />
    </FrameMain>
  );
};
