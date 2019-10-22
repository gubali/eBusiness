import { Component, OnInit, ViewChild } from '@angular/core';
import { CountriesService } from '../countries.service';
import {ViewchildExpComponent} from '../viewchild-exp/viewchild-exp.component';
@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.css'],
  providers: [CountriesService]
})
export class CountryDataComponent implements OnInit {
  @ViewChild(ViewchildExpComponent)
  private childC: ViewchildExpComponent;
  constructor(private countryService: CountriesService) { }
  cols1: any[];
  cols: any[];
  cars;
  ngOnInit() {
    this.countryService.getCountries();
    this.cols = [
      { field: 'name', header: 'CountryName' },
      // { field: 'level', header: 'Level' },
      { field: 'alpha3Code', header: 'CountryCode' },
      { field: 'borders', header: 'Borders' },
      { field: 'Flag', header: 'Flag' }
      // { field: 'Flag', header: 'Flag' },
    ];
    this.cars = [
      { BrandName: '123ABC', year: 1994 },
      { BrandName: '234BCD', year: 1978 },
      { BrandName: '345CDE', year: 2015 },
  ];

  this.cols1 = [
    { field: 'BrandName', header: 'BrandName' },
      { field: 'year', header: 'Year' }
  ];
  }

  // view child exp

  public sendMsg(): void {
    this.childC.msgTitle = 'ViewChild Msg title from Parent(country)';
  }
}
