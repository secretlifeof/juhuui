import Base from './base';
import attachMethodsToInstance from './base/attachMethodsToInstance';
import render, { Render } from './system/render';
import { ComponentType, CSSRules } from './types';

export interface P {
  angle?: number;
  capIsRound?: boolean;
  color?: string;
  max?: number;
  min?: number;
  size?: string;
  thickness?: number;
  trackColor?: string;
  value?: number;
  label?: string;
  children?: any;
  [key: string]: any;
}

type Props = P & CSSRules;

interface GetComputedProps {
  angle: number;
  capIsRound: boolean;
  color: string;
  max: number;
  min: number;
  size: string;
  thickness: number;
  trackColor: string;
  value: number;
}

interface GetCircleProps {
  thickness: number;
  offset: number;
  color: string;
  radius: number;
  strokeDasharray: number;
  viewBox: number;
}

interface Circle {
  [key: string]: string | number;
}

interface CircleReturn {
  [key: string]: {
    [key: string]: any;
  };
}

const circularProgressLabelInstance = new Base({
  position: 'absolute',
  left: '50%',
  top: '50%',
  lineHeight: '1',
  transform: 'translate(-50%, -50%)',
  fontSize: '0.25em'
});

export const CircularProgressLabel = (props: any): Render => {
  return circularProgressLabelInstance.render(props);
};

/**
 * Functions from Chakra-UI
 *
 */
function getCircleProps({
  color,
  thickness,
  offset,
  radius,
  strokeDasharray,
  viewBox
}: GetCircleProps) {
  const circle: Circle = {
    as: 'circle',
    color,
    fill: 'transparent',
    stroke: 'currentColor',
    'stroke-width': thickness,
    'stroke-dasharray': strokeDasharray,
    'stroke-dashoffset': offset,
    cx: viewBox,
    cy: viewBox,
    r: radius
  };
  return circle;
}

function getComputedProps({
  min,
  max,
  size,
  value,
  angle,
  thickness,
  trackColor,
  color,
  capIsRound
}: GetComputedProps) {
  const radius = 50;
  const diameter = radius * 2;
  const circumference = diameter * Math.PI;
  const strokeDasharray = Math.round(circumference * 1000) / 1000;

  const viewBox = diameter / (1 - thickness / 2);
  const viewBoxAttr = `${viewBox / 2} ${viewBox / 2} ${viewBox} ${viewBox}`;
  const strokeWidth = (thickness / 2) * viewBox;
  const progress = 1 - (value - min) / (max - min);
  const strokeDashoffset = progress * circumference;

  const circleReturn: CircleReturn = {
    root: {
      baseStyles: {
        size,
        fontSize: '100%',
        display: 'inline-block',
        position: 'relative',
        verticalAlign: 'middle'
      },
      role: 'progressbar',
      'aria-valuemin': min,
      'aria-valuemax': max,
      'aria-valuenow': value
    },

    svg: {
      as: 'svg',
      viewBox: viewBoxAttr,
      baseStyles: {
        verticalAlign: 'top',
        transform: `rotate3d(0, 0, 1, ${angle - 90}deg)`,
        size: '100%'
      }
    },

    label: {
      style: {
        align: 'center',
        display: 'flex',
        justify: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0
      },
      text: `${Math.floor((1 - progress) * 100)}%`
    },

    track: getCircleProps({
      thickness: strokeWidth,
      offset: 0,
      radius,
      strokeDasharray,
      color: trackColor,
      viewBox
    }),

    indicator: {
      ...getCircleProps({
        color,
        offset: strokeDashoffset,
        radius,
        strokeDasharray,
        thickness: strokeWidth,
        viewBox
      }),
      ...(capIsRound && { strokeLinecap: 'round' }),
      stroke: 'currentColor'
    }
  };
  return circleReturn;
}

const circularProgressInstance = new Base(
  ({
    angle = 0,
    capIsRound = true,
    children,
    color = 'green.500',
    label,
    max = 100,
    min = 0,
    size = '12',
    thickness = 0.2,
    trackColor = 'gray.400',
    value = 80
  }: Props) => {
    const { root, indicator, label: labelObj, svg, track } = getComputedProps({
      min,
      max,
      value,
      size,
      angle,
      thickness,
      capIsRound,
      color,
      trackColor
    });

    const i = render(indicator);
    const t = render(track);
    const s = render(svg, [t, i]);

    const labelChild = render(labelObj.style, labelObj.text);

    return {
      children: [s, label && labelChild, children],
      ...root
    };
  }
);

/**
 * Circular progress visualization.
 * @param angle - start angle
 * @param capIsRound - rounded cap
 * @param color - background color
 * @param max - max value
 * @param min - min value
 * @param size - width & height
 * @param thickness - thickness of track
 * @param trackColor - track color
 * @param value - value completed
 * @param label - center description
 * @returns JSX Element
 * @example
 * <CircularProgress value={60}>Click</CircularProgress>
 */
const CircularProgress = ((props: CSSRules): Render => {
  return circularProgressInstance.render(props);
}) as ComponentType<P>;

attachMethodsToInstance(CircularProgress, circularProgressInstance);

CircularProgress.displayName = 'CircularProgress';

export default CircularProgress;
