import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class RouterGaurdService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      debugger;
    // If the previous URL was blank, then the user is directly accessing this page
    if (this.router.url === '/') {
      debugger;
      this.router.navigate(['']); // Navigate away to some other page
      return false;
    }
    return true;
  }

}
