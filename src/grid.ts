import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

const gridInstance = new Base({ display: 'grid' });

const Grid = ((props: CSSRules): Render => {
  return gridInstance.render(props);
}) as ComponentType;

attachMethodsToInstance(Grid, gridInstance);

Grid.displayName = 'Grid';

export default Grid;
