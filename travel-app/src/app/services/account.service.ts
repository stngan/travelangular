import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { IPost } from '../interfaces/post';
import { Users } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http: HttpClient) {}
  getAccount(email: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/user-getEmail/' + email, requestOptions).pipe(
      map((res) => JSON.parse(res) as Users),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
