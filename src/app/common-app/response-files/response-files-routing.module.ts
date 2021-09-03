import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponseFilesComponent } from './response-files.component';

const routes: Routes = [
  {
    path: '',
    component: ResponseFilesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponseFilesRoutingModule {}
