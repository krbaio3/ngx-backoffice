import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { SidenavService } from '../sidenav/sidenav.service';
import { ToolbarService } from './toolbar.service';
import { currentUserInit } from '../../common/user-avatar/user-avatar.model';
import { ToolbarComponent } from './toolbar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(() => {
    const mediaObserverStub = () => ({
      asObservable: () => ({
        pipe: () => ({ pipe: () => ({ subscribe: (f: any) => f({}) }) })
      }),
      isActive: (t: string) => ({})
    });
    const domSanitizerStub = () => ({
      bypassSecurityTrustResourceUrl: (t: string) => ({})
    });
    const matIconRegistryStub = () => ({
      addSvgIcon: (business_logo: any, arg: any | any[]) => ({})
    });
    const sidenavServiceStub = () => ({
      toggle: () => ({}),
      open: () => ({}),
      close: () => ({})
    });
    const toolbarServiceStub = () => ({
      getNotifications: (id: string) => ({ pipe: () => ({ subscribe: (f: any) => f({}) }) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ToolbarComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: MediaObserver, useFactory: mediaObserverStub },
        { provide: DomSanitizer, useFactory: domSanitizerStub },
        { provide: MatIconRegistry, useFactory: matIconRegistryStub },
        { provide: SidenavService, useFactory: sidenavServiceStub },
        { provide: ToolbarService, useFactory: toolbarServiceStub },
      ]
    });
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
  });

  test('can load instance', () => {
    expect(component).toBeTruthy();
  });

  test(`matDrawerShow has default value`, () => {
    expect(component.matDrawerShow).toEqual(false);
  });

  test(`currentUser has default value`, () => {
    expect(component.currentUser).toEqual(currentUserInit);
  });

  test(`searchOpen has default value`, () => {
    expect(component.searchOpen).toEqual(false);
  });

  test(`notification has default value`, () => {
    expect(component.notification).toEqual([]);
  });

  describe('ngOnInit', () => {
    test('makes expected calls', () => {
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
    test('makes expected calls', () => {
      const sidenavServiceStub: SidenavService = fixture.debugElement.injector.get(
        SidenavService
      );
      jest.spyOn(sidenavServiceStub, 'toggle');
      component.handlerButtonSidenav();
      expect(sidenavServiceStub.toggle).toHaveBeenCalled();
    });
  });

  describe('toggleView', () => {
    test('makes expected calls', () => {
      const mediaObserverStub: MediaObserver = fixture.debugElement.injector.get(
        MediaObserver
      );
      const sidenavServiceStub: SidenavService = fixture.debugElement.injector.get(
        SidenavService
      );
      jest.spyOn(mediaObserverStub, 'isActive');
      jest.spyOn(sidenavServiceStub, 'open');
      component.toggleView();
      expect(mediaObserverStub.isActive).toHaveBeenCalled();
      expect(sidenavServiceStub.open).toHaveBeenCalled();
    });

    test('makes expected calls with gt-xs', () => {
      const mediaObserverStub: MediaObserver = fixture.debugElement.injector.get(
        MediaObserver
      );
      const sidenavServiceStub: SidenavService = fixture.debugElement.injector.get(
        SidenavService
      );
      jest.spyOn(mediaObserverStub, 'isActive')
        .mockImplementation(()=> false)
        .mockImplementation(()=> true);
      jest.spyOn(sidenavServiceStub, 'open');
      component.toggleView();
      expect(mediaObserverStub.isActive).toHaveBeenCalled();
      expect(sidenavServiceStub.open).toHaveBeenCalled();
    });

    test('makes expected calls with lt-sm', () => {
      const mediaObserverStub: MediaObserver = fixture.debugElement.injector.get(
        MediaObserver
      );
      const sidenavServiceStub: SidenavService = fixture.debugElement.injector.get(
        SidenavService
      );

      jest.spyOn(mediaObserverStub, 'isActive')
        .mockImplementation((value)=> value == 'lt-sm');

      jest.spyOn(sidenavServiceStub, 'close');
      component.toggleView();
      expect(mediaObserverStub.isActive).toHaveBeenCalled();
      expect(sidenavServiceStub.close).toHaveBeenCalled();
    });
  });
});
