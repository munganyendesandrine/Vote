export class Quote {
    public showDescription:boolean;
      constructor(public id:number, public msg:string, public author:string,public completeDate:Date,public up:number,public down:number){
        this.showDescription=false
    }
}
