import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReatilListComponent } from './reatil-list/reatil-list.component';

const routes: Routes = [
  {path:'',
  component : ReatilListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplyChainManagementRoutingModule { }
