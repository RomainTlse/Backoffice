import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HandleError, HttpErrorHandlerService} from './http-error-handler.service';
import {Login} from '../interfaces/login';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class LoginService {
  loginUrl = 'http://localhost:3000/api/auth/login'; // URL to web api
    handleError: HandleError;

  constructor(private http: HttpClient,
              public httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('LoginService');
  }

  /** POST: add a new hero to the database */
  login(login: Login): Observable<Login> {
    return this.http.post<Login>(this.loginUrl, login, httpOptions)
      .pipe(
        catchError(this.handleError('login', login))
      );
  }

}
