import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';

import { CapitalizeSpacePipe } from './pipe/capitalize-space.pipe';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from '@atmira/pattern-lib';
import { DatePickerRangeModule } from './date-picker-range/date-picker-range.module';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { FilterMenuItemComponent } from './filter-menu/filter-menu-item/filter-menu-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MediaItemComponent } from './media-item/media-item.component';
/* Angular Module/Components */
import { NgModule } from '@angular/core';
/* Three Party*/
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
/* Custom Modules/Components */
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SelectComponent } from './select/select.component';
import { SideMenuAccordionItemComponent } from './side-menu-item/side-menu-accordion-item.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuItemComponent } from './side-menu-item/side-menu-item.component';
import { SideMenuOnlyItemComponent } from './side-menu-item/side-menu-only-item.component';
import { ToolbarNotificationComponent } from './toolbar-notification/toolbar-notification.component';
import { TransformObjectPipe } from './pipe/transform-object.pipe';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { UserMenuComponent } from './user-menu/user-menu.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    FullscreenComponent,
    ToolbarNotificationComponent,
    UserMenuComponent,
    UserAvatarComponent,
    SideMenuComponent,
    SideMenuItemComponent,
    SideMenuOnlyItemComponent,
    SideMenuAccordionItemComponent,
    CapitalizeSpacePipe,
    TransformObjectPipe,
    FilterMenuComponent,
    MediaItemComponent,
    FilterMenuItemComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatListModule,
    ScrollingModule,
    NgScrollbarModule,
    RouterModule,
    MatChipsModule,
    MatExpansionModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    DatePickerModule,
    DatePickerRangeModule,
  ],
  exports: [
    SearchBarComponent,
    FullscreenComponent,
    ToolbarNotificationComponent,
    UserMenuComponent,
    UserAvatarComponent,
    SideMenuComponent,
    SideMenuItemComponent,
    SideMenuOnlyItemComponent,
    SideMenuAccordionItemComponent,
    CapitalizeSpacePipe,
    TransformObjectPipe,
    FilterMenuComponent,
    MediaItemComponent,
    FilterMenuItemComponent,
    SelectComponent,
  ],
})
export class CommonExtensionModule {}
