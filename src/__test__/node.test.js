'use strict';

const Node = require('../lib/node');

describe('node.js', () => {
  test('default constructor', () => {
    const node = new Node('test1');

    expect(node.value).toEqual('test1');
    expect(node.next).toBeNull();
  });
});
