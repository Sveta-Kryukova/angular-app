import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../models/country.model';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(
    private http: HttpClient, 
    private errorService: ErrorService
    ) {}

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all').pipe(
      catchError(this.errorHandler.bind(this))
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(()=> error.message || 'Server Error');
  }
}
