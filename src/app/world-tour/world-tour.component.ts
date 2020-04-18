import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICar } from '../copy-clipboard/copy-clipboard.component';
@Component({
  selector: 'app-world-tour',
  templateUrl: './world-tour.component.html',
  styleUrls: ['./world-tour.component.css']
})
export class WorldTourComponent implements OnInit {
  cols: { field: string; header: string; }[];
  myCar: ICar[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.cols = [
      { field: 'order', header: 'Order' },
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' },
      { field: 'location', header: 'Location' },

    ];
    this.http.get('./assets/db/car.json').subscribe(
      (data:any) => {

        this.myCar = data;
        console.log("world tour", this.myCar);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

}
