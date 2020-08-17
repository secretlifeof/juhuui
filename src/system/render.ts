import processProps, { Props } from '../css/processProps';
import createElement, { CSS } from './createElement';

type CreateElement = ReturnType<typeof createElement>;

/**
 *  All Components call this
 */

function render(
  props: Props,
  extraRaw: string | undefined = '',
  child?: Array<object>
): CreateElement {
  const root = processProps(props);
  const css: CSS = { classNames: root.classNames, extraRaw };
  return createElement(root.returnProps, child, css);
}

export type Render = ReturnType<typeof render>;
export type Base = ReturnType<typeof render>;

export default render;
