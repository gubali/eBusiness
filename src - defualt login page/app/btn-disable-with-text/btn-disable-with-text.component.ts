import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-btn-disable-with-text',
  templateUrl: './btn-disable-with-text.component.html',
  styleUrls: ['./btn-disable-with-text.component.css']
})
export class BtnDisableWithTextComponent implements OnInit {

  constructor() { }
 countriesName = [
  {id: 1, name: 'Superman'},
  {id: 2, name: 'Batman'},
  {id: 3, name: 'BatGirl'},
  {id: 4, name: 'Robin'},
  { id: 5, name: 'Flash'}
];
  ngOnInit() {
  }
  onFormSubmit(userForm: NgForm) {
    console.log(userForm.value);
console.log('Name:' + userForm.controls['name'].value);

    console.log('Form Valid:' + userForm.valid);
console.log('Form Submitted:' + userForm.submitted);
}
resetUserForm(userForm: NgForm) {
    userForm.resetForm();
}
}
