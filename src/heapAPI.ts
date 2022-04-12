export class heap {
    public readonly data: number[];

    constructor(heapList?: number[]) {
      if (heapList) {
        this.data = Object.assign([], heapList);
      }
      else {
        this.data = [];
      }
      }
      
    len(){
      return this.data.length; 
    }

    parent(j: number):number{
      return Math.floor((j-1)/2);
    }

    left(j: number): number{
      return 2 * j + 1;
    }
    right(j: number): number{
      return 2 * j + 2;
    }

    has_left(j: number) : boolean{
      return this.left(j) < this.len();
    }

    has_right(j: number) : boolean{
      return this.right(j) < this.len();
    }

    is_empty(this: heap): boolean{
      if (this.len() === 0){
        return true;
      }
      else {
        return false;
      }
    }

    root(this: heap) : number{
      if (this.is_empty() == false){
        return this.data[0];
      }
      else{
        throw new Error('Heap is empty');
      }
    }

    remove_min() : number | Error | undefined{
      if (this.data.length === 0) {
        return Error("heap is empty");
      }
      this.swap(0, this.data.length - 1);
      let item : number | undefined = this.data.pop();
      this.down_heap(0)
      return item;

    }
  /*
  def remove min(self):
  ”””
  Remove and return (k,v) tuple with minimum key.
  Raise Empty exception if empty. 
  ”””
  if self.is empty():
    raise Empty( Priority queue is empty. )
  self. swap(0, len(self. data) − 1) 
  item = self. data.pop( )
  self. downheap(0)
  return (item. key, item. value)
  //  2. remove_min
*/
    swap(j: number, k: number): void{
      //self. data[i], self. data[j] = self. data[j], self. data[i]
      [this.data[j], this.data[k]] = [this.data[k], this.data[j]];
    }

    up_heap(j: number): void{
      if (j > 0){
        let parent: number = this.parent(j);
        if (this.data[parent] > this.data[j]){
          this.swap(parent, j);
          this.up_heap(parent);
        }
      }
    }

    down_heap(j: number): void{
      if (this.has_left(j)){
        let index_smallest_child = this.left(j);
        if (this.has_right(j) && (this.data[this.left(j)] > this.data[this.right(j)])){
          index_smallest_child = this.right(j);
        }
        if (this.data[j] > this.data[index_smallest_child]){
          this.swap(j, index_smallest_child);
          this.down_heap(index_smallest_child);
        }
      }
    }

}

