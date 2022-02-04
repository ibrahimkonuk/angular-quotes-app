import { Component, OnInit, Input } from '@angular/core';
import { Quote } from 'src/app/interfaces/quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss'],
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote?: Quote;

  constructor() {}

  ngOnInit(): void {}
}
