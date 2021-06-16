import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarService } from './toolbar.service';
import { CommonExtensionModule } from '../../common/common-extension.module';
import { FullscreenComponent } from '../../common/fullscreen/fullscreen.component';
import { SearchBarComponent } from '../../common/search-bar/search-bar.component';
import { ToolbarNotificationComponent } from '../../common/toolbar-notification/toolbar-notification.component';
import { UserMenuComponent } from '../../common/user-menu/user-menu.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarComponent,
        // FullscreenComponent,
        // SearchBarComponent,
        // ToolbarNotificationComponent,
        // UserMenuComponent
      ],
      imports: [
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        FlexLayoutModule,
        CommonExtensionModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
      ],
      providers: [ToolbarService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    // component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
