import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import { Render } from './system/render';

const gridInstance = new Base({ display: 'grid' });

function Grid(props: any): Render {
  return gridInstance.render(props);
}

attachMethodsToInstance(Grid, gridInstance);

Grid.displayName = 'Grid';

export default Grid;
