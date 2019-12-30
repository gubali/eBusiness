import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { IUserData } from "../../shared/user-data";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  firstName = '';
  lastName = '';
  mobileNo: number;
  emailId = '';
  passWord = '';
  userDate: IUserData[];
  totalHawak: number;
  constructor(private frmBuilder: FormBuilder, private http: HttpClient) {
    this.registrationForm = frmBuilder.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      mobileNo: new FormControl(),
      email_Id: new FormControl(),
      passWord: new FormControl()
    });
  }

  ngOnInit() {
    this.http.get('./assets/db/db.json').subscribe(
      data => {

        this.userDate = data as IUserData [];	 // FILL THE ARRAY WITH DATA.
        console.log('WithOut Hawk function' + this.userDate);
        this.totalHawak = this.userDate.filter(elem => elem.Type.toLocaleLowerCase() === 'hawk').length;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );

    //alert(this.getHawkTypeCount());
    this.getHawkTypeCount()


  }
  postData(registration: any) {
    this.firstName = registration.controls.firstName.value;
    console.log('My Name' + this.firstName);

    console.log(this.registrationForm.controls);
  }
  inserIntoTable() {

    alert('button clicked!');
  }
  getHawkTypeCount() {
    console.log('Hawk function' + this.userDate)
    // return this.userDate.filter(elem => elem.Type.toLocaleLowerCase() === 'hawk').length;
  }
}
