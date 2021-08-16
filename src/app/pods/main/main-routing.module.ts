import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: 'reporting',
    component: MainComponent,
    children: [
      {
        path: 'summary',
        loadChildren: () =>
          import('../../common-app/summary/summary.module').then(
            (m) => m.SummaryModule,
          ),
      },
    ],
  },
  {
    path: 'output',
    component: MainComponent,
    children: [
      {
        path: 'response',
        loadChildren: () =>
          import('../../common-app/summary/summary.module').then(
            (m) => m.SummaryModule,
          ),
      },
    ],
  },
  {
    path: 'input',
    component: MainComponent,
    children: [
      {
        path: 'upload',
        loadChildren: () =>
          import('../../common-app/summary/summary.module').then(
            (m) => m.SummaryModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
