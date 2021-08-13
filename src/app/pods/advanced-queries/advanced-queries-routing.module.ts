import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedQueriesComponent } from './advanced-queries.component';

const routes: Routes = [
  {
    path: 'advanced-queries',
    component: AdvancedQueriesComponent,
    children: [
      {
        path: 'reports',
        loadChildren: () =>
          import('../../common-app/ad-hoc-reports/ad-hoc-reports.module').then(
            (m) => m.AdHocReportsModule,
          ),
      },
      {
        path: 'filters',
        loadChildren: () =>
          import(
            '../../common-app/advanced-filters/advanced-filters.module'
          ).then((m) => m.AdvancedFiltersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancedQueriesRoutingModule {}
