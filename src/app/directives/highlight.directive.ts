import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {
    // console.log();
    // this.elem.nativeElement.style.backgroundColor = "red";

  }

  @HostListener('mouseenter') OnMousEenter() {
    this.elem.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elem.nativeElement.style.backgroundColor = null;
  }

}
