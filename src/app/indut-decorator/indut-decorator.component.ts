import { Component, OnInit, Input, EventEmitter, Output, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-indut-decorator',
  templateUrl: './indut-decorator.component.html',
  styleUrls: ['./indut-decorator.component.css']
})
export class IndutDecoratorComponent implements OnInit, AfterViewInit {
  @Input() itemsList;
  @Input() componentVar = '';
  @Input() nameVar = '';
  @Input() companyName: string;
  @Output() inpudtDecChild = new EventEmitter();
  @Output() greetEventFromChild = new EventEmitter();
  childVarName:string = "Im child Variable";
  keyText:string;
  companyType: string = "Software Engg"

  constructor() { }

  ngOnInit() {
    console.log('sass' + this.itemsList);

  }
fireEvent() {
   this.inpudtDecChild.emit('Data coming from Child(induct decorator) to Parent (out put decorator)');
   alert('hello india');
}
greetUser(){
  alert('Company tye is ' + `${this.companyType}`)
}
ngAfterViewInit(){
  
}
callPrentGreet(){
  this.greetEventFromChild.emit(this.childVarName)
}
}
