// @ts-nocheck
// import { createElement } from 'react';

import { h } from './setup';

interface Props {
  [key: string]: any;
}

export interface CSS {
  classNames: string[];
  extraRaw?: string;
}

type CreateElement = ReturnType<typeof h>;

/**
 *  Concats arguments to css string and creates element
 */

const render = (
  { as: propAs, children, className = '', ...props }: Props,
  child: Array<object> | undefined,
  css: CSS
): CreateElement => {
  const { classNames } = css;
  const tag: string = propAs || 'div';

  return h(
    tag,
    {
      ...props,
      className: `${classNames.join(' ')} ${className}`.trim()
    },
    child ? [...child, ...children] : children
  );
};

export default render;
