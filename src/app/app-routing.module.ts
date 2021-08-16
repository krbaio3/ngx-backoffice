import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  {
    path: 'main',
    loadChildren: () =>
      import('./pods/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'advanced-queries',
    loadChildren: () =>
      import('./pods/advanced-queries/advanced-queries.module').then(
        (m) => m.AdvancedQueriesModule,
      ),
  },
  {
    path: 'benchmark',
    loadChildren: () =>
      import('./pods/benchmark/benchmark.module').then(
        (m) => m.BenchmarkModule,
      ),
  },
  {
    path: 'docs',
    loadChildren: () =>
      import('./pods/documentation/documentation.module').then(
        (m) => m.DocumentationModule,
      ),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./pods/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./pods/account/account.module').then((m) => m.AccountModule),
  },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { enableTracing: !environment.production }),
    RouterModule.forRoot(routes, { enableTracing: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
