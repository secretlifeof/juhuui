import { Flex, Fun } from 'juhuui';
import Link from 'next/link';
import React from 'react'

const DocumentationMenu = ({ items, linkBase }) => (
  <Flex
    borderRight="2px solid gray.100"
    direction="column"
    fontSize="xl"
    minHeight="calc(100vh - 8rem)"
    pl="3vw"
    pt="4"
    textTransform="capitalize"
    w="56"
    minWidth="56"
    bg="gray.50"
    d={['none', null, 'flex']}
    position="fixed"
    top="16"
    h="100%"
    zIndex="1"
  >
    {items.map((item, index) => (
      <Link href={`/${linkBase}/[mdx]`} as={`/${linkBase}/${item}`}>
        <Fun
          as="a"
          key={index}
          cursor="pointer"
          // onClick={() => changeMd(item)}
          _hover={{ color: 'juhuui.300' }}
        >
          {item}
        </Fun>
      </Link>
    ))}
  </Flex>
);

export default DocumentationMenu;
