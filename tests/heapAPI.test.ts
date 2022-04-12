// const heap = require('../src/heapAPI.ts')
import { heap } from '../src/heapAPI'

describe("General class tests", () => {

  test("init empty heap", () => {
    const test_heap = new heap();
    expect(test_heap.data.length).toBe(0)
  })

  test("init a loaded heap", () => {
    const test_heap = new heap([1, 2, 3, 4, 5]);
    expect(test_heap.data.length).toBe(5)
  })

  test("measuring length of loaded heap", () => {
    const test_heap = new heap([1, 2, 3, 4, 5]);
    let len = test_heap.len();
    expect(len).toBe(5)
  })

})

describe("Heap navigation tests", () => {
  test("node parent", () => {
    const test_heap = new heap([1, 2, 3, 4, 5]);
    let index = 2;
    let parent = test_heap.parent(index);
    expect(parent).toBe(0);

  })

  test("node left", () => {
    const test_heap = new heap([1, 2, 3, 4, 5]);
    let left: number = test_heap.left(2);
    expect(left).toBe(5);
  })

  test("node right", () => {
    const test_heap = new heap([1, 2, 3, 4, 5]);
    let right: number = test_heap.right(3);
    expect(right).toBe(8);
  })

  test("node has_left", () => {
    const test_heap = new heap([1, 2, 3, 4, 5]);
    let has_left: boolean = test_heap.has_left(1);
    expect(has_left).toBe(true);
  })

  test("node has_right", () => {
    const test_heap = new heap([1, 2, 3, 4, 5]);
    let has_right: boolean = test_heap.has_right(1);
    expect(has_right).toBe(true);
  })

  test("get root node on an empty heap", () => {
    const test_heap = new heap([]);
    expect(() => { test_heap.root(); }).toThrow();
  })

})



//TO Implement

describe("Heap array manipulation tests", () => {

  test("Swap nodes", () => {
    const test_heap: heap = new heap([1, 2, 3, 4, 5]);
    console.log(test_heap.data.toString());
    let swappedString: string = "2,1,3,4,5";
    test_heap.swap(0, 1);
    expect(swappedString).toEqual(test_heap.data.toString());
  })

  test("Upheap - move node up", () => {
    let test_heap: heap = new heap([5,3,4,2,1]);
    test_heap.up_heap(4);
    expect(test_heap.data[0]).toBe(1);
  })

  test("Upheap - don't move node", () => {
    let test_heap: heap = new heap([1,2,3,4,5]);
    test_heap.up_heap(3);
    expect(test_heap.data[1]).toBe(2);
  })

  test("downheap - move node down", () => {
    let test_heap: heap = new heap([5,3,4,2,1]);
    test_heap.down_heap(0);
    expect(test_heap.data[test_heap.data.length - 1]).toBe(5);
  })

  test("downheap - don't move node", () => {
    let test_heap: heap = new heap([1,2,3,4,5]);
    test_heap.down_heap(0);
    expect(test_heap.data[0]).toBe(1);
  })

  test("add", ()=> {
    let test_heap: heap = new heap([2,3,4,5]);
    test_heap.add(1);
    expect(test_heap.data[0]).toBe(1);
  })



})


describe("Heap query operantion tests", () => {
  test("TBD", () => {
    //AAA
  })
  test("the heap is empty", () => {
    const test_heap = new heap([1]);
    let is_file_empty: boolean = test_heap.is_empty();
    expect(is_file_empty).toBe(false);
  })

  test("get root node on a non empty heap", () => {
    const test_heap = new heap([1, 2, 3, 4, 5]);
    let root: number = test_heap.root();
    expect(root).toBe(1);
  })


  //  2. remove_min


})

