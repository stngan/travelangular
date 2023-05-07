import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, retry, catchError, throwError } from 'rxjs';
import { Idestinations } from '../interfaces/Idestinations';
import { GeneralInformation } from '../interfaces/GeneralInformation';
import { FAQ } from '../interfaces/FAQ';
import { TopPlaces } from '../interfaces/TopPlaces';

@Injectable({
  providedIn: 'root',
})
export class DestinationsService {
  constructor(private _http: HttpClient) {}

  getDestinations(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOption: Object = {
      headers: headers,
      responseType: 'text',
    };

    return this._http.get<any>('/destinations', requestOption).pipe(
      map((res) => JSON.parse(res) as Array<Idestinations>),
      retry(3),
      catchError(this.handleError)
    );
  }

  getGeneralInformation(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOption: Object = {
      headers: headers,
      responseType: 'text',
    };

    return this._http.get<any>('/generalinformation', requestOption).pipe(
      map((res) => JSON.parse(res) as Array<GeneralInformation>),
      retry(3),
      catchError(this.handleError)
    );
  }

  getFAQ(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOption: Object = {
      headers: headers,
      responseType: 'text',
    };

    return this._http.get<any>('/faq', requestOption).pipe(
      map((res) => JSON.parse(res) as Array<FAQ>),
      retry(3),
      catchError(this.handleError)
    );
  }


  getGeneralInformationID(infoID: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOption: Object = {
      headers: headers,
      responseType: 'text',
    };

    return this._http
      .get<any>('/generalinformation/' + infoID, requestOption)
      .pipe(
        map((res) => JSON.parse(res) as Array<GeneralInformation>),
        retry(3),
        catchError(this.handleError)
      );
  }

  getfaqID(faqID: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOption: Object = {
      headers: headers,
      responseType: 'text',
    };

    return this._http.get<any>('/faq/' + faqID, requestOption).pipe(
      map((res) => JSON.parse(res) as Array<FAQ>),
      retry(3),
      catchError(this.handleError)
    );
  }

  gettopPlaceID(destiID: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOption: Object = {
      headers: headers,
      responseType: 'text',
    };

    return this._http.get<any>('/topplaces/' + destiID, requestOption).pipe(
      map((res) => JSON.parse(res) as Array<TopPlaces>),
      retry(3),
      catchError(this.handleError)
    );
  }


  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
