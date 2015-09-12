/**
 * @flow
 */

'use strict';

export type ASTNode =
  {
    type: 'Bar',
    bar: string,
  } |
  {
    type: 'Baz',
    baz: string,
  };
