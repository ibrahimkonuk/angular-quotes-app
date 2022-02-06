import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Quote } from '../interfaces/quote';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const quotes = [
      {
        id: 1,
        content: 'Strive not to be a success, but rather to be of value.',
        author: 'Albert Einstein',
      },
      {
        id: 2,
        content: 'Continuous improvement is better than delayed perfection.',
        author: 'Mark Twain',
      },
      {
        id: 3,
        content:
          'Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.',
        author: 'Lao Tzu',
      },
      {
        id: 4,
        content:
          "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: 'Bernard M. Baruch',
      },
    ];
    return { quotes };
  }

  genId(quotes: Quote[]): number {
    return quotes.length > 0
      ? Math.max(...quotes.map((quote) => quote.id)) + 1
      : 5;
  }
  constructor() {}
}
