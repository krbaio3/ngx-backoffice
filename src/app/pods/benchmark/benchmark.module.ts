import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenchmarkRoutingModule } from './benchmark-routing.module';
import { BenchmarkComponent } from './benchmark.component';

@NgModule({
  declarations: [BenchmarkComponent],
  imports: [CommonModule, BenchmarkRoutingModule],
})
export class BenchmarkModule {}
