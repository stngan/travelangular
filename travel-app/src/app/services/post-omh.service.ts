import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { IPost } from '../interfaces/post';
import { IReact } from '../interfaces/React';
import { IActivity } from '../interfaces/Activity';
import { Users } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class PostOMHService {

  constructor(private _http: HttpClient) {}
  getPost(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/posts', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<IPost>),
      retry(3),
      catchError(this.handleError)
    );
  }
  getNPost(n:any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/posts-getN/' + n, requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<IPost>),
      retry(3),
      catchError(this.handleError)
    );
  }
  getRaCPost(r:any, c:any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/posts-region/' + r +'/' + c, requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<IPost>),
      retry(3),
      catchError(this.handleError)
    );
  }

  getRaCPrice(r:any, c:any, min:any, max:any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/posts-price/' + r +'/' + c +'/' + min +'/' + max, requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<IPost>),
      retry(3),
      catchError(this.handleError)
    );
  }
  getRPost(r:any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/posts-region/' + r, requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<IPost>),
      retry(3),
      catchError(this.handleError)
    );
  }
  getAPost(PostId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/posts/' + PostId, requestOptions).pipe(
      map((res) => JSON.parse(res) as IPost),
      retry(3),
      catchError(this.handleError)
    );
  }
  getAReact(PostId: string, UserId:string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/posts-react/' + PostId +'/'+ UserId, requestOptions).pipe(
      map((res) => JSON.parse(res) as IReact),
      retry(3),
      catchError(this.handleError)
    );
  }
  getAReactByUser(UserId:string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/posts-reacted/' + UserId, requestOptions).pipe(
      map((res) => JSON.parse(res) as IReact),
      retry(3),
      catchError(this.handleError)
    );
  }
  getACmt(PostId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/posts-cmt/' + PostId, requestOptions).pipe(
      map((res) => JSON.parse(res) as IActivity),
      retry(3),
      catchError(this.handleError)
    );
  }


  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
  deletePost(PostId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .delete<any>('/posts/' + PostId, requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<IPost>),
        retry(3),
        catchError(this.handleError)
      );
  }
  deleteCmt(PostCMTId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .delete<any>('/posts-cmt/' + PostCMTId, requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<IActivity>),
        retry(3),
        catchError(this.handleError)
      );
  }
  putPost(Post: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .put<any>('/posts', JSON.stringify(Post), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<IPost>),
        retry(3),
        catchError(this.handleError)
      );
  }
  putCMT(Post: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .put<any>('/posts-cmt', JSON.stringify(Post), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<IActivity>),
        retry(3),
        catchError(this.handleError)
      );
  }
  postAPost(aPost: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>('/posts', JSON.stringify(aPost), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as IPost),
        retry(3),
        catchError(this.handleError)
      );
  }
  postAC(aCmt: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>('/posts', JSON.stringify(aCmt), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as IActivity),
        retry(3),
        catchError(this.handleError)
      );
  }
  postReact(aReact: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>('/posts-react', JSON.stringify(aReact), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as IActivity),
        retry(3),
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
