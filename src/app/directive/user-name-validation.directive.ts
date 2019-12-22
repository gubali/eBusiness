import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUserNameValidation]'
})
export class UserNameValidationDirective {
  value: any;
  constructor(private el: ElementRef) { }
  // @HostListener('blur', ['$event']) onBlur($event){
  //   this.value = $event.target.value.toUpperCase();
  //   alert(this.value);

  // }
  @HostListener('blur') onBlur() {
    if (this.el.nativeElement.value) {

      // let arr: string[] = this.el.nativeElement.value.split('');
      // renderer.setElementStyle(el.nativeElement, 'display', 'none');
      let arr: string = this.el.nativeElement.value;
      arr = arr.toUpperCase();
      this.el.nativeElement.value = arr;
      const regx  =  /[0-9\+\-\ ]/;
      if (regx.test(this.el.nativeElement.value)) {
        alert('user can insert only string!');
        this.el.nativeElement.value = '';

      }
   }
  }
}
