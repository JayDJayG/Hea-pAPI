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
}

