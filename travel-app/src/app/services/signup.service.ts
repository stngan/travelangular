import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { Users } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http: HttpClient) { }

  postUsers(aUser:any):Observable<any>{
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.post<any>("/users/signup",JSON.stringify(aUser),requestOptions).pipe(
      map(res=>JSON.parse(res) as Users),
      retry(3),
      catchError(this.handleError)
    )
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
  checkEmail(email: string): Observable<boolean> {
    return this._http.get<any>(`/users/check-email/${email}`).pipe(
      map(res => res as boolean)
    );
  }
}
