import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-indut-decorator',
  templateUrl: './indut-decorator.component.html',
  styleUrls: ['./indut-decorator.component.css']
})
export class IndutDecoratorComponent implements OnInit {
  @Input() itemsList;
  @Input() componentVar = '';
  @Input() nameVar = '';
  @Input() companyName: string;
  @Output() inpudtDecChild = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('sass' + this.itemsList);

  }
fireEvent() {
   this.inpudtDecChild.emit('Data coming from Child(induct decorator) to Parent (out put decorator)');
   alert('hello india');
}
}
