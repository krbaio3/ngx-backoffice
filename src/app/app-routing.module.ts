import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  {
    path: 'docs',
    loadChildren: () =>
      import('./core/sidenav/sidenav.module').then((m) => m.SidenavModule),
  },
  // {
  //   path: '',
  //   component: DashboardComponent,
  //   children: [
  //     {
  //       path: 'docs',
  //       component: DocumentationComponent,
  //       children: [
  //         { path: 'guides', component: GuidesComponent },
  //         // { path: 'componentB', component: BComponent },
  //         // { path: 'componentC', component: CComponent },
  //       ],
  //     },
  //   ],
  // },
  // ...dashboardRoutes,
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: !environment.production }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
