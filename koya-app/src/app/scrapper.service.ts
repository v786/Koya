import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrapperService {

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }
  constructor(private _httpCli: HttpClient) {

  }
  getScraps(area: string): Observable<string> {
    return this._httpCli.get<string>('http://localhost:3000/cost-list').pipe(catchError(this.errorHandler));
  }

}
