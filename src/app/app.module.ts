import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QuoteDetailComponent } from './components/quote-detail/quote-detail.component';

@NgModule({
  declarations: [AppComponent, QuotesComponent, QuoteDetailComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
