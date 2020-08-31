import injectCss from '../css/injectCss';

const updateSheet = (
  className: string,
  { property, value, media, selector }: any
): void => {
  if (!media) {
    if (!selector) {
      injectCss(`${className}{${property}:${value};}`);
    } else {
      const hover = selector.includes('hover');
      injectCss(
        `${hover ? '@media(hover: hover){' : ''}${selector.replace(
          '&',
          className
        )}{${property}:${value};}${hover ? '}' : ''}`
      );
    }
  }
  if (!selector) {
    const hover = selector.includes('hover');
    // !selector.includes('hover')
    //   ? injectCss(
    //       `@media(min-width:${media}){.${className}{${property}:${value};}}`
    //     )
    //   : injectCss(`@media(hover){.${className}{${property}:${value};}}`);
    injectCss(
      `@media(min-width:${media})${
        hover ? 'and (hover: hover)' : ''
      }{${className}{${property}:${value};}}`
    );
  } else {
    injectCss(
      `@media(min-width:${media}){${selector.replace(
        '&',
        className
      )}{${property}:${value};}}`
    );
  }
};

export default updateSheet;
