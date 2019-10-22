import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../app/authentication/login/login.component';
import { RegistrationComponent } from "../app/authentication/registration/registration.component";
import { DefaultIndexComponent } from "../app/default-index/default-index.component";


const routes: Routes = [
  {
    path:'defaultIndex', component:DefaultIndexComponent
  },
  {
    path:'', redirectTo:'/defaultIndex', pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register', component:RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
