// const heap = require('../src/heapAPI.ts')
import {heap} from '../src/heapAPI'
  
describe("General class tests", () => {
  
  test("init empty heap", () => {
    const test_heap = new heap();
    expect(test_heap.data.length).toBe(0)
})

test("init a loaded heap", () => {
  const test_heap = new heap([1, 2, 3 ,4 ,5]);
  expect(test_heap.data.length).toBe(5)
}) 

test("measuring length of loaded heap", () => {
  const test_heap = new heap([1, 2, 3 ,4 ,5]);
  let len = test_heap.len();
  expect(len).toBe(5)
}) 

})

describe("Heap navigation tests", () => {
  test("node parent", () => {
    const test_heap = new heap([1, 2, 3 ,4 ,5]);
    let index = 2;
    let parent = test_heap.parent(index);
    expect(parent).toBe(0);
  })

  test("node left", () => {
    const test_heap = new heap([1, 2, 3 ,4 ,5]);
    let left : number = test_heap.left(2);
    expect(left).toBe(5);
  })
  
  test("node right", () => {
    const test_heap = new heap([1, 2, 3 ,4 ,5]);
    let right : number = test_heap.right(3);
    expect(right).toBe(8);
  })
    
  test("node has_left", () => {
    const test_heap = new heap([1, 2, 3 ,4 ,5]);
    let has_left : boolean = test_heap.has_left(1);
    expect(has_left).toBe(true);
  })
  
  test("node has_right", () => {
    const test_heap = new heap([1, 2, 3 ,4 ,5]);
    let has_right : boolean = test_heap.has_right(1);
    expect(has_right).toBe(true);
  })
  
 })

 //TO Implement
/*
describe("Heap array manipulation tests", () => {
  test("TBD", () => {
    //AAA
}) 

  Missing tests
  1. swap 
  2. uphead
  3. downheap 
  4. add

})

describe("Heap query operantion tests", () => {
  test("TBD", () => {
    //AAA
}) 

  Missing tests
  1. min
  2. remove_min
  3. is_empty
  
})

*/