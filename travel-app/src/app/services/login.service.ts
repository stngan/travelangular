import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { Users } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
  //login
  getUsers(aUser: any): Observable<any> {
    const requestOptions: Object = {
      headers: new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    };
    return this._http.post<any>("/users/login", JSON.stringify(aUser), requestOptions).pipe(
      map(res => res as boolean),
      catchError(this.handleError)
    );
  }
  getUserName(): Observable<any> {
    const requestOptions: Object = {
      headers: new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    };
    return this._http.get<any>("/users/profile", requestOptions).pipe(
      catchError(this.handleError)
    );
  }

//   putPassword(aCustomer:any, email:string):Observable<any>{
//   const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
//   const requestOptions:Object={
//     headers:headers,
//     responseType:"text"
//   }
//   return this._http.put<any>("/users/password/" +email, JSON.stringify(aCustomer),requestOptions).pipe(
//     map(res=>JSON.parse(res) as IUser),
//     retry(3),
//     catchError(this.handleError)
//   )
// }
//kiểm tra email không tồn tại
checkEmailExists(email: string): Observable<boolean> {
  return this._http.get<any>(`/users/check-unexist/${email}`).pipe(
    map(res => res.exists as boolean),
    catchError(this.handleError)
  );
}
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
}
