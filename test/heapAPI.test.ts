// const heap = require('../src/heapAPI.ts')
import {sum} from '../src/heapAPI'

test('two plus two is four', () => {
    let value = sum(2, 2)
    expect(value).toBe(4);
  });