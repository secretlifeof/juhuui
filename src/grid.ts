import base, { Base } from './system/base';
import withHelper from './system/withHelper';

function Grid(props: any): Base {
  const style = {
    display: 'grid'
  };

  return base({ ...style, ...props });
}

Grid.with = withHelper(Grid);

Grid.displayName = 'Grid';

export default Grid;
