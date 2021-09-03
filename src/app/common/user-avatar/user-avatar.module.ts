import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { UserAvatarComponent } from './user-avatar.component';

@NgModule({
  declarations: [UserAvatarComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [UserAvatarComponent],
})
export class UserAvatarModule {}
