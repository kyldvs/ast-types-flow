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

// Some helper functions to assert the values of different types.
function assertString(x: string) {}
