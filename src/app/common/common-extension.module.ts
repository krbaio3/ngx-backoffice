/* Angular Module/Components */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';

/* Three Party*/
import { NgScrollbarModule } from 'ngx-scrollbar';

/* Custom Modules/Components */
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { ToolbarNotificationComponent } from './toolbar-notification/toolbar-notification.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuItemComponent } from './side-menu-item/side-menu-item.component';
import { SideMenuOnlyItemComponent } from './side-menu-item/side-menu-only-item.component';
import { SideMenuAccordionItemComponent } from './side-menu-item/side-menu-accordion-item.component';
import { CapitalizeSpacePipe } from './pipe/capitalize-space.pipe';
import { TransformObjectPipe } from './pipe/transform-object.pipe';

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
  ],
})
export class CommonExtensionModule {}
