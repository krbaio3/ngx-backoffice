import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { OAuth2LoginComponent } from './auth/oauth2-login.component';
import { OAuth2CallbackComponent } from './auth/oauth2-callback.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  {
    path: 'login',
    component: OAuth2LoginComponent,
  },
  {
    path: 'callback',
    component: OAuth2CallbackComponent,
  },
  {
    path: 'account',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pods/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'advanced-queries',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pods/advanced-queries/advanced-queries.module').then(
        (m) => m.AdvancedQueriesModule,
      ),
  },
  {
    path: 'benchmark',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pods/benchmark/benchmark.module').then(
        (m) => m.BenchmarkModule,
      ),
  },
  {
    path: 'docs',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pods/documentation/documentation.module').then(
        (m) => m.DocumentationModule,
      ),
  },
  {
    path: 'main',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pods/main/main.module').then((m) => m.MainModule),
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
