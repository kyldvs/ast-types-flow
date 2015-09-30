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

// --babel
export type CommentLine = {
  // extends Comment
};

// --babel
export type CommentBlock = {
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
  defaults: Array<?Expression>,
  rest: ?Identifier,

  // --es7
  async: boolean,

  // --flow
  returnType: ?TypeAnnotation,
  typeParameters: ?TypeParameterDeclaration,
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
  init: ?(VariableDeclaration | Expression),
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
  id: ?Identifier,
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
  elements: Array<?(Expression | SpreadElement | RestElement)>,
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
  elements: Array<?Pattern>,
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

  // --flow
  typeAnnotation: TypeAnnotation,
};

export type Literal = {
  // extends Node, Expression
  value: ?(string | boolean | number | RegExp),
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
type ClassBodyElement
  = MethodDefinition
  | VariableDeclarator
  | ClassPropertyDefinition
  | ClassProperty;

// --es6
export type ClassProperty = {
  // extends Declaration
  key: Literal | Identifier | Expression,
  computed: boolean,

  // --flow
  value: ?Expression,
  typeAnnotation: ?TypeAnnotation,
  static: boolean,
};

// Static property
// --es6
export type ClassPropertyDefinition = {
  // extends Declaration
  definition: ClassBodyElement,
};

// --es6
export type ClassBody = {
  // extends Declaration
  body: Array<ClassBodyElement>,
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
  // TODO: Recast parse error.
  // 'implements': Array<ClassImplements>,
};

// --es6
export type ClassImplements = {
  // extends Node
  id: Identifier,
  superClass: ?Expression,

  // --flow
  typeParameters: ?TypeParameterInstantiation,
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

// --jsx
export type JSXAttribute = {
  // extends Node
  name: JSXIdentifier | JSXNamespacedName,
  value: ?(Literal | JSXExpressionContainer),
};

// --jsx
export type JSXSpreadAttribute = {
  // extends Node
  argument: Expression,
};

// --jsx
export type JSXIdentifier = {
  // extends Node
  // TODO: Is extending Identifier okay?
  name: string,
};

// --jsx
export type JSXNamespacedName = {
  // extends Node
  namespace: JSXIdentifier,
  name: JSXIdentifier,
};

// --jsx
export type JSXMemberExpression = {
  // extends Expression
  // TODO: Is extending MemberExpression okay?
  object: JSXIdentifier | JSXMemberExpression,
  property: JSXIdentifier,
  computed: boolean,
};

// --jsx
export type JSXExpressionContainer = {
  // extends Expression
  expression: Expression,
};

// --jsx
type JSXElementName = JSXIdentifier | JSXNamespacedName | JSXMemberExpression;

// --jsx
type JSXAttributes = Array<JSXAttribute | JSXSpreadAttribute>;

// --jsx
export type JSXElement = {
  // extends Expression
  openingElement: JSXOpeningElement,
  closingElement: ?JSXClosingElement,
  children:
    Array<
      JSXElement |
      JSXExpressionContainer |
      JSXText |
      Literal
    >,
  name: JSXElementName,
  selfClosing: boolean,
  attributes: JSXAttributes,
};

// --jsx
export type JSXOpeningElement = {
  // extends Node
  name: JSXElementName,
  attributes: JSXAttributes,
  selfClosing: boolean,
};

// --jsx
export type JSXClosingElement = {
  // extends Node
  name: JSXElementName,
};

// --jsx
export type JSXText = {
  // extends Node, Expression
  // TODO: Is extending literal okay?
  value: string,
};

// --jsx
export type JSXEmptyExpression = {
  // extends Expression
};

// --flow
export type Type = {
  // extends Node
};

// --flow
export type AnyTypeAnnotation = {
  // extends Type
};

// --flow
export type MixedTypeAnnotation = {
  // extends Type
};

// --flow
export type VoidTypeAnnotation = {
  // extends Type
};

// --flow
export type NumberTypeAnnotation = {
  // extends Type
};

// --flow
export type NumberLiteralTypeAnnotation = {
  // extends Type
  value: number,
  raw: string,
};

// --flow
export type StringTypeAnnotation = {
  // extends Type
};

// --flow
export type StringLiteralTypeAnnotation = {
  // extends Type
  value: string,
  raw: string,
};

// --flow
export type BooleanTypeAnnotation = {
  // extends Type
};

// --flow
export type BooleanLiteralTypeAnnotation = {
  // extends Type
  value: boolean,
  raw: string,
};

// --flow
export type TypeAnnotation = {
  // extends Node
  typeAnnotation: Type,
};

// --flow
export type NullableTypeAnnotation = {
  // extends Type
  // TODO: Should this extend Node?
  typeAnnotation: Type,
};

// --flow
export type FunctionTypeAnnotation = {
  // extends Type
  params: Array<FunctionTypeParam>,
  returnType: Type,
  rest: ?FunctionTypeParam,
  typeParameters: ?TypeParameterDeclaration,
};

// --flow
export type FunctionTypeParam = {
  // extends Node
  name: Identifier,
  typeAnnotation: Type,
  optional: boolean,
};

// --flow
export type ArrayTypeAnnotation = {
  // extends Type
  elementType: Type,
};

// --flow
export type ObjectTypeAnnotation = {
  // extends Type
  properties: Array<ObjectTypeProperty>,
  indexers: Array<ObjectTypeIndexer>,
  callProperties: Array<ObjectTypeCallProperty>,
};

// --flow
export type ObjectTypeProperty = {
  // extends Node
  key: Literal | Identifier,
  value: Type,
  optional: boolean,
};

// --flow
export type ObjectTypeIndexer = {
  // extends Node
  id: Identifier,
  key: Type,
  value: Type,
};

// --flow
export type ObjectTypeCallProperty = {
  // extends Node
  value: FunctionTypeAnnotation,
  static: boolean,
};

// --flow
export type QualifiedTypeIdentifier = {
  // extends Node
  qualification: Identifier | QualifiedTypeIdentifier,
  id: Identifier,
};

// --flow
export type GenericTypeAnnotation = {
  // extends Type
  id: Identifier | QualifiedTypeIdentifier,
  typeParameters: ?TypeParameterInstantiation,
};

// --flow
export type MemberTypeAnnotation = {
  // extends Type
  object: Identifier,
  property: MemberTypeAnnotation | GenericTypeAnnotation,
};

// --flow
export type UnionTypeAnnotation = {
  // extends Type
  types: Array<Type>,
};

// --flow
export type IntersectionTypeAnnotation = {
  // extends Type
  types: Array<Type>,
};

// --flow
export type TypeofTypeAnnotation = {
  // extends Type
  argument: Type,
};

// --flow
export type TypeParameterDeclaration = {
  // extends Node
  params: Array<Identifier>,
};

// --flow
export type TypeParameterInstantiation = {
  // extends Node
  params: Array<Type>,
};

// --flow
export type InterfaceDeclaration = {
  // extends Statement
  id: Identifier,
  typeParameters: ?TypeParameterDeclaration,
  body: ObjectTypeAnnotation,
  extends: Array<InterfaceExtends>,
};

// --flow
export type InterfaceExtends = {
  // extends Node
  id: Identifier,
  typeParameters: ?TypeParameterInstantiation,
};

// --flow
export type TypeAlias = {
  // extends Statement
  id: Identifier,
  typeParameters: ?TypeParameterDeclaration,
  right: Type,
};

// --flow
export type TypeCaseExpression = {
  // extends Expression
  expression: Expression,
  typeAnnotation: TypeAnnotation,
};

// --flow
export type TupleTypeAnnotation = {
  // extends Type
  types: Array<Type>,
};

// --flow
export type DeclareVariable = {
  // extends Statement
  id: Identifier,
};

// --flow
export type DeclareClass = {
  // extends Statement
  // TODO: Is it okay to extend InterfaceDeclaration?
  id: Identifier,
  typeParameters: ?TypeParameterDeclaration,
  body: ObjectTypeAnnotation,
  extends: Array<InterfaceExtends>,
};

// --flow
export type DeclareModule = {
  // extends Statement
  id: Identifier | Literal,
  body: BlockStatement,
};
