import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { SupplyChainManagementRoutingModule } from './supply-chain-management-routing.module';
import { ReatilListComponent } from './reatil-list/reatil-list.component';

@NgModule({
  declarations: [ReatilListComponent],
  imports: [
    CommonModule,
    SupplyChainManagementRoutingModule,
    FormsModule
  ]
})
export class SupplyChainManagementModule {
  constructor(){
    console.log('Supply chain  module is loaded wih delay!');
    
  }
 }
