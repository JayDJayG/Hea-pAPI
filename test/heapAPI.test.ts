// const heap = require('../src/heapAPI.ts')
import {sum, heap} from '../src/heapAPI'

test('two plus two is four', () => {
    let value = sum(2, 2)
    expect(value).toBe(4);
  });

test("init empty heap", () => {
    const test_heap = new heap();
    expect(test_heap.data.length).toBe(0)
})
