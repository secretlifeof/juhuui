// @ts-nocheck
import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';

const box = new Base();

function Box(props: any) {
  return box.render(props);
}

attachMethodsToInstance(Box, box);

Box.displayName = 'Box';

export default Box;
