import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ICity } from "../../app/interfaces/carInterface";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
export interface ICar {
  order: number;
  vin: string;
  year: string;
  brand: string;
  color: string;
  location: string

}
@Component({
  selector: 'app-copy-clipboard',
  templateUrl: './copy-clipboard.component.html',
  styleUrls: ['./copy-clipboard.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class CopyClipboardComponent implements OnInit {
  cars: ICity[] = [{ id: 1, name: 'audi' }, { id: 2, name: 'opel' }, { id: 3, name: 'bmw' }];
  selectedCars: ICity[] = [];
  selectedToAdd: ICity[] = [];
  selectedToRemove: ICity[] = [];
  cols: any[];
  myCar: ICar[];
  expandedRows: {} = {};
  public isRowSelected: number;
  selectedRow:number;
  prevRowIndex:string;
  currentRowIndex:string
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
      (data: ICar[]) => {

        this.myCar = data;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
//default
const thisRef = this;
// this.myCar.forEach(function(car) {
//   thisRef.expandedRows[car.order] = true;
// });

this.expandedRows = Object.assign({}, this.expandedRows);
  }

  chosenCars(cars) {
    this.selectedToAdd = cars;
  }

  chosenCarsToRemove(cars) {
    this.selectedToRemove = cars;
  }

  assigne() {
    this.selectedCars = this.selectedCars.concat(this.selectedToAdd);
    this.cars = this.cars.filter(car => {
      return this.selectedCars.indexOf(car) < 0;
    });

    this.selectedToAdd = [];
  }

  unassigne() {
    this.cars = this.cars.concat(this.selectedToRemove);
    this.selectedCars = this.selectedCars.filter(selectedCar => {
      return this.cars.indexOf(selectedCar) < 0;
    });
    this.selectedToRemove = [];
  }

//   selectedrowForClick(index) {
//     this.isRowSelected = index.data.order-1;
//     console.log(index.data.order-1);
    
//   //   if (index.data.order == 1) {
    
//   //    this.IsActive = true;
    
     
//   //  } else {
     
//   //  }

//   console.log(index);
  
//   }
//   onRowCollapse(row){
//     console.log(row);
   
// }
onRowExpand(event){
console.log(event);
let selectedRowItems = event.originalEvent.path[3];
 this.prevRowIndex = selectedRowItems.rowIndex;
 console.log("Row Index" + this.prevRowIndex );
  
}
checkTypeOf(a){
if (typeof(a) == 'object') {
  return true;
  
}

}
}
