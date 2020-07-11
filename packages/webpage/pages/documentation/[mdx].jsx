import { Box, Flex, Fun } from 'juhuui';
import NLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import Menu from '../../containers/documentationMenu';
import Markdown from '../../containers/markdown';
import documentation from '../../utilities/getDocumentation';
import { menuItems } from './index';

function Documentation() {
  const [md, setMd] = useState('introduction');
  const router = useRouter();
  const { mdx: mdName = 'introduction' } = router.query;
  useEffect(() => {
    setMd(mdName);
  }, [mdName]);
  if (!mdName) return null;
  const { contents } = documentation.filesRoot[md] || {};

  const nextMdName = menuItems[menuItems.indexOf(mdName) + 1];

  return (
    <Flex w="full">
      <Menu
        items={menuItems}
        linkBase="documentation"
        changeMd={(title) => setMd(title)}
      />
      <Flex justify="center">
        <Box
          fun
          pl={['3vw', null, '8']}
          pr="3vw"
          pb="16"
          pseudo={{ div: { lineHeight: '1.25rem' } }}
          maxWidth="1000px"
        >
          <Markdown contents={contents} />
          <NLink
            href="/documentation/[mdx]"
            as={`/documentation/${nextMdName}`}
          >
            <Fun
              as="a"
              color="green.500"
              cursor="pointer"
              d="block"
              fontSize="lg"
              py="8"
              textAlign="center"
              textDecoration="underline"
              _hover={{ color: 'blue.600', textDecoration: 'none' }}
            >
              {nextMdName && `continue with ${nextMdName.toUpperCase()}`}
            </Fun>
          </NLink>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Documentation;
