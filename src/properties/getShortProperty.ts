interface Properties {
  [key: string]: string[] | string;
}

/**
 *  Returns properties for shortcuts
 */

const getShortProperty = (key: string) : string | string[] | undefined => {
  const properties: Properties = {
    area: 'grid-area',
    autoFlow: 'grid-auto-flow',
    autoRows: 'grid-auto-rows',
    autoColumns: 'grid-auto-columns',
    align: 'align-items',
    bg: 'background-color',
    bgAttachment: 'background-attachment',
    bgImage: 'background-image',
    bgPos: 'background-position',
    bgRepeat: 'background-repeat',
    bgSize: 'background-size',
    c: 'color',
    column: 'grid-column',
    columnGap: 'grid-column-gap',
    d: 'display',
    direction: 'flex-direction',
    flexDir: 'flex-direction',
    gap: 'grid-gap',
    h: 'height',
    justify: 'justify-content',
    m: 'margin',
    mb: 'margin-bottom',
    maxH: 'max-height',
    maxW: 'max-width',
    minH: 'min-height',
    minW: 'min-width',
    ml: 'margin-left',
    mr: 'margin-right',
    mt: 'margin-top',
    mx: ['margin-left', 'margin-right'],
    my: ['margin-top', 'margin-bottom'],
    p: 'padding',
    pos: 'position',
    pb: 'padding-bottom',
    pl: 'padding-left',
    pr: 'padding-right',
    pt: 'padding-top',
    px: ['padding-left', 'padding-right'],
    py: ['padding-top', 'padding-bottom'],
    rounded: 'border-radius',
    roundedBottom: ['border-bottom-left-radius', 'border-bottom-right-radius'],
    roundedBottomLeft: 'border-bottom-left-radius',
    roundedBottomRight: 'border-bottom-right-radius',
    roundedLeft: ['border-top-left-radius', 'border-bottom-left-radius'],
    roundedRight: ['border-top-right-radius', 'border-bottom-right-radius'],
    roundedTop: ['border-top-left-radius', 'border-top-right-radius'],
    roundedTopLeft: 'border-top-left-radius',
    roundedTopRight: 'border-top-right-radius',
    row: 'grid-row',
    rowGap: 'grid-row-gap',
    size: ['width', 'height'],
    shadow: 'box-shadow',
    templateAreas: 'grid-template-areas',
    templateColumns: 'grid-template-columns',
    templateRows: 'grid-template-rows',
    w: 'width',
    wrap: 'flex-wrap',
  };
  return properties[key];
};

export default getShortProperty;
