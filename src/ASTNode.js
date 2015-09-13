/**
 * @flow
 */

'use strict';

export type Node =
  {
    // Each of these void fields are to make the disjoint unions structurally
    // unique to work aroudn a Flow issue. You should ignore them.
    _Program: void,
    type: 'Program',
    body: Array<Node>,
  } |
  {
    _File: void,
    type: 'File',
    program: Node,
  } |
  {
    _Function: void,
    type: 'Function',
    id: ?Node,
    params: Array<Node>,
    body: Array<Node>,
  } |
  {
    _EmptyStatement: void,
    type: 'EmptyStatement',
  } |
  {
    _BlockStatement: void,
    type: 'BlockStatement',
    body: Array<Node>,
  } |
  {
    _ExpressionStatement: void,
    type: 'ExpressionStatement',
    expression: Node,
  } |
  {
    _IfStatement: void,
    type: 'IfStatement',
    test: Node,
    consequent: Node,
    alternate: ?Node,
  } |
  {
    _LabeledStatement: void,
    type: 'LabeledStatement',
    label: Node,
    body: Node,
  } |
  {
    _BreakStatement: void,
    type: 'BreakStatement',
    label: ?Node,
  } |
  {
    _ContinueStatement: void,
    type: 'ContinueStatement',
    label: ?Node,
  } |
  {
    _WithStatement: void,
    type: 'WithStatement',
    object: Node,
    body: Node,
  } |
  {
    _SwitchStatement: void,
    type: 'SwitchStatement',
    discriminant: Node,
    cases: Array<Node>,
    lexical: boolean,
  } |
  {
    _ReturnStatement: void,
    type: 'ReturnStatement',
    argument: ?Node,
  } |
  {
    _ThrowStatement: void,
    type: 'ThrowStatement',
    argument: Node,
  } |
  {
    _TryStatement: void,
    type: 'TryStatement',
    block: Node,
    handler: ?Node,
    handlers: Array<Node>,
    guardedHandlers: Array<Node>,
    finalizer: ?Node,
  } |
  {
    _CatchClause: void,
    type: 'CatchClause',
    param: Node,
    guard: ?Node,
    body: Node,
  } |
  {
    _WhileStatement: void,
    type: 'WhileStatement',
    test: Node,
    body: Node,
  } |
  {
    _DoWhileStatement: void,
    type: 'DoWhileStatement',
    test: Node,
    body: Node,
  } |
  {
    _ForStatement: void,
    type: 'ForStatement',
    init: ?Node,
    test: ?Node,
    update: ?Node,
    body: Node,
  } |
  {
    _ForInStatement: void,
    type: 'ForInStatement',
    left: Node,
    right: Node,
    body: Node,
  } |
  {
    _DebuggerStatement: void,
    type: 'DebuggerStatement',
  } |
  {
    _FunctionDeclaration: void,
    type: 'FunctionDeclaration',
    id: Node,
    params: Array<Node>,
    body: Node,
  } |
  {
    _FunctionExpression: void,
    type: 'FunctionExpression',
    id: ?Node,
    params: Array<Node>,
    body: Node,
  } |
  {
    _VariableDeclaration: void,
    type: 'VariableDeclaration',
    kind: 'var' | 'let' | 'const',
    declarations: Array<Node>,
  } |
  {
    _VariableDeclarator: void,
    type: 'VariableDeclarator',
    id: Node,
    init: ?Node,
  } |
  {
    _ThisExpression: void,
    type: 'ThisExpression',
  } |
  {
    _ArrayExpression: void,
    type: 'ArrayExpression',
    elements: Array<?Node>,
  } |
  {
    _ObjectExpression: void,
    type: 'ObjectExpression',
    properties: Array<Node>,
  } |
  {
    _Property: void,
    type: 'Property',
    kind: 'init' | 'get' | 'set',
    key: Node,
    value: Node,
  } |
  {
    _SequenceExpression: void,
    type: 'SequenceExpression',
    expressions: Array<Node>,
  } |
  {
    _UnaryExpression: void,
    type: 'UnaryExpression',
    operator: '-' | '+' | '!' | '~' | 'typeof' | 'void' | 'delete',
    argument: Node,
    prefix: true,
  } |
  {
    _BinaryExpression: void,
    type: 'BinaryExpression',
    operator:
      '==' |
      '!=' |
      '===' |
      '!==' |
      '<' |
      '<=' |
      '>' |
      '>=' |
      '<<' |
      '>>' |
      '>>>' |
      '+' |
      '-' |
      '*' |
      '/' |
      '%' |
      '&' |
      '|' |
      '^' |
      'in' |
      'instanceof' |
      '..',
    left: Node,
    right: Node,
  } |
  {
    _AssignmentExpression: void,
    type: 'AssignmentExpression',
    operator:
      '=' |
      '+=' |
      '-=' |
      '*=' |
      '/=' |
      '%=' |
      '<<=' |
      '>>=' |
      '>>>=' |
      '|=' |
      '^=' |
      '&=',
    left: Node,
    right: Node,
  } |
  {
    _UpdateExpression: void,
    type: 'UpdateExpression',
    operator: '++' | '--',
    argument: Node,
    prefix: boolean,
  } |
  {
    _LogicalExpression: void,
    type: 'LogicalExpression',
    operator: '||' | '&&',
    left: Node,
    right: Node,
  } |
  {
    _ConditionalExpression: void,
    type: 'ConditionalExpression',
    test: Node,
    consequent: Node,
    alternate: Node,
  } |
  {
    _NewExpression: void,
    type: 'NewExpression',
    callee: Node,
    arguments: Array<Node>,
  } |
  {
    _CallExpression: void,
    type: 'CallExpression',
    callee: Node,
    arguments: Array<Node>,
  } |
  {
    _MemberExpression: void,
    type: 'MemberExpression',
    object: Node,
    property: Node,
    computed: boolean,
  } |
  {
    _SwitchCase: void,
    type: 'SwitchCase',
    test: ?Node,
    consequent: Array<Node>,
  } |
  {
    _Identifier: void,
    type: 'Identifier',
    name: string,
  } |
  {
    _Literal: void,
    type: 'Literal',
    value: mixed, // string | boolean | null | number | RegExp
    regex: ?{
      pattern: string,
      flags: string,
    },
  };
