import { Box, Flex } from 'juhuui';
import React from 'react';

import Menu from '../../containers/documentationMenu';
import Markdown from '../../containers/markdown';
import documentation from '../../utilities/getDocumentation';

const defaultMd = 'fun';
function Components() {
  // const [md, setMd] = useState('fun');
  // const router = useRouter();
  // const { mdx: mdName = 'fun' } = router.query;
  // if (!mdName) return;
  const { contents } = documentation.filesComponents[defaultMd] || {};
  const items = Object.values(documentation.filesComponents).map(
    (md) => md.name
  );
  // const allMenuItems = [...menuItemsBeginning, ...items];

  return (
    <Flex w="full">
      <Menu
        items={items}
        linkBase="components"
        // changeMd={(title) => setMd(title)}
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
}

export default Components;
