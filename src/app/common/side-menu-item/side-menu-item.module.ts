import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SideMenuAccordionItemComponent } from './side-menu-accordion-item.component';
import { SideMenuItemComponent } from './side-menu-item.component';
import { SideMenuOnlyItemComponent } from './side-menu-only-item.component';

@NgModule({
  declarations: [
    SideMenuItemComponent,
    SideMenuOnlyItemComponent,
    SideMenuAccordionItemComponent,
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    RouterModule,
    MatChipsModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  exports: [
    SideMenuItemComponent,
    SideMenuOnlyItemComponent,
    SideMenuAccordionItemComponent,
  ],
})
export class SideMenuItemModule {}
