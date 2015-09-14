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

// --esprima
export type Line = {
  // extends Comment
};

// --esprima
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
  // body: BlockStatement, TODO: Can't properly override base types yet.

  // --es6
  generator: boolean,
  expression: boolean,
  defaults: Array<Expression | ?void>,
  rest: ?Identifier,

  // --es7
  async: boolean,
};

export type Declaration = {
  // extends Statement
};

// --es6
export type Specifier = {
  // extends Node
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
  body: BlockStatement,
};

export type FunctionExpression = {
  // extends Function, Expression
  id: ?Identifier,
  body: BlockStatement,
};

// --es6
export type ArrowFunctionExpression = {
  // extends Function, Expression
  id: ?void,
  body: BlockStatement | Expression,
  // TODO: generator: false,
};

// --es6
export type MethodDefinition = {
  // extends Declaration
  kind: 'constructor' | 'method' | 'get' | 'set',
  key: Literal | Identifier | Expression,
  value: Function,
  computed: boolean,
  static: boolean,
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
  // elements: Array<?Expression>, // TODO: Better overriding support.

  // --es6
  elements: Array<Expression | SpreadElement | RestElement | ?void>,
};

export type ObjectExpression = {
  // extends Expression
  // properties: Array<Property>, TODO: Better overriding support.

  // --es7
  properties: Array<Property | SpreadProperty>,
};

export type Property = {
  // extends Node
  kind: 'init' | 'get' | 'set',
  // key: Literal | Identifier, TODO: Better overriding support.
  // value: Expression, TODO: Better overriding support.

  // --es6
  key: Literal | Identifier | Expression,
  value: Expression | Pattern,
  method: boolean,
  shorthand: boolean,
  computed: boolean,
};

// --es6
export type PropertyPattern = {
  // extends Pattern
  key: Literal | Identifier | Expression,
  pattern: Pattern,
  computed: boolean,
};

// --es6
export type ObjectPattern = {
  // extends Pattern

  // TODO: Better overriding support.
  // properties: Array<PropertyPattern | Property>,

  // --es7
  properties: Array<PropertyPattern | Property | SpreadProperty>,
};

// --es6
export type ArrayPattern = {
  // extends Pattern
  elements: Array<Pattern | ?void>,
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
  // arguments: Array<Expression>, // TODO: Better overriding support.

  // --es6
  arguments: Array<Expression | SpreadElement>,
};

export type CallExpression = {
  // extends Expression
  callee: Expression,
  // arguments: Array<Expression>, // TODO: Better overriding support.

  // --es6
  arguments: Array<Expression | SpreadElement>,
};

export type MemberExpression = {
  // extends Expression
  object: Expression,
  property: Identifier | Expression,
  computed: boolean,
};

// --es6
export type YieldExpression = {
  // extends Expression
  argument: ?Expression,
  delegate: boolean,
};

// --es6
export type GeneratorExpression = {
  // extends Expression
  body: Expression,
  blocks: Array<ComprehensionBlock>,
  filter: ?Expression,
};

// --es6
export type ComprehensionExpression = {
  // extends Expression
  body: Expression,
  blocks: Array<ComprehensionBlock>,
  filter: ?Expression,
};

// --es6
export type ComprehensionBlock = {
  // extends Node
  left: Pattern,
  right: Expression,
  each: boolean,
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

// --es6, --estree
export type RestElement = {
  // extends Pattern
  argument: Pattern,
};

// --es6
export type SpreadElementPattern = {
  // extends Pattern
  argument: Pattern,
};

// --es6
export type SpreadElement = {
  // extends Node
  argument: Expression,
};

// Note: this node type is *not* an AssignmentExpression with a Pattern on
// the left-hand side! The existing AssignmentExpression type already
// supports destructuring assignments. AssignmentPattern nodes may appear
// wherever a Pattern is allowed, and the right-hand side represents a
// default value to be destructured against the left-hand side, if no
// value is otherwise provided. For example: default parameter values.
// --es6
export type AssignmentPattern = {
  // extends Pattern
  left: Pattern,
  right: Expression,
};

// --es6
export type ClassProperty = {
  // extends Declaration
  key: Literal | Identifier | Expression,
  computed: boolean,
};

// Static property
// --es6
export type ClassPropertyDefinition = {
  // extends Declaration
  definition:
    MethodDefinition |
    VariableDeclarator |
    ClassPropertyDefinition |
    ClassProperty,
};

// --es6
export type ClassBody = {
  // extends Declaration
  body:
    Array<
      MethodDefinition |
      VariableDeclarator |
      ClassPropertyDefinition |
      ClassProperty
    >,
};

// --es6
export type ClassDeclaration = {
  // extends Declaration
  id: ?Identifier,
  body: ClassBody,
  superClass: ?Expression,
};

// --es6
export type ClassExpression = {
  // extends Expression
  id: ?Identifier,
  body: ClassBody,
  superClass: ?Expression,
  // TODO: Flow bug, and a supression won't fix it.
  // implements: Array<ClassImplements>,
};

// --es6
export type ClassImplements = {
  // extends Node
  id: Identifier,
  superClass: ?Expression,
};

// --es6
export type ModuleSpecifier = {
  // extends Specifier
  local: ?Identifier, // Should be required in babel/acorn.
  id: ?Identifier, // Should be required in esprima.
  name: ?Identifier,
};

// --es6
export type TaggedTemplateExpression = {
  // extends Expression
  tag: Expression,
  quasi: TemplateLiteral,
};

// --es6
export type TemplateLiteral = {
  // extends Expression
  quasis: Array<TemplateElement>,
  expressions: Array<Expression>,
};

// --es6
export type TemplateElement = {
  // extends Node
  value: {
    cooked: string,
    raw: string,
  },
  tail: boolean,
};

// --es7
export type SpreadProperty = {
  // extends Node
  argument: Expression,
};

// --es7
export type SpreadPropertyPattern = {
  // extends Pattern
  argument: Pattern,
};

// --es7
export type AwaitExpression = {
  // extends Expression
  argument: ?Expression,
  all: boolean,
};
