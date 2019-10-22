import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify'

@Component({
  selector: 'app-extreme-component',
  templateUrl: './extreme-component.component.html',
  styleUrls: ['./extreme-component.component.css']
})

export class ExtremeComponentComponent implements OnInit {
  accordionData:any[];
  fileToUpload: File = null;

  constructor() { }

  ngOnInit() {
    this.accordionData = [
      { title: "Panel 1 Title", text: "Panel 1 Text Content" },
      { title: "Panel 2 Title", text: "Panel 2 Text Content" }
  ];
  
  }
  sayHello(){
notify('Hello :)', 'info',3500)
  }
//testing
handleFileInput(files: FileList) {
  this.fileToUpload = files.item(0);
}

}
