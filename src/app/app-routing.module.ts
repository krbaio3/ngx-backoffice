import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuidesComponent } from './core/guides/guides.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { dashboardRoutes } from './dashboard/dashboard.routes';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
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
  ...dashboardRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
