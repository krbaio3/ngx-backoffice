import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  {
    path: 'docs',
    loadChildren: () =>
      import('./pods/documentation/documentation-routing.module').then(
        (m) => m.DocumentationRoutingModule,
      ),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./pods/main/main-routing.module').then(
        (m) => m.MainRoutingModule,
      ),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./pods/account/account-routing.module').then(
        (m) => m.AccountRoutingModule,
      ),
  },
  {
    path: 'advanced-queries',
    loadChildren: () =>
      import('./pods/advanced-queries/advanced-queries.module').then(
        (m) => m.AdvancedQueriesModule,
      ),
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
