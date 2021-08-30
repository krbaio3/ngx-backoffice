import { BenchmarkComponent } from './benchmark.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BenchmarkComponent,
    children: [
      {
        path: 'fails',
        loadChildren: () =>
          import('../../common-app/fails/fails.module').then(
            (m) => m.FailsModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BenchmarkRoutingModule {}
