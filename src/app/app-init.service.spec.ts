import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AppInitService } from './app-init.service';
import { CurrentUser } from './common/user-avatar/user-avatar.model';
import { HttpErrorResponse } from '@angular/common/http';
import { SidenavModel } from './common/side-menu/sidenav.model';
import { TestBed } from '@angular/core/testing';
import mockConsole from 'jest-mock-console';
import { sidenavMock } from './utils/test/sidenav.mock';
import { userAvatarMock } from './utils/test/user-avatar.mock';

import SpyInstance = jest.SpyInstance;

describe('AppService', () => {
  let service: AppInitService;
  let httpMock: HttpTestingController;
  let spySideNavMenuLoad: SpyInstance;
  let spyUserAvatarLoad: SpyInstance;
  let restoreConsole: any;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AppInitService);
    spySideNavMenuLoad = jest.spyOn(service, 'sidenavMenuLoad');
    spyUserAvatarLoad = jest.spyOn(service, 'userAvatarLoad');
    restoreConsole = mockConsole()
  });

  afterEach(() => {
    restoreConsole();
    httpMock.verify();
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should call to sidenavMenuLoad and return a sidenavMenuLoad data WHEN call to "assets/json/sidenav.json"', () => {
    // Arrange
    // Espía subido arriba

    // Act
    service.sidenavMenuLoad().then(data => expect(data).toEqual(sidenavMock.data));

    // Assert
    const req = httpMock.expectOne('assets/json/sidenav.json');
    expect(req.request.method).toBe('GET');
    req.flush(sidenavMock);
    expect(spySideNavMenuLoad).toHaveBeenCalledTimes(1);
  });

  test('should call to sidenavMenuLoad and return a sidenavMenuLoad data WHEN call to "assets/json/user-avatar.json', () => {
    // Arrange
    // Espía subido arriba
    // Act
    service.userAvatarLoad().then(data => expect(data).toEqual(userAvatarMock.data));

    // Assert
    const req = httpMock.expectOne('assets/json/user-avatar.json');
    expect(req.request.method).toBe('GET');
    req.flush(userAvatarMock);
    expect(spyUserAvatarLoad).toHaveBeenCalledTimes(1);
  });

  test('should set the sidenavMenu variable WHEN call to sidenavMenuLoad', () => {
    // Arrange
    // Espía subido arriba

    // Act
    service.sidenavMenuLoad().then((data: SidenavModel[]) => {
      expect(data).toEqual(sidenavMock.data);
      expect(service.sidenavMenu).toEqual(sidenavMock.data);
    });

    // Assert
    const req = httpMock.expectOne('assets/json/sidenav.json');
    expect(req.request.method).toBe('GET');
    req.flush(sidenavMock);
    expect(spySideNavMenuLoad).toHaveBeenCalledTimes(1);
  });

  test('should set the userAvatarData variable WHEN call to userAvatarLoad', () => {
    // Arrange
    // Espía subido arriba
    // Act
    service.userAvatarLoad().then((data: CurrentUser) => {
      expect(data).toEqual(userAvatarMock.data);
      expect(service.userAvatarData).toEqual(userAvatarMock.data);
    });

    // Assert
    const req = httpMock.expectOne('assets/json/user-avatar.json');
    expect(req.request.method).toBe('GET');
    req.flush(userAvatarMock);
    expect(spyUserAvatarLoad).toHaveBeenCalledTimes(1);
  });

  // Test with httpError response

  test('should throw error WHEN call to sidenavMenuLoad and return a sidenavMenu is []', () => {
    // Arrange
    // Espía subido arriba
    const errorResponse = new HttpErrorResponse({
      error: 'Sidenav not found',
      status: 404,
      statusText: 'Not Found'
    });

    // Act
    service.sidenavMenuLoad().catch((error)=>{
      expect(service.sidenavMenu).toEqual([]);
      expect(error.url).toEqual('assets/json/sidenav.json');
    });

    // Assert
    const req = httpMock.expectOne('assets/json/sidenav.json');
    req.error(new ErrorEvent('sidenav data not found'), errorResponse);
    expect(req.request.method).toBe('GET');
    // req.flush([]);
    expect(spySideNavMenuLoad).toHaveBeenCalledTimes(1);
  });

  test('should throw error WHEN call to userAvatarLoad and return a userAvatar empty', () => {
    // Arrange
    // Espía subido arriba
    const errorResponse = new HttpErrorResponse({
      error: 'userAvatar not found',
      status: 404,
      statusText: 'Not Found'
    });
    const userEmpty: CurrentUser = {
      id: '',
      name: '',
      photoURL: '',
      lastName: '',
    }

    // Act
    service.userAvatarLoad().catch((error)=>{
      expect(service.userAvatarData).toEqual(userEmpty);
      expect(error.url).toEqual('assets/json/user-avatar.json');
    });

    // Assert
    const req = httpMock.expectOne('assets/json/user-avatar.json');
    req.error(new ErrorEvent('userAvatar data not found'), errorResponse);
    expect(req.request.method).toBe('GET');
    expect(spyUserAvatarLoad).toHaveBeenCalledTimes(1);
  });
});
