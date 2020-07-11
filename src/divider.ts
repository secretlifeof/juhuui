import base, { Base } from './system/base';
import withHelper from './system/withHelper';

interface Props {
  fun: boolean;
  orientation: string;
  rest: object;
}

function Divider({ orientation = 'horizontal', ...rest }: Props): Base {
  const style = {
    'aria-orientation': orientation,
    border: '0',
    opacity: '0.6',
    height: 0
  };

  const orientationStyle =
    orientation === 'vertical'
      ? {
          borderLeft: '0.0625rem solid',
          height: 'auto',
          mx: 2
        }
      : { borderTop: '1px solid', width: '100%', my: 2 };

  const tag = orientation === 'vertical' ? 'div' : 'hr';

  return base({
    ...style,
    ...orientationStyle,
    borderColor: 'inherit',
    as: tag,
    ...rest
  });
}

Divider.with = withHelper(Divider);

Divider.displayName = 'Divider';

export default Divider;
