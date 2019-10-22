import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumApiService {

  constructor(private http: HttpClient) { }
    endpoint = 'https://jsonplaceholder.typicode.com/photos';

   readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  private extractData(res: Response ) {
    const body = res;
    return body || { };

  }
   getAllAlbumData(): Observable<any > {
    return this.http.get(this.endpoint).pipe(
      map(this.extractData));

  }
}
