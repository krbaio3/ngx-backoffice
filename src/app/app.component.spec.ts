import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppInitService } from './app-init.service';
import { MediaObserver } from '@angular/flex-layout';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { currentUserInit } from './common/user-avatar/user-avatar.model';
import { AuthAppService } from "./auth/auth.service";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    const mediaObserverStub = () => ({
      asObservable: () => ({ subscribe: (f: any) => f({}) }),
      isActive: (f: string) => ({})
    });
    const appInitServiceStub = () => ({ sidenavMenu: {}, userAvatarData: {} });
    const authAppServiceStub = () => ({logoutKeycloak: ()=> ({})});
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [
        { provide: MediaObserver, useFactory: mediaObserverStub },
        { provide: AppInitService, useFactory: appInitServiceStub },
        { provide: AuthAppService, useFactory: authAppServiceStub }
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`matDrawerShow has default value`, () => {
    expect(component.matDrawerShow).toEqual(true);
  });

  it(`menuItems has default value`, () => {
    expect(component.menuItems).toEqual([]);
  });

  it(`currentUser has default value`, () => {
    expect(component.currentUser).toEqual(currentUserInit);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const mediaObserverStub: MediaObserver = fixture.debugElement.injector.get(
        MediaObserver
      );
      jest.spyOn(component, 'toggleView');
      jest.spyOn(mediaObserverStub, 'asObservable');
      component.ngOnInit();
      expect(component.toggleView).toHaveBeenCalled();
      expect(mediaObserverStub.asObservable).toHaveBeenCalled();
    });
  });

  describe('toggleView', () => {
    it('makes expected calls', () => {
      const mediaObserverStub: MediaObserver = fixture.debugElement.injector.get(
        MediaObserver
      );
      jest.spyOn(mediaObserverStub, 'isActive');
      component.toggleView();
      expect(mediaObserverStub.isActive).toHaveBeenCalled();
    });
  });
});
