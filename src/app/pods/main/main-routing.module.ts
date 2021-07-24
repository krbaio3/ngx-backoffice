import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: 'reporting',
    children: [{ path: 'summary', component: MainComponent }],
  },
  {
    path: 'output',
    children: [{ path: 'response', component: MainComponent }],
  },
  {
    path: 'input',
    children: [{ path: 'upload', component: MainComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
