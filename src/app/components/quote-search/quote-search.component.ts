import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/interfaces/quote';
import { QuoteService } from 'src/app/services/quote.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-quote-search',
  templateUrl: './quote-search.component.html',
  styleUrls: ['./quote-search.component.scss'],
})
export class QuoteSearchComponent implements OnInit {
  searchResult$!: Observable<Quote[]>;
  private searchTerms = new Subject<string>();

  constructor(private quoteService: QuoteService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.searchResult$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.quoteService.searchQuotes(term))
    );
  }
}
