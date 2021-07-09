import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInformationComponent } from '../../common-app';

const routes: Routes = [
  {
    path: '',
    children: [{ path: 'user', component: UserInformationComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
