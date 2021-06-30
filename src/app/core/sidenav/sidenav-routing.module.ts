import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidesComponent } from '../../common-app/guides/guides.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: 'guides', component: GuidesComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidenavRoutingModule {}
