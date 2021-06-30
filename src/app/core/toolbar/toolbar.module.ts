/* Angular Modules/Components*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

/* Custom Modules*/
import { CommonExtensionModule } from '../../common';

/*Custom Components*/
import { ToolbarComponent } from './toolbar.component';

/*Custom Service*/
import { ToolbarService } from './toolbar.service';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule,
    FlexLayoutModule,
    CommonExtensionModule,
    HttpClientModule,
  ],
  providers: [ToolbarService],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
