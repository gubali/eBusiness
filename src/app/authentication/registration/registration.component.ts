import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, FormBuilder, NgForm} from "@angular/forms";
import {HttpClient} from '@angular/common/http'
import { HttpErrorResponse } from '@angular/common/http';
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
userDate:any
  constructor(private frmBuilder:FormBuilder, private http:HttpClient ){ 
    this.registrationForm = frmBuilder.group({
     firstName:new FormControl(),
      lastName:new FormControl(),
      mobileNo:new FormControl(),
      email_Id:new FormControl(),
      passWord:new FormControl()
    })
  }

  ngOnInit() {
    this.http.get('./assets/db/db.json').subscribe(
      data => {
      
        this.userDate = data as string [];	 // FILL THE ARRAY WITH DATA.
          console.log(this.userDate);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  




  }
  postData(registration:any){
    this.firstName = registration.controls.firstName.value;
    console.log('My Name' + this.firstName);
    
console.log(this.registrationForm.controls)
  }
}
