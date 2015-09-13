/**
 * @flow
 */

'use strict';

// Proof of concept for building comprehensive Flow
// types for the Javascript AST.

export type Comment = {
  type: "Line";
  _Line: void;
  value: string;
  leading: boolean;
  trailing: boolean;
} | {
  type: "Block";
  _Block: void;
  value: string;
  leading: boolean;
  trailing: boolean;
};

export type Line = {
  type: "Line";
  _Line: void;
  value: string;
  leading: boolean;
  trailing: boolean;
};

export type Block = {
  type: "Block";
  _Block: void;
  value: string;
  leading: boolean;
  trailing: boolean;
};

// Base types.

export type Node = {
  type: "File";
  _File: void;
  program: Program;
  comments: ?Array<Comment>;
} | {
  type: "Program";
  _Program: void;
  body: Array<Statement>;
  comments: ?Array<Comment>;
} | {
  type: "EmptyStatement";
  _EmptyStatement: void;
  comments: ?Array<Comment>;
} | {
  type: "BlockStatement";
  _BlockStatement: void;
  body: Array<Statement>;
  comments: ?Array<Comment>;
} | {
  type: "ExpressionStatement";
  _ExpressionStatement: void;
  expression: Expression;
  comments: ?Array<Comment>;
} | {
  type: "IfStatement";
  _IfStatement: void;
  test: Expression;
  consequent: Statement;
  alternate: ?Statement;
  comments: ?Array<Comment>;
} | {
  type: "LabeledStatement";
  _LabeledStatement: void;
  label: Identifier;
  body: Statement;
  comments: ?Array<Comment>;
} | {
  type: "BreakStatement";
  _BreakStatement: void;
  label: ?Identifier;
  comments: ?Array<Comment>;
} | {
  type: "ContinueStatement";
  _ContinueStatement: void;
  label: ?Identifier;
  comments: ?Array<Comment>;
} | {
  type: "WithStatement";
  _WithStatement: void;
  object: Expression;
  body: Statement;
  comments: ?Array<Comment>;
} | {
  type: "SwitchStatement";
  _SwitchStatement: void;
  discriminant: Expression;
  cases: Array<SwitchCase>;
  lexical: boolean;
  comments: ?Array<Comment>;
} | {
  type: "ReturnStatement";
  _ReturnStatement: void;
  argument: ?Expression;
  comments: ?Array<Comment>;
} | {
  type: "ThrowStatement";
  _ThrowStatement: void;
  argument: Expression;
  comments: ?Array<Comment>;
} | {
  type: "TryStatement";
  _TryStatement: void;
  block: BlockStatement;
  handler: ?CatchClause;
  handlers: ?Array<CatchClause>;
  guardedHandlers: Array<CatchClause>;
  finalizer: ?BlockStatement;
  comments: ?Array<Comment>;
} | {
  type: "CatchClause";
  _CatchClause: void;
  param: Pattern;
  guard: ?Expression;
  body: BlockStatement;
  comments: ?Array<Comment>;
} | {
  type: "WhileStatement";
  _WhileStatement: void;
  test: Expression;
  body: Statement;
  comments: ?Array<Comment>;
} | {
  type: "DoWhileStatement";
  _DoWhileStatement: void;
  body: Statement;
  test: Expression;
  comments: ?Array<Comment>;
} | {
  type: "ForStatement";
  _ForStatement: void;
  init: VariableDeclaration | Expression | ?void;
  test: ?Expression;
  update: ?Expression;
  body: Statement;
  comments: ?Array<Comment>;
} | {
  type: "ForInStatement";
  _ForInStatement: void;
  left: VariableDeclaration | Expression;
  right: Expression;
  body: Statement;
  comments: ?Array<Comment>;
} | {
  type: "DebuggerStatement";
  _DebuggerStatement: void;
  comments: ?Array<Comment>;
} | {
  type: "FunctionDeclaration";
  _FunctionDeclaration: void;
  id: Identifier;
  params: Array<Pattern>;
  body: BlockStatement;
  comments: ?Array<Comment>;
} | {
  type: "FunctionExpression";
  _FunctionExpression: void;
  id: ?Identifier;
  params: Array<Pattern>;
  body: BlockStatement;
  comments: ?Array<Comment>;
} | {
  type: "VariableDeclaration";
  _VariableDeclaration: void;
  kind: 'var' | 'let' | 'const';
  declarations: Array<VariableDeclarator>;
  comments: ?Array<Comment>;
} | {
  type: "VariableDeclarator";
  _VariableDeclarator: void;
  id: Pattern;
  init: ?Expression;
  comments: ?Array<Comment>;
} | {
  type: "ThisExpression";
  _ThisExpression: void;
  comments: ?Array<Comment>;
} | {
  type: "ArrayExpression";
  _ArrayExpression: void;
  elements: Array<?Expression>;
  comments: ?Array<Comment>;
} | {
  type: "ObjectExpression";
  _ObjectExpression: void;
  properties: Array<Property>;
  comments: ?Array<Comment>;
} | {
  type: "Property";
  _Property: void;
  kind: 'init' | 'get' | 'set';
  key: Literal | Identifier;
  value: Expression;
  comments: ?Array<Comment>;
} | {
  type: "SequenceExpression";
  _SequenceExpression: void;
  expression: Array<Expression>;
  comments: ?Array<Comment>;
} | {
  type: "UnaryExpression";
  _UnaryExpression: void;
  operator: '-' | '+' | '!' | '~' | 'typeof' | 'void' | 'delete';
  argument: Expression;
  prefix: true;
  comments: ?Array<Comment>;
} | {
  type: "BinaryExpression";
  _BinaryExpression: void;
  operator: '==' |
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
  '..';
  left: Expression;
  right: Expression;
  comments: ?Array<Comment>;
} | {
  type: "AssignmentExpression";
  _AssignmentExpression: void;
  operator: '=' |
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
  '&=';
  left: Pattern;
  right: Expression;
  comments: ?Array<Comment>;
} | {
  type: "UpdateExpression";
  _UpdateExpression: void;
  operator: '++' | '--';
  argument: Expression;
  prefix: boolean;
  comments: ?Array<Comment>;
} | {
  type: "LogicalExpression";
  _LogicalExpression: void;
  operator: '||' | '&&';
  left: Expression;
  right: Expression;
  comments: ?Array<Comment>;
} | {
  type: "ConditionalExpression";
  _ConditionalExpression: void;
  test: Expression;
  consequent: Expression;
  alternate: Expression;
  comments: ?Array<Comment>;
} | {
  type: "NewExpression";
  _NewExpression: void;
  callee: Expression;
  arguments: Array<Expression>;
  comments: ?Array<Comment>;
} | {
  type: "CallExpression";
  _CallExpression: void;
  callee: Expression;
  arguments: Array<Expression>;
  comments: ?Array<Comment>;
} | {
  type: "MemberExpression";
  _MemberExpression: void;
  object: Expression;
  property: Identifier | Expression;
  computed: boolean;
  comments: ?Array<Comment>;
} | {
  type: "SwitchCase";
  _SwitchCase: void;
  test: ?Expression;
  consequent: Array<Statement>;
  comments: ?Array<Comment>;
} | {
  type: "Identifier";
  _Identifier: void;
  name: string;
  comments: ?Array<Comment>;
} | {
  type: "Literal";
  _Literal: void;
  value: string | boolean | ?void | number | RegExp;
  regex: ?{
    pattern: string,
    flags: string,
  };
  comments: ?Array<Comment>;
};

export type Pattern = {
  type: "FunctionExpression";
  _FunctionExpression: void;
  id: ?Identifier;
  params: Array<Pattern>;
  body: BlockStatement;
  comments: ?Array<Comment>;
} | {
  type: "ThisExpression";
  _ThisExpression: void;
  comments: ?Array<Comment>;
} | {
  type: "ArrayExpression";
  _ArrayExpression: void;
  elements: Array<?Expression>;
  comments: ?Array<Comment>;
} | {
  type: "ObjectExpression";
  _ObjectExpression: void;
  properties: Array<Property>;
  comments: ?Array<Comment>;
} | {
  type: "SequenceExpression";
  _SequenceExpression: void;
  expression: Array<Expression>;
  comments: ?Array<Comment>;
} | {
  type: "UnaryExpression";
  _UnaryExpression: void;
  operator: '-' | '+' | '!' | '~' | 'typeof' | 'void' | 'delete';
  argument: Expression;
  prefix: true;
  comments: ?Array<Comment>;
} | {
  type: "BinaryExpression";
  _BinaryExpression: void;
  operator: '==' |
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
  '..';
  left: Expression;
  right: Expression;
  comments: ?Array<Comment>;
} | {
  type: "AssignmentExpression";
  _AssignmentExpression: void;
  operator: '=' |
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
  '&=';
  left: Pattern;
  right: Expression;
  comments: ?Array<Comment>;
} | {
  type: "UpdateExpression";
  _UpdateExpression: void;
  operator: '++' | '--';
  argument: Expression;
  prefix: boolean;
  comments: ?Array<Comment>;
} | {
  type: "LogicalExpression";
  _LogicalExpression: void;
  operator: '||' | '&&';
  left: Expression;
  right: Expression;
  comments: ?Array<Comment>;
} | {
  type: "ConditionalExpression";
  _ConditionalExpression: void;
  test: Expression;
  consequent: Expression;
  alternate: Expression;
  comments: ?Array<Comment>;
} | {
  type: "NewExpression";
  _NewExpression: void;
  callee: Expression;
  arguments: Array<Expression>;
  comments: ?Array<Comment>;
} | {
  type: "CallExpression";
  _CallExpression: void;
  callee: Expression;
  arguments: Array<Expression>;
  comments: ?Array<Comment>;
} | {
  type: "MemberExpression";
  _MemberExpression: void;
  object: Expression;
  property: Identifier | Expression;
  computed: boolean;
  comments: ?Array<Comment>;
} | {
  type: "Identifier";
  _Identifier: void;
  name: string;
  comments: ?Array<Comment>;
} | {
  type: "Literal";
  _Literal: void;
  value: string | boolean | ?void | number | RegExp;
  regex: ?{
    pattern: string,
    flags: string,
  };
  comments: ?Array<Comment>;
};

export type Statement = {
  type: "EmptyStatement";
  _EmptyStatement: void;
  comments: ?Array<Comment>;
} | {
  type: "BlockStatement";
  _BlockStatement: void;
  body: Array<Statement>;
  comments: ?Array<Comment>;
} | {
  type: "ExpressionStatement";
  _ExpressionStatement: void;
  expression: Expression;
  comments: ?Array<Comment>;
} | {
  type: "IfStatement";
  _IfStatement: void;
  test: Expression;
  consequent: Statement;
  alternate: ?Statement;
  comments: ?Array<Comment>;
} | {
  type: "LabeledStatement";
  _LabeledStatement: void;
  label: Identifier;
  body: Statement;
  comments: ?Array<Comment>;
} | {
  type: "BreakStatement";
  _BreakStatement: void;
  label: ?Identifier;
  comments: ?Array<Comment>;
} | {
  type: "ContinueStatement";
  _ContinueStatement: void;
  label: ?Identifier;
  comments: ?Array<Comment>;
} | {
  type: "WithStatement";
  _WithStatement: void;
  object: Expression;
  body: Statement;
  comments: ?Array<Comment>;
} | {
  type: "SwitchStatement";
  _SwitchStatement: void;
  discriminant: Expression;
  cases: Array<SwitchCase>;
  lexical: boolean;
  comments: ?Array<Comment>;
} | {
  type: "ReturnStatement";
  _ReturnStatement: void;
  argument: ?Expression;
  comments: ?Array<Comment>;
} | {
  type: "ThrowStatement";
  _ThrowStatement: void;
  argument: Expression;
  comments: ?Array<Comment>;
} | {
  type: "TryStatement";
  _TryStatement: void;
  block: BlockStatement;
  handler: ?CatchClause;
  handlers: ?Array<CatchClause>;
  guardedHandlers: Array<CatchClause>;
  finalizer: ?BlockStatement;
  comments: ?Array<Comment>;
} | {
  type: "WhileStatement";
  _WhileStatement: void;
  test: Expression;
  body: Statement;
  comments: ?Array<Comment>;
} | {
  type: "DoWhileStatement";
  _DoWhileStatement: void;
  body: Statement;
  test: Expression;
  comments: ?Array<Comment>;
} | {
  type: "ForStatement";
  _ForStatement: void;
  init: VariableDeclaration | Expression | ?void;
  test: ?Expression;
  update: ?Expression;
  body: Statement;
  comments: ?Array<Comment>;
} | {
  type: "ForInStatement";
  _ForInStatement: void;
  left: VariableDeclaration | Expression;
  right: Expression;
  body: Statement;
  comments: ?Array<Comment>;
} | {
  type: "DebuggerStatement";
  _DebuggerStatement: void;
  comments: ?Array<Comment>;
} | {
  type: "FunctionDeclaration";
  _FunctionDeclaration: void;
  id: Identifier;
  params: Array<Pattern>;
  body: BlockStatement;
  comments: ?Array<Comment>;
} | {
  type: "VariableDeclaration";
  _VariableDeclaration: void;
  kind: 'var' | 'let' | 'const';
  declarations: Array<VariableDeclarator>;
  comments: ?Array<Comment>;
};

export type Expression = {
  type: "FunctionExpression";
  _FunctionExpression: void;
  id: ?Identifier;
  params: Array<Pattern>;
  body: BlockStatement;
  comments: ?Array<Comment>;
} | {
  type: "ThisExpression";
  _ThisExpression: void;
  comments: ?Array<Comment>;
} | {
  type: "ArrayExpression";
  _ArrayExpression: void;
  elements: Array<?Expression>;
  comments: ?Array<Comment>;
} | {
  type: "ObjectExpression";
  _ObjectExpression: void;
  properties: Array<Property>;
  comments: ?Array<Comment>;
} | {
  type: "SequenceExpression";
  _SequenceExpression: void;
  expression: Array<Expression>;
  comments: ?Array<Comment>;
} | {
  type: "UnaryExpression";
  _UnaryExpression: void;
  operator: '-' | '+' | '!' | '~' | 'typeof' | 'void' | 'delete';
  argument: Expression;
  prefix: true;
  comments: ?Array<Comment>;
} | {
  type: "BinaryExpression";
  _BinaryExpression: void;
  operator: '==' |
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
  '..';
  left: Expression;
  right: Expression;
  comments: ?Array<Comment>;
} | {
  type: "AssignmentExpression";
  _AssignmentExpression: void;
  operator: '=' |
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
  '&=';
  left: Pattern;
  right: Expression;
  comments: ?Array<Comment>;
} | {
  type: "UpdateExpression";
  _UpdateExpression: void;
  operator: '++' | '--';
  argument: Expression;
  prefix: boolean;
  comments: ?Array<Comment>;
} | {
  type: "LogicalExpression";
  _LogicalExpression: void;
  operator: '||' | '&&';
  left: Expression;
  right: Expression;
  comments: ?Array<Comment>;
} | {
  type: "ConditionalExpression";
  _ConditionalExpression: void;
  test: Expression;
  consequent: Expression;
  alternate: Expression;
  comments: ?Array<Comment>;
} | {
  type: "NewExpression";
  _NewExpression: void;
  callee: Expression;
  arguments: Array<Expression>;
  comments: ?Array<Comment>;
} | {
  type: "CallExpression";
  _CallExpression: void;
  callee: Expression;
  arguments: Array<Expression>;
  comments: ?Array<Comment>;
} | {
  type: "MemberExpression";
  _MemberExpression: void;
  object: Expression;
  property: Identifier | Expression;
  computed: boolean;
  comments: ?Array<Comment>;
} | {
  type: "Identifier";
  _Identifier: void;
  name: string;
  comments: ?Array<Comment>;
} | {
  type: "Literal";
  _Literal: void;
  value: string | boolean | ?void | number | RegExp;
  regex: ?{
    pattern: string,
    flags: string,
  };
  comments: ?Array<Comment>;
};

export type Function = {
  type: "FunctionDeclaration";
  _FunctionDeclaration: void;
  id: Identifier;
  params: Array<Pattern>;
  body: BlockStatement;
  comments: ?Array<Comment>;
} | {
  type: "FunctionExpression";
  _FunctionExpression: void;
  id: ?Identifier;
  params: Array<Pattern>;
  body: BlockStatement;
  comments: ?Array<Comment>;
};

export type Declaration = {
  type: "FunctionDeclaration";
  _FunctionDeclaration: void;
  id: Identifier;
  params: Array<Pattern>;
  body: BlockStatement;
  comments: ?Array<Comment>;
} | {
  type: "VariableDeclaration";
  _VariableDeclaration: void;
  kind: 'var' | 'let' | 'const';
  declarations: Array<VariableDeclarator>;
  comments: ?Array<Comment>;
};

// Concrete types.

export type File = {
  type: "File";
  _File: void;
  program: Program;
  comments: ?Array<Comment>;
};

export type Program = {
  type: "Program";
  _Program: void;
  body: Array<Statement>;
  comments: ?Array<Comment>;
};

export type EmptyStatement = {
  type: "EmptyStatement";
  _EmptyStatement: void;
  comments: ?Array<Comment>;
};

export type BlockStatement = {
  type: "BlockStatement";
  _BlockStatement: void;
  body: Array<Statement>;
  comments: ?Array<Comment>;
};

export type ExpressionStatement = {
  type: "ExpressionStatement";
  _ExpressionStatement: void;
  expression: Expression;
  comments: ?Array<Comment>;
};

export type IfStatement = {
  type: "IfStatement";
  _IfStatement: void;
  test: Expression;
  consequent: Statement;
  alternate: ?Statement;
  comments: ?Array<Comment>;
};

export type LabeledStatement = {
  type: "LabeledStatement";
  _LabeledStatement: void;
  label: Identifier;
  body: Statement;
  comments: ?Array<Comment>;
};

export type BreakStatement = {
  type: "BreakStatement";
  _BreakStatement: void;
  label: ?Identifier;
  comments: ?Array<Comment>;
};

export type ContinueStatement = {
  type: "ContinueStatement";
  _ContinueStatement: void;
  label: ?Identifier;
  comments: ?Array<Comment>;
};

export type WithStatement = {
  type: "WithStatement";
  _WithStatement: void;
  object: Expression;
  body: Statement;
  comments: ?Array<Comment>;
};

export type SwitchStatement = {
  type: "SwitchStatement";
  _SwitchStatement: void;
  discriminant: Expression;
  cases: Array<SwitchCase>;
  lexical: boolean;
  comments: ?Array<Comment>;
};

export type ReturnStatement = {
  type: "ReturnStatement";
  _ReturnStatement: void;
  argument: ?Expression;
  comments: ?Array<Comment>;
};

export type ThrowStatement = {
  type: "ThrowStatement";
  _ThrowStatement: void;
  argument: Expression;
  comments: ?Array<Comment>;
};

export type TryStatement = {
  type: "TryStatement";
  _TryStatement: void;
  block: BlockStatement;
  handler: ?CatchClause;
  handlers: ?Array<CatchClause>;
  guardedHandlers: Array<CatchClause>;
  finalizer: ?BlockStatement;
  comments: ?Array<Comment>;
};

export type CatchClause = {
  type: "CatchClause";
  _CatchClause: void;
  param: Pattern;
  guard: ?Expression;
  body: BlockStatement;
  comments: ?Array<Comment>;
};

export type WhileStatement = {
  type: "WhileStatement";
  _WhileStatement: void;
  test: Expression;
  body: Statement;
  comments: ?Array<Comment>;
};

export type DoWhileStatement = {
  type: "DoWhileStatement";
  _DoWhileStatement: void;
  body: Statement;
  test: Expression;
  comments: ?Array<Comment>;
};

export type ForStatement = {
  type: "ForStatement";
  _ForStatement: void;
  init: VariableDeclaration | Expression | ?void;
  test: ?Expression;
  update: ?Expression;
  body: Statement;
  comments: ?Array<Comment>;
};

export type ForInStatement = {
  type: "ForInStatement";
  _ForInStatement: void;
  left: VariableDeclaration | Expression;
  right: Expression;
  body: Statement;
  comments: ?Array<Comment>;
};

export type DebuggerStatement = {
  type: "DebuggerStatement";
  _DebuggerStatement: void;
  comments: ?Array<Comment>;
};

export type FunctionDeclaration = {
  type: "FunctionDeclaration";
  _FunctionDeclaration: void;
  id: Identifier;
  params: Array<Pattern>;
  body: BlockStatement;
  comments: ?Array<Comment>;
};

export type FunctionExpression = {
  type: "FunctionExpression";
  _FunctionExpression: void;
  id: ?Identifier;
  params: Array<Pattern>;
  body: BlockStatement;
  comments: ?Array<Comment>;
};

export type VariableDeclaration = {
  type: "VariableDeclaration";
  _VariableDeclaration: void;
  kind: 'var' | 'let' | 'const';
  declarations: Array<VariableDeclarator>;
  comments: ?Array<Comment>;
};

export type VariableDeclarator = {
  type: "VariableDeclarator";
  _VariableDeclarator: void;
  id: Pattern;
  init: ?Expression;
  comments: ?Array<Comment>;
};

export type ThisExpression = {
  type: "ThisExpression";
  _ThisExpression: void;
  comments: ?Array<Comment>;
};

export type ArrayExpression = {
  type: "ArrayExpression";
  _ArrayExpression: void;
  elements: Array<?Expression>;
  comments: ?Array<Comment>;
};

export type ObjectExpression = {
  type: "ObjectExpression";
  _ObjectExpression: void;
  properties: Array<Property>;
  comments: ?Array<Comment>;
};

export type Property = {
  type: "Property";
  _Property: void;
  kind: 'init' | 'get' | 'set';
  key: Literal | Identifier;
  value: Expression;
  comments: ?Array<Comment>;
};

export type SequenceExpression = {
  type: "SequenceExpression";
  _SequenceExpression: void;
  expression: Array<Expression>;
  comments: ?Array<Comment>;
};

export type UnaryExpression = {
  type: "UnaryExpression";
  _UnaryExpression: void;
  operator: '-' | '+' | '!' | '~' | 'typeof' | 'void' | 'delete';
  argument: Expression;
  prefix: true;
  comments: ?Array<Comment>;
};

export type BinaryExpression = {
  type: "BinaryExpression";
  _BinaryExpression: void;
  operator: '==' |
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
  '..';
  left: Expression;
  right: Expression;
  comments: ?Array<Comment>;
};

export type AssignmentExpression = {
  type: "AssignmentExpression";
  _AssignmentExpression: void;
  operator: '=' |
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
  '&=';
  left: Pattern;
  right: Expression;
  comments: ?Array<Comment>;
};

export type UpdateExpression = {
  type: "UpdateExpression";
  _UpdateExpression: void;
  operator: '++' | '--';
  argument: Expression;
  prefix: boolean;
  comments: ?Array<Comment>;
};

export type LogicalExpression = {
  type: "LogicalExpression";
  _LogicalExpression: void;
  operator: '||' | '&&';
  left: Expression;
  right: Expression;
  comments: ?Array<Comment>;
};

export type ConditionalExpression = {
  type: "ConditionalExpression";
  _ConditionalExpression: void;
  test: Expression;
  consequent: Expression;
  alternate: Expression;
  comments: ?Array<Comment>;
};

export type NewExpression = {
  type: "NewExpression";
  _NewExpression: void;
  callee: Expression;
  arguments: Array<Expression>;
  comments: ?Array<Comment>;
};

export type CallExpression = {
  type: "CallExpression";
  _CallExpression: void;
  callee: Expression;
  arguments: Array<Expression>;
  comments: ?Array<Comment>;
};

export type MemberExpression = {
  type: "MemberExpression";
  _MemberExpression: void;
  object: Expression;
  property: Identifier | Expression;
  computed: boolean;
  comments: ?Array<Comment>;
};

export type SwitchCase = {
  type: "SwitchCase";
  _SwitchCase: void;
  test: ?Expression;
  consequent: Array<Statement>;
  comments: ?Array<Comment>;
};

export type Identifier = {
  type: "Identifier";
  _Identifier: void;
  name: string;
  comments: ?Array<Comment>;
};

export type Literal = {
  type: "Literal";
  _Literal: void;
  value: string | boolean | ?void | number | RegExp;
  regex: ?{
    pattern: string,
    flags: string,
  };
  comments: ?Array<Comment>;
};
