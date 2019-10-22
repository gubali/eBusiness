import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild-exp',
  templateUrl: './viewchild-exp.component.html',
  styleUrls: ['./viewchild-exp.component.css']
})
export class ViewchildExpComponent implements OnInit {
  msgTitle = 'Child Component';
  msg = 'Default msg';
  constructor() { }

  ngOnInit() {
  }

}
