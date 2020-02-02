import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../app/authentication/login/login.component';
import { RegistrationComponent } from '../app/authentication/registration/registration.component';
import { DefaultIndexComponent } from '../app/default-index/default-index.component';
import { IndutDecoratorComponent } from '../app/indut-decorator/indut-decorator.component';
import { OutputDecoratorComponent } from '../app/output-decorator/output-decorator.component';
import { WorldTourComponent } from './world-tour/world-tour.component';
import { ViewChildComponent } from "../app/view-child/view-child.component";
import {CopyClipboardComponent  } from "../app/copy-clipboard/copy-clipboard.component";

const routes: Routes = [
  {
    path: 'defaultIndex', component: DefaultIndexComponent
  },
  {
    path: '', redirectTo: '/defaultIndex', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'inputComponent', component: IndutDecoratorComponent
  },
  {
    path: 'outputComponent', component: OutputDecoratorComponent
  },
  {
    path: 'register', component: RegistrationComponent
  },
  {
    path:'worldTour', component:WorldTourComponent
  },
  {
    path:'viewChild', component:ViewChildComponent
  },
  {
    path:'CopyClipboardComponent', component:CopyClipboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
