import { processCss } from '../css/processCss';
import { CSSRules } from '../types';
import createElement, { CreateElement } from './createElement';

export interface Props {
  children?: any;
  fun?: boolean;
  css?: CSSRules;
  [key: string]: any;
}

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
    ) || [];

  return createElement(props, child, classNames as string[]);
}

export type Render = ReturnType<typeof render>;
export type Base = ReturnType<typeof render>;

export default render;
