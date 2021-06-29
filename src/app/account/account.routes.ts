import { Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { UserInformationComponent } from '../core/user-information/user-information.component';

export const accountRoutes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      {
        path: '',
        // component: MainComponent,
        children: [
          {
            path: 'user',
            component: UserInformationComponent,
          },
        ],
      },
      // { path: 'componentB', component: BComponent },
      // { path: 'componentC', component: CComponent },
    ],
  },
];
