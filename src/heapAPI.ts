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
    swap(j: number, k: number): void{
      //self. data[i], self. data[j] = self. data[j], self. data[i]
      [this.data[j], this.data[k]] = [this.data[k], this.data[j]];
    }
}

