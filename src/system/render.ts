// @ts-nocheck
import { processCss, Props } from '../css/processCss';
import createElement, { CreateElement } from './createElement';

/**
 *  All Components call this
 */

function render(
  { css: cssIn, baseStyles, fun, preProcessedCss, ...props }: Props,
  child?: Array<object>
): CreateElement {
  const classNames =
    processCss(
      {
        css: { ...baseStyles, ...cssIn },
        fun
      },
      { preProcessedCss }
    ) ?? [];

  return createElement(props, child, classNames);
}

export type Render = ReturnType<typeof render>;
export type Base = ReturnType<typeof render>;

export default render;
