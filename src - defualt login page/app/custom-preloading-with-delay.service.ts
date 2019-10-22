import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { timer } from 'rxjs/observable/timer';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyService implements PreloadingStrategy {
  debugger;
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    console.log('Preload path is ' + route.path + 'Delay:' + route.data['delay']);
    if(route.data['delay']){
      return timer(5000).mergeMap(() =>load());
    }
    return route.data && route.data.preload ? load() : of(null);
  }
}
