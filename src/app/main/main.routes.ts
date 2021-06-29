import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { SummaryComponent } from '../core/summary/summary.component';

export const mainRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'reporting',
        // component: MainComponent,
        children: [
          {
            path: 'summary',
            component: SummaryComponent,
          },
        ],
      },
      // { path: 'componentB', component: BComponent },
      // { path: 'componentC', component: CComponent },
    ],
  },
];
