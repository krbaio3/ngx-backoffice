import { AdvancedQueriesComponent } from './advanced-queries.component';
import { AdvancedQueriesRoutingModule } from './advanced-queries-routing.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AdvancedQueriesComponent],
  imports: [CommonModule, MatCardModule, AdvancedQueriesRoutingModule],
})
export class AdvancedQueriesModule {}
