import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    children: [{ path: 'user', component: AccountComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
