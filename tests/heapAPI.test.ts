// const heap = require('../src/heapAPI.ts')
import {heap} from '../src/heapAPI'
  
describe("General class tests", () => {
  test("init empty heap", () => {
    const test_heap = new heap();
    expect(test_heap.data.length).toBe(0)
}) 
/*
  Missing tests
  1. init passing an array. 
  2. __len__ 
*/

})

/*
//TO IMPLEMENT
describe("Heap navigation tests", () => {
  test("TBD", () => {
    1. parent
    2. left
    3. right
    4. has_left
    5. has_right

}) })




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