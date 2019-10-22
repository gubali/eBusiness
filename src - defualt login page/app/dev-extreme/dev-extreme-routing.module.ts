import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExtremeComponentComponent} from './extreme-component/extreme-component.component'
const routes: Routes = [
  {path:'', component:ExtremeComponentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevExtremeRoutingModule { }
