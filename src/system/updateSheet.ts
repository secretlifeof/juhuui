import injectCss from '../css/injectCss';

const updateSheet = (
  className: string,
  { property, value, media, selector, mediaQuery }: any
): void => {
  if (!media && !mediaQuery) {
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
  if (!selector && !mediaQuery) {
    const hover = selector.includes('hover');
    injectCss(
      `@media(min-width:${media})${
        hover ? 'and (hover: hover)' : ''
      }{${className}{${property}:${value};}}`,
      true
    );
  }
  if (mediaQuery) {
    injectCss(
      `@media${mediaQuery}{${
        !selector ? className : `${selector.replace('&', className)}`
      }{${property}:${value};}}`
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
