import injectCss from '../css/injectCss';

const updateSheet = (
  className: string,
  { media, selector, mediaQuery, css }: any
): void => {
  if (!media && !mediaQuery) {
    if (!selector) {
      injectCss(`${className}{${css}}\n`);
      return;
    }

    const hover = selector.includes('hover');
    injectCss(
      `${hover ? '@media(hover: hover){' : ''}${selector.replace(
        '&',
        className
      )}{${css}}${hover ? '}' : ''}\n`,
      true
    );
    return;
  }
  if (!selector && !mediaQuery) {
    const hover = selector.includes('hover');
    injectCss(
      `@media(min-width:${media})${
        hover ? 'and (hover: hover)' : ''
      }{${className}{${css}}}\n`,
      true
    );
  }
  if (mediaQuery) {
    injectCss(
      `@media${mediaQuery}{${
        !selector ? className : `${selector.replace('&', className)}`
      }{${css}}}\n`
    );
  } else {
    injectCss(
      `@media(min-width:${media}){${selector.replace(
        '&',
        className
      )}{${css}}}\n`,
      true
    );
  }
};

export default updateSheet;
