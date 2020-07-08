const TAG_ID = '_juhuui';

const getStyleTag = (tag?: string) => {
  let styleEl = document.getElementById(
    tag || TAG_ID
  ) as HTMLStyleElement | null;
  if (styleEl) {
    return styleEl;
  }

  styleEl = document.createElement('style');
  styleEl.id = tag || TAG_ID;
  styleEl.appendChild(document.createTextNode(''));
  return document.head.appendChild(styleEl);
};

export default getStyleTag;
