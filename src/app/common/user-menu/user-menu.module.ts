import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { UserMenuComponent } from './user-menu.component';

@NgModule({
  declarations: [UserMenuComponent],
  imports: [
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    CommonModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatRippleModule,
    // ScrollingModule,
    // NgScrollbarModule,
    // RouterModule,
    // MatChipsModule,
    // MatExpansionModule,
    // MatMenuModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // ReactiveFormsModule,
    // MatSelectModule,
    // DatePickerModule,
    // DatePickerRangeModule,
  ],
  exports: [UserMenuComponent],
})
export class UserMenuModule {}
