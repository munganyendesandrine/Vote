import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef){}
  @HostListener("click") onClicks(){
    this.background("yellow")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.background("green")
  }

  private background(action:string){
    this.elem.nativeElement.style.background=action;

  }

  
}
