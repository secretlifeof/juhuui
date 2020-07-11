import processProps, { Props } from '../css/processProps';
import render, { CSS } from './render';

type Render = ReturnType<typeof render>;

/**
 *  All Components call this
 */

function base(
  props: Props,
  extraRaw: string | undefined = '',
  child?: Array<object>
): Render {
  const root = processProps(props);
  const css: CSS = { classNames: root.classNames, extraRaw };
  return render(root.returnProps, child, css);
}

export type Base = ReturnType<typeof base>;

export default base;
