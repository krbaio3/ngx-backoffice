/* Angular Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Custom Modules */
import { DocumentationRoutingModule } from './documentation-routing.module';

/* Custom Components */
import { DocumentationComponent } from './documentation.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [DocumentationComponent],
  imports: [
    CommonModule,
    RouterModule,
    DocumentationRoutingModule,
    MatCardModule,
  ],
  exports: [DocumentationComponent]
})
export class DocumentationModule { }
