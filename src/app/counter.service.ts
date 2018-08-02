export class CounterService {
  countActive: number = 0;
  countInactive: number = 0;
  totalCount :number = this.countActive + this.countInactive;

  countToActive(){
    console.log("Inactive -> Active: ", ++this.countActive);
  }

  countToInactive(){
    console.log("Active -> Inactive: ", ++this.countInactive);
  }
}
