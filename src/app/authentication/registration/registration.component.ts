import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, FormBuilder, NgForm} from "@angular/forms";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
registrationForm:FormGroup;
firstName:string = ''
lastName:string = ''
mobileNo:number;
email_Id:string = ''
passWord:string = ''
  constructor(private frmBuilder:FormBuilder) { 
    this.registrationForm = frmBuilder.group({
     firstName:new FormControl(),
      lastName:new FormControl(),
      mobileNo:new FormControl(),
      email_Id:new FormControl(),
      passWord:new FormControl()
    })
  }

  ngOnInit() {
  }
  postData(registration:any){
    this.firstName = registration.controls.firstName.value;
    console.log('My Name' + this.firstName);
    
console.log(this.registrationForm.controls)
  }
}
