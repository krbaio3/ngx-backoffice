import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInformationComponent } from '../../common-app';
import { AccountComponent } from './account.component';

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
