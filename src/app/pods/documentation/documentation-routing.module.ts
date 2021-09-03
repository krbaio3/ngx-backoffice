import { DocumentationComponent } from './documentation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: 'guides',
        loadChildren: () => import('../../common-app/guides/guides.module').then(
          (m) => m.GuidesModule),
      },
      {
        path: 'handbooks',
        loadChildren: () => import('../../common-app/guides/guides.module').then(
          (m) => m.GuidesModule),
      },
      {
        path: 'schemas',
        loadChildren: () => import('../../common-app/guides/guides.module').then(
          (m) => m.GuidesModule),
      },
      {
        path: 'legal',
        loadChildren: () => import('../../common-app/guides/guides.module').then(
          (m) => m.GuidesModule),
      },
      {
        path: 'pricing',
        loadChildren: () => import('../../common-app/guides/guides.module').then(
          (m) => m.GuidesModule),
      },
    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentationRoutingModule {}
