/**
 * @flow
 */

'use strict';

import type {Node} from '../lib/types';

function a(node: Node) {
  switch (node.type) {
    case 'Identifier':
      assertString(node.name);
      if (node.comments) {
        node.comments.forEach(comment => {
          assertString(comment.value);
        });
      }
      break;

    case 'BlockStatement':
      node.body.forEach(statement => {
        switch (statement.type) {
          case 'LabeledStatement':
            assertString(statement.label.name);
        }
      });
      break;
  }
}

function b(node: Node) {
  if (node.type === 'ContinueStatement' && node.label) {
    assertString(node.label.name);
    // $ExpectError
    assertString(node.label.notName);
  }
}

function getName(node: Node): string {
  switch (node.type) {
    case 'Identifier':
      return node.name;

    case 'ClassDeclaration':
      // $ExpectError
      return node.id.name; // Error, id could be null.

    case 'FunctionExpression':
      if (node.id) {
        return node.id.name; // Can refine id to make sure it exists though.
      }

    case 'FunctionDeclaration':
      return node.id.name; // No need to refine if it's always there.

    case 'Literal':
      // $ExpectError
      return node.name; // Error, Literals don't have names, don't be silly.
  }
  return 'Unknown';
}

// Some helper functions to assert the values of different types.
function assertString(x: string) {}
