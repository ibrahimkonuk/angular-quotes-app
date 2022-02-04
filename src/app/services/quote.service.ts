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

  constructor(private messageService: MessageService) {}
}
