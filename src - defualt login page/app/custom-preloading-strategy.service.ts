import { Injectable } from '@angular/core';
import {Route, PreloadingStrategy} from '@angular/router';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    console.log('Preload path is :' + route.path);

    return route.data && route.data.preload ? load() : of(null);
  }
}
