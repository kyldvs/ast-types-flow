/**
 * @flow
 */

'use strict';

// Proof of concept for building comprehensive Flow
// types for the Javascript AST.

export type Comment = {
  value: string,
  leading: boolean,
  trailing: boolean,
};

export type Line = {
	// extends Comment
};

export type Block = {
  // extends Comment
};

// Base types.

export type Node = {
  comments: ?Array<Comment>,
};

export type Pattern = {
  // extends Node
};

export type Statement = {
  // extends Node
};

export type Expression = {
  // extends Node, Pattern
};

export type Function = {
  // extends Node
  // id: ?Identifier, TODO: Can't properly override base types yet.
  params: Array<Pattern>,
  body: BlockStatement,
};

export type Declaration = {
  // extends Statement
};

// Concrete types.

export type File = {
  // extends Node
  program: Program,
};

export type Program = {
  // extends Node
  body: Array<Statement>,
};

export type EmptyStatement = {
  // extends Statement
};

export type BlockStatement = {
  // extends Statement
  body: Array<Statement>,
};

export type ExpressionStatement = {
  // extends Statement
  expression: Expression,
};

export type IfStatement = {
  // extends Statement
  test: Expression,
  consequent: Statement,
  alternate: ?Statement,
};

export type LabeledStatement = {
  // extends Statement
  label: Identifier,
  body: Statement,
};

export type BreakStatement = {
  // extends Statement
  label: ?Identifier,
};

export type ContinueStatement = {
  // extends Statement
  label: ?Identifier,
};

export type WithStatement = {
  // extends Statement
  object: Expression,
  body: Statement,
};

export type SwitchStatement = {
  // extends Statement
  discriminant: Expression,
  cases: Array<SwitchCase>,
  lexical: boolean,
};

export type ReturnStatement = {
  // extends Statement
  argument: ?Expression,
};

export type ThrowStatement = {
  // extends Statement
  argument: Expression,
};

export type TryStatement = {
  // extends Statement
  block: BlockStatement,
  handler: ?CatchClause,
  handlers: ?Array<CatchClause>,
  guardedHandlers: Array<CatchClause>,
  finalizer: ?BlockStatement,
};

export type CatchClause = {
  // extends Node
  param: Pattern,
  guard: ?Expression,
  body: BlockStatement,
};

export type WhileStatement = {
  // extends Statement
  test: Expression,
  body: Statement,
};

export type DoWhileStatement = {
  // extends Statement
  body: Statement,
  test: Expression,
};

export type ForStatement = {
  // extends Statement
  init: VariableDeclaration | Expression | ?void,
  test: ?Expression,
  update: ?Expression,
  body: Statement,
};

export type ForInStatement = {
  // extends Statement
  left: VariableDeclaration | Expression,
  right: Expression,
  body: Statement,
};

export type DebuggerStatement = {
  // extends Statement
};

export type FunctionDeclaration = {
  // extends Function, Declaration
  id: Identifier,
};

export type FunctionExpression = {
  // extends Function, Expression
  id: ?Identifier,
};

export type VariableDeclaration = {
  // extends Declaration
  kind: 'var' | 'let' | 'const',
  declarations: Array<VariableDeclarator>,
};

export type VariableDeclarator = {
  // extends Node
  id: Pattern,
  init: ?Expression,
};

export type ThisExpression = {
  // extends Expression
};

export type ArrayExpression = {
  // extends Expression
  elements: Array<?Expression>,
};

export type ObjectExpression = {
  // extends Expression
  properties: Array<Property>,
};

export type Property = {
  // extends Node
  kind: 'init' | 'get' | 'set',
  key: Literal | Identifier,
  value: Expression,
};

export type SequenceExpression = {
  // extends Expression
  expression: Array<Expression>,
};

export type UnaryExpression = {
  // extends Expression
  operator: '-' | '+' | '!' | '~' | 'typeof' | 'void' | 'delete',
  argument: Expression,
  prefix: true,
};

export type BinaryExpression = {
  // extends Expression
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
  left: Expression,
  right: Expression,
};

export type AssignmentExpression = {
  // extends Expression
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
  left: Pattern,
  right: Expression,
};

export type UpdateExpression = {
  // extends Expression
  operator: '++' | '--',
  argument: Expression,
  prefix: boolean,
};

export type LogicalExpression = {
  // extends Expression
  operator: '||' | '&&',
  left: Expression,
  right: Expression,
};

export type ConditionalExpression = {
  // extends Expression
  test: Expression,
  consequent: Expression,
  alternate: Expression,
};

export type NewExpression = {
  // extends Expression
  callee: Expression,
  arguments: Array<Expression>,
};

export type CallExpression = {
  // extends Expression
  callee: Expression,
  arguments: Array<Expression>,
};

export type MemberExpression = {
  // extends Expression
  object: Expression,
  property: Identifier | Expression,
  computed: boolean,
};

export type SwitchCase = {
  // extends Node
  test: ?Expression,
  consequent: Array<Statement>,
};

export type Identifier = {
  // extends Node, Expression, Pattern
  name: string,
};

export type Literal = {
  // extends Node, Expression
  value: string | boolean | ?void | number | RegExp,
  regex: ?{
    pattern: string,
    flags: string,
  },
};
