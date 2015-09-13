/**
 * @flow
 */

'use strict';

import type {Node, Program} from '../ASTNode';

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
function shouldCheckSomething(node: Node): Program {
  switch (node.type) {
    case 'Program':
      // $ExpectError
      return node.notANode;

    case 'File':
      return node.program;

    default:
      // TODO: $ExpectError
      return node.wat;
  }
}
