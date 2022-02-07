import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quote } from '../interfaces/quote';
import { QUOTES } from '../mock-data/quotes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private quotesUrl = 'api/quotes'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.quotesUrl).pipe(
      tap(() => this.log('fetched quotes')),
      catchError(this.handleError<Quote[]>('getQuotes', []))
    );
  }

  getQuote(id: number): Observable<Quote> {
    const url = `${this.quotesUrl}/${id}`;
    return this.http.get<Quote>(url).pipe(
      tap(() => this.log(`fetched quote=${id}`)),
      catchError(this.handleError<Quote>('getQuote'))
    );
  }

  updateQuote(quote: Quote): Observable<any> {
    return this.http.put<Quote>(this.quotesUrl, quote, this.httpOptions).pipe(
      tap(() => this.log(`Updated quote=${quote.id}`)),
      catchError(this.handleError<any>('updateQuote'))
    );
  }

  addQuote(quote: Quote): Observable<Quote> {
    return this.http.post<Quote>(this.quotesUrl, quote, this.httpOptions).pipe(
      tap((newQuote: Quote) => this.log(`added quote id=${newQuote.id}`)),
      catchError(this.handleError<Quote>('addQuote'))
    );
  }

  deleteQuote(id: number): Observable<Quote> {
    const url = `${this.quotesUrl}/${id}`;
    return this.http.delete<Quote>(url, this.httpOptions).pipe(
      tap(() => this.log(`deleted quote id=${id}`)),
      catchError(this.handleError<Quote>('deleteQuote'))
    );
  }

  /** Log a QuoteService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`QuoteService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}
}
