/**
 * @flow
 */

'use strict';

import type {Node} from '../ASTNode';

/**
 * Make sure expect error works.
 */
function shouldExpectErrors() {
  // $ExpectError
  Math.max('one', 'two');
}

/**
 * Making sure we can do basic refinements based on type.
 */
function shouldCheckSomething(node: Node): Node {
  switch (node.type) {
    case 'File':
      return node.program;

    case 'Program':
    case 'Function':
    case 'EmptyStatement':
    case 'BlockStatement':
      return node;
  }
  return node;
}
