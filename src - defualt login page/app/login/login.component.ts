import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username = '';
userpassword = '';
get_password = '';
get_uname = '';
ngModelusername: string;
ngModeluserpassword: string;
inValidLogin = false;
isLoginActive = true;
  constructor(private route: Router) { }

  ngOnInit() {
   const u_name = localStorage.setItem('username', 'khan');
   const u_password = localStorage.setItem('password', '1');
   this.getLocalStorageData();

  }

  getLocalStorageData() {
    this.get_uname = localStorage.getItem('username');
    this.get_password = localStorage.getItem('password');
    console.log('Name ' + this.get_uname + ' ' + 'Password ' + this.get_password);

  }
  // this.get_uname


login(nameval: string, pass: string) {
  nameval = this.ngModelusername;
  pass = this.ngModeluserpassword;

  if (name  == null || pass == null) {
    alert('All fields is required');
    this.ngModelusername = null;
    this.ngModeluserpassword = null;
  } else {
    if (nameval === this.get_uname && pass === this.get_password ) {
      this.route.navigate(['/welcome']);
    } else {
     // alert('Credential is not match !!');
     this.inValidLogin = true;
     setTimeout(() => {
       this.inValidLogin = false;

     }, 5000);
      this.ngModelusername = null;
    this.ngModeluserpassword = null;
    }
  }


}
// register

registerUser() {
  this.isLoginActive = !this.isLoginActive;
}

}
