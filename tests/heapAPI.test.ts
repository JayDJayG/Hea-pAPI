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


//TO IMPLEMENT
describe("Heap navigation tests", () => {
  test("node parent", () => {
    const test_heap = new heap([1, 2, 3 ,4 ,5]);
    let index = 2;
    parent = test_heap._parent(index);
    expect(parent).toBe(1);  

  })
  test("node left", () => {
    const test_heap = new heap([1, 2, 3 ,4 ,5]);
    let left : number = test_heap.left(2);
    expect(left).toBe(5);
  })
  
  /*
    1. parent
    2. left
    3. right
    4. has_left
    5. has_right
    */
 })

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