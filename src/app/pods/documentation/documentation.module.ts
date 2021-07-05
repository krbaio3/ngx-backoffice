import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './documentation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DocumentationComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [DocumentationComponent]
})
export class DocumentationModule { }
