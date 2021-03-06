import { Component,ElementRef, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();
  @Output() isUp= new EventEmitter<boolean>();
  
  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  vote(){
    this.quote.up++;
    let a=this.quote.up>5;
   
    if(a)
    {
      alert("Most liked quote")
     
    }
  }
  voted(){
    this.quote.down++;
  }
 
  constructor(){}
  

  ngOnInit() {
  }

}
