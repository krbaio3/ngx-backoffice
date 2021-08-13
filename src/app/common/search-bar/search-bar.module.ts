import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchBarComponent } from './search-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FlexLayoutModule],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
