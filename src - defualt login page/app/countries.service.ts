import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import { Observable } from "rxjs/Observable";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppErrorHandler } from './services/global-app-handler';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  public myData: any = [];
  constructor(private http: HttpClient) {}

    getCountries() {
      debugger;
     // this.http.get('https://mria-forms.ausvdc02.pcf.dell.com/formGroup/getReasonCodeAndCCDetails?ccn=IND&businessType=FTRY').subscribe(
        this.http.get('https://restcountries.eu/rest/v2/all').subscribe(
       // https://restcountries.eu/rest/v2/all
      data => {
          this.myData = data as string [];	 // FILL THE ARRAY WITH DATA.
          console.log('sas21' + this.myData);
        },
        (err: AppErrorHandler) => {
          throw err;
          // console.log ('New Error: ' + err.message);
        }
      );
    }
      // this.http.get('https://mria-forms.ausvdc02.pcf.dell.com/formGroup/getReasonCodeAndCCDetails?ccn=IND&businessType=FTRY')
      // .subscribe(res => {
      //   this.myData = res;
      //   return this.myData;
      // }
      // );
      //    this.http.get('https://www.primefaces.org/primeng/assets/showcase/data/countries.json')
      //   .map(res => res.json())
      //       .subscribe(obj => console.log(obj));
      //               .toPromise()
      //               .then(res => <any[]> res.json().data)
      //               .then(data => { return data; });
    }
// }
