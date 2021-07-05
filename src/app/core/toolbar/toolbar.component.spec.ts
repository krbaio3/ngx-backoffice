import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input, NO_ERRORS_SCHEMA, SecurityContext } from '@angular/core';
import { ToolbarService } from './toolbar.service';
import { MatIcon, MatIconModule, MatIconRegistry } from '@angular/material/icon';
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
  SafeScript,
  SafeStyle,
  SafeUrl,
  SafeValue,
} from '@angular/platform-browser';
import { SidenavService } from '../sidenav/sidenav.service';
import { FlexLayoutModule, MediaObserver } from '@angular/flex-layout';
import { currentUserInit } from '../../common/user-avatar/user-avatar.model';
import { ToolbarComponent } from './toolbar.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { CommonExtensionModule } from '../../common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let service: ToolbarService;
  let spyService: jest.SpyInstance;

  @Component({
    selector: 'mat-icon',
    template: '<span></span>'
  })
  class MockMatIconComponent {
    @Input() svgIcon: any;
    @Input() fontSet: any;
    @Input() fontIcon: any;
  }

  beforeEach( (async () => {
    const toolbarServiceStub = () => ({
      getNotifications: (id: any) => ({ pipe: () => ({ subscribe: (f: any) => ([]) }) })
    });
    const matIconRegistryStub = () => ({
      addSvgIcon: (business_logo: any, arg: any) => ({}),
    });
    const domSanitizerStub = () => ({
      bypassSecurityTrustResourceUrl: (t: string) => ({}),
      sanitize: (...args: any[])=> ({})
    });
    const sidenavServiceStub = () => ({
      toggle: () => ({}),
      open: () => ({}),
      close: () => ({})
    });
    const mediaObserverStub = () => ({
      asObservable: () => ({
        pipe: () => ({ pipe: () => ({ subscribe: (f: any) => f({}) }) })
      }),
      isActive: (f: string) => ({})
    });
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ToolbarComponent],
      imports: [
        CommonModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        RouterTestingModule,
        FlexLayoutModule,
        CommonExtensionModule,
        HttpClientTestingModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: ToolbarService, useFactory: toolbarServiceStub },
        { provide: MatIconRegistry, useFactory: matIconRegistryStub },
        { provide: DomSanitizer, useFactory: domSanitizerStub },
        { provide: SidenavService, useFactory: sidenavServiceStub },
        { provide: MediaObserver, useFactory: mediaObserverStub }
      ]
    }).overrideModule(MatIconModule, {
      remove: {
        declarations: [MatIcon],
        exports: [MatIcon]
      },
      add: {
        declarations: [MockMatIconComponent],
        exports: [MockMatIconComponent]
      }
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    service = TestBed.inject(ToolbarService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`matDrawerShow has default value`, () => {
    expect(component.matDrawerShow).toEqual(false);
  });

  it(`currentUser has default value`, () => {
    expect(component.currentUser).toEqual(currentUserInit);
  });

  it(`searchOpen has default value`, () => {
    expect(component.searchOpen).toEqual(false);
  });

  // it(`notification has default value`, () => {
  //
  //   expect(service).toBeTruthy();
  //   // service.getNotifications()
  //   // spyService = jest.spyOn(component, 'callToGetNotifications')
  //   //   .mockImplementation(
  //   //     (id: any) => ({})
  //   //   );
  //
  //   spyService = jest.spyOn(service, 'getNotifications').mockReturnValue(of([]));
  //   // fixture.debugElement.injector(service)
  //   component.ngOnInit();
  //   fixture.detectChanges();
  //
  //   // toolbarServiceStub = () => ({
  //   //   getNotifications: (id: any) => ({ pipe: () => ({ subscribe: (f: any) => of([]) }) })
  //   // });
  //   // spyService = jest.spyOn(service, 'getNotifications');
  //   // const spy = spyService.mockReturnValue([]);
  //   expect(spyService).toHaveBeenCalledTimes(1);
  //   // component.ngOnInit();
  //   expect(component.notification).toEqual([]);
  // });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const mediaObserverStub: MediaObserver = fixture.debugElement.injector.get(
        MediaObserver
      );
      jest.spyOn(component, 'toggleView');
      jest.spyOn(component, 'callToGetNotifications');
      jest.spyOn(mediaObserverStub, 'asObservable');
      component.ngOnInit();
      expect(component.toggleView).toHaveBeenCalled();
      expect(component.callToGetNotifications).toHaveBeenCalled();
      expect(mediaObserverStub.asObservable).toHaveBeenCalled();
    });
  });

  describe('handlerButtonSidenav', () => {
    it('makes expected calls', () => {
      const sidenavServiceStub: SidenavService = fixture.debugElement.injector.get(
        SidenavService
      );
      jest.spyOn(sidenavServiceStub, 'toggle');
      component.handlerButtonSidenav();
      expect(sidenavServiceStub.toggle).toHaveBeenCalled();
    });
  });

  describe('toggleView', () => {
    it('makes expected calls', () => {
      const sidenavServiceStub: SidenavService = fixture.debugElement.injector.get(
        SidenavService
      );
      const mediaObserverStub: MediaObserver = fixture.debugElement.injector.get(
        MediaObserver
      );
      jest.spyOn(sidenavServiceStub, 'open');
      jest.spyOn(mediaObserverStub, 'isActive');
      component.toggleView();
      expect(sidenavServiceStub.open).toHaveBeenCalled();
      expect(mediaObserverStub.isActive).toHaveBeenCalled();
    });
  });
});
