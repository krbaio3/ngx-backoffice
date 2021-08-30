/* Angular Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Custom Modules */
import { BenchmarkRoutingModule } from './benchmark-routing.module';
import { MatCardModule } from '@angular/material/card';

/* Custom Components */
import { BenchmarkComponent } from './benchmark.component';

@NgModule({
  declarations: [BenchmarkComponent],
  imports: [CommonModule, RouterModule, BenchmarkRoutingModule, MatCardModule],
  exports: [BenchmarkComponent],
})
export class BenchmarkModule {}
