import { Routes } from '@angular/router';
import { DocumentationComponent } from './documentation.component';
import { GuidesComponent } from '../core/guides/guides.component';

export const documentationRoutes: Routes = [
  {
    path: 'docs',
    component: DocumentationComponent,
    children: [
      { path: 'guides', component: GuidesComponent },
      // { path: 'componentB', component: BComponent },
      // { path: 'componentC', component: CComponent },
    ],
  },
];
