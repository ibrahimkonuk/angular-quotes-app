import { Component, OnInit, Input } from '@angular/core';
import { Quote } from 'src/app/interfaces/quote';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss'],
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote?: Quote;

  constructor(
    private route: ActivatedRoute,
    private quoteService: QuoteService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getQuote();
  }

  getQuote(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.quoteService.getQuote(id).subscribe((quote) => (this.quote = quote));
  }
}
