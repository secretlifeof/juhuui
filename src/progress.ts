import base, { Base } from './system/base';
import withHelper from './system/withHelper';

interface IndicatorProps {
  color: string;
  max: number;
  min: number;
  value: number;
}

interface ProgressProps {
  background: string;
  color: string;
  fun: boolean;
  max: number;
  min: number;
  size: string;
  value: number;
  height: number | string;
  bg: string;
  rest: any;
}

function Indicator({ color, max, min, value }: IndicatorProps): Base {
  const percent = (value / (max - min)) * 100;

  const style = {
    height: '100%',
    transition: 'all 0.3s',
    width: `${percent}%`,
    background: color
  };

  const props = {
    'aria-valuemax': max,
    'aria-valuemin': min,
    role: 'progressbar'
  };

  return base({ ...style, ...props });
}

function Progress({
  bg = 'gray.500',
  color = 'orange',
  height = '3',
  max = 100,
  min = 0,
  value = 69,
  ...rest
}: ProgressProps): Base {
  const style = {
    position: 'relative',
    height,
    overflow: 'hidden',
    bg
  };

  const indicator = Indicator({ max, min, value, color });

  return base({ ...style, ...rest }, undefined, indicator);
}

Progress.with = withHelper(Progress);

Progress.displayName = 'Progress';

export default Progress;
