import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import render, { Render } from './system/render';

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

function Indicator({ color, max, min, value }: IndicatorProps): Render {
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

  return render({ ...style, ...props });
}

const progressInstance = new Base(
  ({
    bg = 'gray.500',
    color = 'orange',
    height = '3',
    max = 100,
    min = 0,
    value = 69
  }: ProgressProps) => {
    const indicator = Indicator({ max, min, value, color });

    return {
      children: indicator,
      position: 'relative',
      height,
      overflow: 'hidden',
      bg
    };
  },
  ['max', 'min', 'value']
);

function Progress(props: any): Render {
  return progressInstance.render(props);
}

attachMethodsToInstance(Progress, progressInstance);

Progress.displayName = 'Progress';

export default Progress;
