// @ts-nocheck
import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import render, { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

interface IndicatorProps {
  color: string;
  max: number;
  min: number;
  value: number;
}

interface ProgressP {
  color?: string;
  fun?: boolean;
  max?: number;
  min?: number;
  height?: number | string;
  value?: number;
  bg?: string;
  [key: string]: any;
}

type ProgressProps = ProgressP & CSSRules;

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

/**
 * Horizontal progress bar.
 * @param bg - Background color
 * @param color - Track color
 * @param max - Max value
 * @param min - Min value
 * @param value - Value completed
 * @returns JSX Element
 * @example
 * <Progress value={60}>Click</Progress>
 */
const Progress = ((props: ProgressProps): Render => {
  return progressInstance.render(props);
}) as ComponentType<ProgressP>;

attachMethodsToInstance(Progress, progressInstance);

Progress.displayName = 'Progress';

export default Progress;
