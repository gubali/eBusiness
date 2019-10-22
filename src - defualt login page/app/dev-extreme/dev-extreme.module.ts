import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevExtremeRoutingModule } from './dev-extreme-routing.module';
import { ExtremeComponentComponent } from './extreme-component/extreme-component.component';
import { DxButtonModule } from "devextreme-angular";
import {DxAccordionModule} from 'devextreme-angular'
// import { FileSelectDirective } from 'ng2-file-upload';
@NgModule({
  declarations: [ExtremeComponentComponent],
  imports: [
    CommonModule,
    DevExtremeRoutingModule,
    DxButtonModule,
    DxAccordionModule,
   // FileSelectDirective
  ]
})
export class DevExtremeModule {
  constructor(){
    console.log('Extreme  module is loaded!');
    
  }
 }
