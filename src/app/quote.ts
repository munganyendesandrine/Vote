export class Quote {
    public showDescription:boolean;
    public background:boolean;
      constructor(public id:number, public msg:string, public author:string,public completeDate:Date,public up:number,public down:number,public description:string){
        this.showDescription=false
        this.background=false
    }
}
