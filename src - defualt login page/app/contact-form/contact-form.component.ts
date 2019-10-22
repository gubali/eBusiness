import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  public fName1: string;
  public lName: string;
  public comments: string;
  editRow: any[];
  public rows: Array<{firstName: string, lastName: string, comments: string}> = [];
  displayDialog = false;
  copydtaForEdit = [];
countryList = [
  {id: 1, name: 'India'},
  {id: 2, name: 'Pakistan'},
  {id: 3, name: 'Nepal'},
  {id: 4, name: 'Bangladesh'},
  { id: 5, name: 'Afghanistan'}
];
  buttonClicked() {
    this.rows.push( {firstName: this.fName1, lastName: this.lName, comments: this.comments } );

    // if you want to clear input
    this.fName1 = null;
    this.lName = null;
    this.comments = null;
  }
  onRemove(course1) {
const index = this.rows.indexOf(course1);
this.rows.splice(index, 1);
  }

  // constructor() { }
// implements OnInit
  // ngOnInit() {
  // }
log(x) {
  console.log(x);
}
onSubmit(f) {
  console.log(f);
 // console.log(f.value);
 // console.log(f.valid);
}
edit(rc) {
  // create a clone of the selected employee
  this.copydtaForEdit = Object.assign({}, rc);
   this.displayDialog = true;

}
saveValues(e) {
  console.log(e);
}
// showDialog() {
//     this.display = true;
// }
}
