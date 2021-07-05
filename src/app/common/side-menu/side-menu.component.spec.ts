import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuComponent } from './side-menu.component';
import { of } from 'rxjs';
import { menuMock } from './test/sidenav.mock';
import { SideMenuItemComponent } from '../side-menu-item/side-menu-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { SideMenuOnlyItemComponent } from '../side-menu-item/side-menu-only-item.component';
import { SideMenuAccordionItemComponent } from '../side-menu-item/side-menu-accordion-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { SidenavModel } from './sidenav.model';

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
        MatFormFieldModule,
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
