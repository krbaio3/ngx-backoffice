import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidesComponent } from '../../common-app/';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'guides', component: GuidesComponent },
      { path: 'handbooks', component: GuidesComponent },
      { path: 'schemas', component: GuidesComponent },
      { path: 'legal', component: GuidesComponent },
      { path: 'pricing', component: GuidesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentationRoutingModule {}
