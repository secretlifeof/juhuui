import { Box, Flex } from 'juhuui';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Menu from '../../containers/documentationMenu';
import Markdown from '../../containers/markdown';
import documentation from '../../utilities/getDocumentation';

const Recipes = () => {
  const [md, setMd] = useState('accordion');
  const router = useRouter();
  const { mdx: mdName = 'accordion' } = router.query;
  if (!mdName) return null;
  const { contents } = documentation.filesRecipes[md] || {};
  const items = Object.values(documentation.filesRecipes).map((m) => m.name);

  return (
    <Flex w="full">
      <Menu
        items={items}
        linkBase="recipes"
        changeMd={(title) => setMd(title)}
      />
      <Flex justify="center" w="full">
        <Box
          fun
          w="100%"
          pl={['3vw', null, '8']}
          pr="3vw"
          pb="16"
          pseudo={{ div: { lineHeight: '1.25rem' } }}
          maxWidth="1000px"
        >
          <Markdown contents={contents} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Recipes;
