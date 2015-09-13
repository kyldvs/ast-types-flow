/**
 * @flow
 */

'use strict';

import type {Node} from '../ASTNode';

// Function to assert the types of things in the Flow world.
function assertNode(x: Node) {}
function assertString(x: string) {}
function assertIdentifier(node: Node) {
  if (node.type === 'Identifier') {
    return node;
  }
  throw new Error('Expected node of type Identifier');
}

/**
 * Make sure expect error works.
 */
function shouldExpectErrors() {
  // $ExpectError
  assertString(1);
}

/**
 * Arrays of nodes properly error.
 */
function test1(node: Node) {
  switch (node.type) {
    case 'Program':
      // $ExpectError
      assertNode(node.body);
  }
}

/**
 * Elements of arrays are understood as nodes.
 */
function test2(node: Node) {
  switch (node.type) {
    case 'Program':
      assertNode(node.body[0]);
  }
}

/**
 * Can't use non-existant fields.
 */
function test3(node: Node) {
  switch (node.type) {
    case 'EmptyStatement':
      // $ExpectError
      assertNode(node.nothing);
  }
}

/**
 * Can't deeply access fields without refining.
 */
function test4(node: Node) {
  switch (node.type) {
    case 'FunctionDeclaration':
      // TODO: Make it possible to build up the types so that we know that here
      // id is of type "Identifier".

      // $ExpectError
      assertString(node.id.name);
  }
}

/**
 * Can easily refine types using flow inference.
 */
function test5(node: Node) {
  switch (node.type) {
    case 'FunctionDeclaration':
      var id = assertIdentifier(node.id);
      assertString(id.name);
  }
}

/**
 * The refined type should be correct though.
 */
function test6(node: Node) {
  switch (node.type) {
    case 'FunctionDeclaration':
      var id = assertIdentifier(node.id);
      // $ExpectError
      assertString(id.value);
  }
}
