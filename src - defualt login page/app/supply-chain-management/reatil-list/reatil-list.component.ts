import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reatil-list',
  templateUrl: './reatil-list.component.html',
  styleUrls: ['./reatil-list.component.css']
})
export class ReatilListComponent implements OnInit {
fname:string = 'khan';
txt:string = 'txt2'
  constructor() { }

  ngOnInit() {
  }

}
