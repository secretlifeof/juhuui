// @ts-nocheck
import { processCss, Props } from '../css/processCss';
import createElement, { CreateElement, CSS } from './createElement';

/**
 *  All Components call this
 */

function render(
  { css: cssIn, baseStyles, fun, ...props }: Props,
  extraRaw: string | undefined = '',
  child?: Array<object>
): CreateElement {
  const { classNames = [] } = processCss({
    css: { ...baseStyles, ...cssIn },
    fun
  });

  const css: CSS = { classNames, extraRaw };
  return createElement(props, child, css);
}

export type Render = ReturnType<typeof render>;
export type Base = ReturnType<typeof render>;

export default render;
