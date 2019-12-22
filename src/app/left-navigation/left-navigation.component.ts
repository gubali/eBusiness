import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {  RouterModule, Routes} from "@angular/router";
@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.css']
})
export class LeftNavigationComponent implements OnInit {
  listItems = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadMenuDate();
  }
  loadMenuDate() {
    this.http.get('./assets/db/menu.json').subscribe(
      data => {

        this.listItems = data as string[];	 // FILL THE ARRAY WITH DATA.
        console.log(this.listItems);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
