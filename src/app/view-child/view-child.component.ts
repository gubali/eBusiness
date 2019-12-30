import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit{

 @ViewChild('elemRef', {static:false}) userNameRef: ElementRef
  constructor() { }

  ngOnInit() {
  }
ngAfterViewInit(){
  this.userNameRef.nativeElement.focus();
  this.userNameRef.nativeElement.style.color = 'red'
  console.log(this.userNameRef);
  
}
// ngOnChanges(changes: SimpleChange){
// console.log("sass" + changes);

// }
}
