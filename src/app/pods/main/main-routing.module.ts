import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: 'reporting',
    children: [
      { path: 'summary', component: MainComponent },
      { path: 'processed', component: MainComponent },
      { path: 'pending', component: MainComponent },
      { path: 'error', component: MainComponent },
    ],
  },
  {
    path: 'output',
    children: [{ path: 'response', component: MainComponent }],
  },
  {
    path: 'input',
    children: [{ path: 'upload', component: MainComponent }],
  },
  {
    path: 'search',
    children: [
      { path: 'contacts', component: MainComponent },
      { path: 'inactive', component: MainComponent },
      { path: 'transactions', component: MainComponent },
      { path: 'valuation', component: MainComponent },
      { path: 'codes', component: MainComponent },
      { path: 'modification', component: MainComponent },
      { path: 'portability', component: MainComponent },
      { path: 'positions', component: MainComponent },
      { path: 'trades', component: MainComponent },
      // { path: 'transactions', component: SummaryComponent },
    ],
  },
  {
    path: 'reports',
    children: [
      { path: 'daily', component: MainComponent },
      { path: 'weekly', component: MainComponent },
      { path: 'monthly', component: MainComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
