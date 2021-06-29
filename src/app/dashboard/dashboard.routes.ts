import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { documentationRoutes } from '../documentation/documentation.routes';
import { mainRoutes } from '../main/main.routes';
import { accountRoutes } from '../account/account.routes';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [...mainRoutes, ...documentationRoutes, ...accountRoutes],
  },
];
