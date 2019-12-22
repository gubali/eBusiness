import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective {
  private el: any;
  constructor( el: ElementRef) {
   // el.nativeElement.style.backgroundColor = 'red';
   this.el = el;
   }
   @HostListener('mouseenter') onmouseenter() {
     this.highLight('yellow', 'green');
   }
   @HostListener('mouseleave') onmouseleave() {
    this.highLight(null, null);
  }
private highLight(color: string, txtColor: string) {
  this.el.nativeElement.style.backgroundColor =  color;
  this.el.nativeElement.style.color = txtColor;
}
fnAlert() {
  alert('hello World!');
}
}
