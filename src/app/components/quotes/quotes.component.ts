import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/interfaces/quote';
import { QuoteService } from 'src/app/services/quote.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [];
  selectedQuote?: Quote;

  onSelect(quote: Quote): void {
    this.selectedQuote = quote;
    this.messageService.add(
      `QuotesComponent: Selected quote ${this.selectedQuote.id}`
    );
  }

  constructor(
    private quoteService: QuoteService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes(): void {
    this.quoteService.getQuotes().subscribe((quotes) => (this.quotes = quotes));
  }
}
