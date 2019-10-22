import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car';
@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(private http: HttpClient) {}

  getCarsSmall() {
      return this.http.get<any>('assets/data/cars-small.json')
          .toPromise()
          .then(res => <Car[]> res.data)
          .then(data => data);
  }
}
