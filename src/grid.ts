import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

interface P {
  [key: string]: any;
}

const gridInstance = new Base({ baseStyles: { display: 'grid' } });

/**
 * Box with display="grid".
 * @returns JSX Element
 * @example
 * <Grid>
 *  <Box>Hello</Box>
 *  <Box>there</Box>
 * </Grid>
 */
const Grid = ((props: CSSRules): Render => {
  return gridInstance.render(props);
}) as ComponentType<P>;

attachMethodsToInstance(Grid, gridInstance);

Grid.displayName = 'Grid';

export default Grid;
