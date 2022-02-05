import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';
import { Quote } from 'src/app/interfaces/quote';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
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
    public messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes() {
    this.quoteService
      .getQuotes()
      .subscribe((quotes) => (this.quotes = quotes.slice(1, 4)));
  }
}
