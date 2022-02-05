import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';
import { Quote } from 'src/app/interfaces/quote';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  quotes: Quote[] = [];

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes() {
    this.quoteService
      .getQuotes()
      .subscribe((quotes) => (this.quotes = quotes.slice(1, 4)));
  }
}
