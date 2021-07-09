import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from '../../common-app/';

const routes: Routes = [
  {
    path: 'reporting',
    children: [
      { path: 'summary', component: SummaryComponent },
      { path: 'processed', component: SummaryComponent },
      { path: 'pending', component: SummaryComponent },
      { path: 'error', component: SummaryComponent },
    ],
  },
  {
    path: 'output',
    children: [{ path: 'response', component: SummaryComponent }],
  },
  {
    path: 'search',
    children: [
      { path: 'contacts', component: SummaryComponent },
      { path: 'inactive', component: SummaryComponent },
      { path: 'transactions', component: SummaryComponent },
      { path: 'valuation', component: SummaryComponent },
      { path: 'codes', component: SummaryComponent },
      { path: 'modification', component: SummaryComponent },
      { path: 'portability', component: SummaryComponent },
      { path: 'positions', component: SummaryComponent },
      { path: 'trades', component: SummaryComponent },
      // { path: 'transactions', component: SummaryComponent },
    ],
  },
  {
    path: 'reports',
    children: [
      { path: 'daily', component: SummaryComponent },
      { path: 'weekly', component: SummaryComponent },
      { path: 'monthly', component: SummaryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
