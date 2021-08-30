import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FailsComponent } from './fails.component';

const routes: Routes = [
  {
    path: '',
    component: FailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FailsRoutingModule {}
