import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quote } from '../interfaces/quote';
import { QUOTES } from '../mock-data/quotes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  getQuotes(): Observable<Quote[]> {
    const quotes = of(QUOTES);
    this.messageService.add('QuoteService: fetched quotes');
    return quotes;
  }

  getQuote(id: number): Observable<Quote> {
    const quote = QUOTES.find((quote) => quote.id === id)!;
    this.messageService.add(`QuoteService: fetched quote id=${id}`);
    return of(quote);
  }
  constructor(private messageService: MessageService) {}
}
