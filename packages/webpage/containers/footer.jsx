import { Text } from 'juhuui';
import React from 'react'

import FrameMain from '../components/frameMain';

function Footer() {
  return (
    <FrameMain
      bg="juhuui.300"
      d="flex"
      justify="flex-end"
      align="center"
      h="16"
      color="white"
      flexShrink="0"
      w="100%"
      position="relative"
      zIndex="2"
    >
      {/* <Text fontSize="sm">Design by Teuber Kohlhoff</Text> */}
      <Text fontSize="sm" pl="4">
        Created by Espen Finnesand
      </Text>
    </FrameMain>
  );
}

export default Footer;
