import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { CommonExtensionModule } from '../../common/common-extension.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    CommonExtensionModule,
    FlexLayoutModule,
  ],
  exports: [SidenavComponent],
})
export class SidenavModule {}
