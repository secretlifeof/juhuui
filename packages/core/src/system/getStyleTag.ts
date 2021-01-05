const TAG_ID = '_juhuui';

declare global {
  interface Window {
    [TAG_ID]?: HTMLStyleElement;
  }
}

export const getStyleTag = () => {
  // let styleEl = document.getElementById(TAG_ID) as HTMLStyleElement | null;

  // eslint-disable-next-line no-restricted-globals
  let styleEl = self[TAG_ID];

  if (styleEl) {
    return styleEl;
  }

  styleEl = document.createElement('style');
  styleEl.id = TAG_ID;
  styleEl.appendChild(document.createTextNode(''));
  return document.head.appendChild(styleEl);
};

export default getStyleTag;
