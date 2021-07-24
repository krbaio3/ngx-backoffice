import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdHocReportsComponent } from './ad-hoc-reports.component';

const routes: Routes = [
  {
    path: '',
    component: AdHocReportsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdHocReportsRoutingModule {}
