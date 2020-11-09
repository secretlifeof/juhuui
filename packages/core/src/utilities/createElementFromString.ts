import htm from 'htm';

import { h } from '../system/setup';

function createElementFromString(svg: string) {
  const html = htm.bind(h);
  // @ts-ignore
  return html([svg]);
}

export default createElementFromString;
