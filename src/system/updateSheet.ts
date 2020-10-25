import injectCss from '../css/injectCss';

const updateSheet = (
  className: string,
  { property, value, media, selector }: any
): void => {
  if (!media) {
    if (!selector) {
      injectCss(`${className}{${property}:${value};}`);
      return;
    }

    const hover = selector.includes('hover');
    injectCss(
      `${hover ? '@media(hover: hover){' : ''}${selector.replace(
        '&',
        className
      )}{${property}:${value};}${hover ? '}' : ''}`,
      true
    );
    return;
  }
  if (!selector) {
    const hover = selector.includes('hover');
    injectCss(
      `@media(min-width:${media})${
        hover ? 'and (hover: hover)' : ''
      }{${className}{${property}:${value};}}`,
      true
    );
  } else {
    injectCss(
      `@media(min-width:${media}){${selector.replace(
        '&',
        className
      )}{${property}:${value};}}`,
      true
    );
  }
};

export default updateSheet;
