import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {MessageService, Type} from './message.service';
import {Message} from '../interfaces/message';

/**
 *  Type of the handleError function returned by HttpErrorHandler.createHandleError
 */
export type HandleError =
  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

@Injectable()
export class HttpErrorHandlerService {

  constructor(private messageService: MessageService) { }

  /** Create curried handleError function that already knows the service name */
  createHandleError = (serviceName = '') => <T>
  (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result);

  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param serviceName = nam_çe of the data service that attempted the operation
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      const messageText: string = (error.error instanceof ErrorEvent) ?
        error.error.message :
        `server returned code ${error.status} with body "${error.error.error}"`;

      const messageFullE: Message = {
        type: Type.Error,
        title: 'Erreur lors de l\'opération ' + `${serviceName}: ${operation}`,
        message: `${messageText}`
      };

      // TODO: better job of transforming error for user consumption
      this.messageService.add(messageFullE);

      // Let the app keep running by returning a safe result.
      return of( result );
    };

  }
}
