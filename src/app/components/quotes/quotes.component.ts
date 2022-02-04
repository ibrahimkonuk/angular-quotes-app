import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/interfaces/quote';
import { QuoteService } from 'src/app/services/quote.service';

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
  }

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.getQuotes;
  }

  getQuotes(): void {
    this.quoteService.getQuotes().subscribe((quotes) => (this.quotes = quotes));
  }
}
