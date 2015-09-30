/**
 * @flow
 */

'use strict';

import type {Node} from '../lib/types';

function print(node: Node): Array<string> {
  if (node.type === 'File') {
    return print(node.program);
  }
  if (node.type === 'Program') {
    node.body.forEach(statement => {
      print(statement);
    });
  }
  return [];
}
