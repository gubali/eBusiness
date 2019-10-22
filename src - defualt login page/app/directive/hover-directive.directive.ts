import { Directive, ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective {
@Input() appHoverDirective:string;
  constructor(private el:ElementRef) { }

  private rollOutColor:string  ="white"
@HostListener('mouseenter') onmouseenter(){
  this.customeColor(this.appHoverDirective)
}
@HostListener('mouseleave') onmouseleave(){
  this.customeColor(this.rollOutColor)
}
  public customeColor(color)
  {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
