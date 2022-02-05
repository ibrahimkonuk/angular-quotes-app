import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './components/quotes/quotes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuoteDetailComponent } from './components/quote-detail/quote-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'detail/:id', component: QuoteDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
