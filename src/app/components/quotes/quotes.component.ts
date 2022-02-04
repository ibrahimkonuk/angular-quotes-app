import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/interfaces/quote';
import { QUOTES } from 'src/app/mock-data/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit{

  quotes = QUOTES;
  }

  constructor() {}

  ngOnInit(): void {}
}
