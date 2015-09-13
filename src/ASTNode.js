/**
 * @flow
 */

'use strict';

export type Program = {
  type: 'Program',
  body: Array<Node>,
};

export type File = {
  type: 'File',
  program: Program,
};

export type Node =
  File |
  Program;
