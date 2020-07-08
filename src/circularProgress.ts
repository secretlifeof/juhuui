import base, {Base} from './system/base';

interface Props {
  angle: number;
  capIsRound: boolean;
  color: string;
  max: number;
  min: number;
  size: string;
  text: string;
  thickness: number;
  trackColor: string;
  value: number;
  label: string;
  children: any;
}

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

export const CircularProgressLabel = (props: any, ref: object) : Base => {
  const style = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    lineHeight: '1',
    transform: 'translate(-50%, -50%)',
    fontSize: '0.25em',
  };

  return base({ ...style, ...props }, ref);
};

function getCircleProps({ color, thickness, offset, radius, strokeDasharray, viewBox }: GetCircleProps) {
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
    r: radius,
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
  capIsRound,
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
      size,
      fontSize: '100%',
      display: 'inline-block',
      position: 'relative',
      verticalAlign: 'middle',
      role: 'progressbar',
      'aria-valuemin': min,
      'aria-valuemax': max,
      'aria-valuenow': value,
    },

    svg: {
      as: 'svg',
      viewBox: viewBoxAttr,
      verticalAlign: 'top',
      transform: `rotate3d(0, 0, 1, ${angle - 90}deg)`,
      size: '100%',
    },

    label: {
      style: {
        align: 'center',
        display: 'flex',
        justify: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
      },
      text: `${Math.floor((1 - progress) * 100)}%`,
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
      stroke: 'currentColor',
    },
  };
  return circleReturn;
}

function CircularProgress(
  {
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
    value = 80,
    ...rest
  }: Props,
  ref: object
) : Base {
  const { root, indicator, label: labelObj, svg, track } = getComputedProps({
    min,
    max,
    value,
    size,
    angle,
    thickness,
    capIsRound,
    color,
    trackColor,
  });

  const i = base(indicator, ref);
  const t = base(track, ref);
  const s = base(svg, ref, undefined, [t, i]);

  const labelChild = base(labelObj.style, ref, undefined, labelObj.text);

  return base({ ...root, ...rest }, ref, undefined, [
    s,
    label && labelChild,
    children,
  ]);
}

CircularProgress.displayName = 'CircularProgress';

export default CircularProgress;
