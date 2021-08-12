import { CapitalizeSpacePipe } from './capitalize-space.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TransformObjectPipe } from './transform-object.pipe';

@NgModule({
  declarations: [CapitalizeSpacePipe, TransformObjectPipe],
  imports: [CommonModule],
  exports: [CapitalizeSpacePipe, TransformObjectPipe],
})
export class CustomPipesModule {}
