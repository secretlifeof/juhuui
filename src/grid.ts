import base, { Base } from './system/base';


function Grid(props: any, ref: object) : Base {
  const style = {
    display: 'grid',
  };

  return base({ ...style, ...props }, ref);
}

Grid.displayName = 'Grid';

export default Grid;
