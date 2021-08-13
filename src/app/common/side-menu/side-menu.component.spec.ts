import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { RouterTestingModule } from '@angular/router/testing';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SideMenuAccordionItemComponent } from '../side-menu-item/side-menu-accordion-item.component';
import { SideMenuComponent } from './side-menu.component';
import { SideMenuItemComponent } from '../side-menu-item/side-menu-item.component';
import { SideMenuOnlyItemComponent } from '../side-menu-item/side-menu-only-item.component';
import { SidenavModel } from './sidenav.model';
import { menuMock } from './test/sidenav.mock';
import { of } from 'rxjs';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let menuMock: SidenavModel[];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        SideMenuComponent,
        SideMenuItemComponent,
        SideMenuOnlyItemComponent,
        SideMenuAccordionItemComponent,
      ],
      imports: [
        FlexLayoutModule,
        MatIconModule,
        CommonModule,
        // MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatListModule,
        ScrollingModule,
        NgScrollbarModule,
        MatChipsModule,
        MatExpansionModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ]
      // providers: [SideMenuService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    menuMock = menuMock;
    component.menuItems = menuMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should create menu', () => {
    // Assert
    expect(component.menuItems).toEqual(menuMock);
  });
  it('should show the icons only WHEN iconsOnly is true', async () => {
    // Arrange
    debugElement = fixture.debugElement;
    htmlElement = debugElement.nativeElement;
    fixture.detectChanges();

    // Act
    component.iconOnly = true;
    fixture.detectChanges();

    // Assert
    expect(component.iconOnly).toBeTruthy();
  });
});
