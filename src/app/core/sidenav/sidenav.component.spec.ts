import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentUser, currentUserMock } from '../../common/user-avatar/user-avatar.model';
import { FlexLayoutModule, MediaObserver } from '@angular/flex-layout';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RenderResult, render } from '@testing-library/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatButtonModule } from '@angular/material/button';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { RouterTestingModule } from '@angular/router/testing';
import { SidenavComponent } from './sidenav.component';
import { SidenavService } from './sidenav.service';
import { menuMock } from '../../common/side-menu/test/sidenav.mock';

jest.mock('@angular/material/sidenav', ()=>{
  const original = jest.requireActual('@angular/material/sidenav');
  return {
    ...original,
    MatSidenav: jest.fn(),
  }
});

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let service: SidenavService;
  let mockCurrentUser: CurrentUser;

  beforeEach(async () => {
    const sidenavServiceStub = () => ({
      setSidenav: (s: MatSidenav) => ({}),
      sideNavToggleSubject: { subscribe: (f: any) => f({}) }
    });
    const mediaObserverStub = () => ({
      asObservable: () => ({ subscribe: (f:any) => f({}) }),
      isActive: (f: string) => ({})
    });

    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ SidenavComponent ],
      imports: [
        CommonModule,
        MatSidenavModule,
        MatButtonModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        NgScrollbarModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        { provide: SidenavService, useFactory: sidenavServiceStub },
        { provide: MediaObserver, useFactory: mediaObserverStub }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SidenavService);
    mockCurrentUser = currentUserMock;
    component.sidenav = jest.fn().mockImplementation(() => ({
      toggle: () => {}
    })) as any;
    component.currentUser = mockCurrentUser;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should inject the service SidenavService when SidenavComponent is created', () => {
    expect(service).toBeTruthy();
  });

  test('should set Sidenav WHEN call afterViewInit',  () => {
    // Arrange
    const mockSidenav = {
      toggle: () => ({})
    } as any;
    const spySideNav = jest.spyOn(service, 'setSidenav');
    component.sidenav = mockSidenav;
    fixture.detectChanges();

    // Act
    component.ngOnInit();
    component.ngAfterViewInit();

    // Assert
    expect(spySideNav).toHaveBeenCalledTimes(1);
    expect(spySideNav).toHaveBeenCalledWith(mockSidenav);

  });

  test('should show/hide the Sidenav WHEN click button and trigger handleClickToggle', async () => {
    // Arrange
    const mediaObserverStub: MediaObserver = fixture.debugElement.injector.get(
      MediaObserver
    );
    jest.spyOn(mediaObserverStub, "isActive")
      .mockImplementationOnce(()=> false)
      .mockImplementationOnce(()=> false)
      .mockImplementationOnce(()=> true);
    component.toggleView();
    expect(mediaObserverStub.isActive).toHaveBeenCalled();
    expect(component.iconOnly).toBeTruthy();
    expect(component.fixedTopGap).toEqual(56);
    // Act
    // Assert
  });

  describe("ngOnInit", () => {
    test("makes expected calls", () => {
      const mediaObserverStub: MediaObserver = fixture.debugElement.injector.get(
        MediaObserver
      );
      jest.spyOn(component, "toggleView");
      jest.spyOn(mediaObserverStub, "asObservable");
      component.ngOnInit();
      expect(component.toggleView).toHaveBeenCalled();
      expect(mediaObserverStub.asObservable).toHaveBeenCalled();
    });
  });

  describe("toggleView", () => {
    test("makes expected calls", () => {
      const mediaObserverStub: MediaObserver = fixture.debugElement.injector.get(
        MediaObserver
      );
      jest.spyOn(mediaObserverStub, "isActive");
      component.toggleView();
      expect(mediaObserverStub.isActive).toHaveBeenCalled();
    });
  });
});

describe('Visual Component sidenav', () => {
  let component: RenderResult<SidenavComponent>;

  beforeEach(async () => {
    const sidenavServiceStub = () => ({
      setSidenav: (s: MatSidenav) => ({}),
      sideNavToggleSubject: { subscribe: (f: any) => f({}) }
    });
    const mediaObserverStub = () => ({
      asObservable: () => ({ subscribe: (f:any) => f({}) }),
      isActive: (f: string) => ({})
    });
    component = await render(SidenavComponent, {
      componentProperties: {
        sidenavMenuItems: menuMock,
        currentUser: currentUserMock,
      },
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ SidenavComponent ],
      imports: [
        CommonModule,
        MatSidenavModule,
        MatButtonModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        NgScrollbarModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: SidenavService, useFactory: sidenavServiceStub },
        { provide: MediaObserver, useFactory: mediaObserverStub }
      ]
    });
  });
  test('should render component', async () => {
    // Assert
    const { fixture } = component;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  // xtest('should hide the sidenav WHEN click toggle button', async () => {
  //   // Arrange
  //   const { getByText, fixture } = component;
  //   const spyToggle = jest.spyOn(fixture.componentInstance.sidenav, 'toggle');
  //   const spyHandleClick = jest.spyOn(fixture.componentInstance, 'handleClickToggle');
  //   // Act
  //   fireEvent.click(getByText('Toggle'));
  //   // Assert
  //   expect(spyHandleClick).toHaveBeenCalled();
  //   expect(spyToggle).toHaveBeenCalled();
  // });
});
