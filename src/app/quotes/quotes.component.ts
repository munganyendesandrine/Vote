import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes=[
    new Quote(1,'There is only one happiness in this life, to love and be loved.','George Sand',new Date(2018,3,14),0,0),
    new Quote(2,'Money won"t create success,the freedom to make it will.','Nelson Mandela',new Date(2018,1,12),0,0),
    new Quote(3,'Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.','William Blake',new Date(2018,3,14),0,0),
    new Quote(4,'There is no charm equal to tenderness of heart','Jane Austen',new Date(2018,1,12),0,0),
    new Quote(5,'Learning never exhausts the mind','Leonardo da Vinci',new Date(2018,3,14),0,0),
  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

}
  @Input() quote:Quote;
  
  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
completeQuote(isComplete,index){
  if (isComplete){
      this.quotes.splice(index,1);
      }
      }
  /*increaseVote(isUp,index){
   if(isUp){
     let voteUp=this.quotes[index].voteIncrease;
     voteUp=voteUp+1;
     this.quotes[index].voteIncrease=voteUp;
   }
  }*/
  
  constructor() { }

  ngOnInit() {
  }

}
