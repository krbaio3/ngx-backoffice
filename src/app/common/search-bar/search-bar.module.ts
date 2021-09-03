/* Angular Modules*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

/* Custom Components */
import { SearchBarComponent } from './search-bar.component';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FlexLayoutModule],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
