import { h } from './setup';

interface Props {
  [key: string]: any;
}

export interface CSS {
  classNames: string[];
  extraRaw?: string;
}

export type CreateElement = ReturnType<typeof h>;

/**
 *  Concats arguments to css string and creates element
 */

const createElement = (
  { as: propAs, children, className = '', ...props }: Props,
  child: Array<object> | undefined,
  classNames: string[]
): CreateElement => {
  const tag: string = propAs || 'div';

  return h(
    tag,
    {
      ...props,
      className: `${className} ${classNames.join(' ')}`.trim()
    },
    child ? [...child, ...children] : children
  );
};

export default createElement;
