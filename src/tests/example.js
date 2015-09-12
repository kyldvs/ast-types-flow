/**
 * @flow
 */

'use strict';

import type {ASTNode} from '../ASTNode';

function shouldExpectErrors() {
  // $ExpectError
  Math.max('one', 'two');
}

function shouldCheckSomething(node: ASTNode): string {
  switch (node.type) {
    case 'Bar':
      return node.bar;

    case 'Baz':
      // $ExpectError
      return node.bar;

    default:
      // TODO: ExpectError
      return node.wat;
  }
}
