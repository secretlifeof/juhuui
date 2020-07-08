import { Box, Flex} from 'juhuui';
import { useRouter } from 'next/router';
import React, { useState} from 'react';

import documentation from '../utilities/getDocumentation';
import Menu from './documentationMenu';
import Markdown from './markdown';

const Documentation = ({ type, linkBase, defaultMd }) => {
  const [md, setMd] = useState(defaultMd);
  const router = useRouter();
  const { mdx: mdName = defaultMd } = router.query;
  if (!mdName) return null;
  const { contents } = documentation[type][md] || {};
  const items = Object.values(documentation[type]).map((m) => m.name);

  return (
    <Flex>
      <Menu
        items={items}
        linkBase={linkBase}
        changeMd={(title) => setMd(title)}
      />
      <Box
        fun
        maxWidth="calc(100% - 14rem)"
        px="8"
        pseudo={{ div: { lineHeight: '1.25rem' } }}
      >
        <Markdown contents={contents} />
      </Box>
    </Flex>
  );
};

export default Documentation;
