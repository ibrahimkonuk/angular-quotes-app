import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quote } from '../interfaces/quote';
import { QUOTES } from '../mock-data/quotes';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  getQuotes(): Observable<Quote[]> {
    const quotes = of(QUOTES);
    return quotes;
  }

  constructor() {}
}
