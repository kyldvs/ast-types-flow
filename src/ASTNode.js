/**
 * @flow
 */

'use strict';

export type Node =
  {
    type: 'Program',
    body: Array<Node>,
  } |
  {
    type: 'File',
    program: Node,
  } |
  {
    type: 'Function',
    id: ?Node,
    params: Array<Node>,
    body: Array<Node>,
  } |
  {
    type: 'EmptyStatement',
  } |
  {
    type: 'BlockStatement',
    body: Array<Node>,
  } |
  {
    type: 'ExpressionStatement',
    expression: Node,
  } |
  {
    type: 'IfStatement',
    test: Node,
    consequent: Node,
    alternate: ?Node,
  } |
  {
    type: 'LabeledStatement',
    label: Node,
    body: Node,
  } |
  {
    type: 'BreakStatement',
    label: ?Node,
  } |
  {
    type: 'ContinueStatement',
    label: ?Node,
  } |
  {
    type: 'WithStatement',
    object: Node,
    body: Node,
  };
