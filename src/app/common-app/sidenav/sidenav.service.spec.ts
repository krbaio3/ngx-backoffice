import { TestBed } from '@angular/core/testing';

import { SidenavService } from './sidenav.service';
import { MatSidenav} from '@angular/material/sidenav';
import exp from 'constants';
import { of } from 'rxjs';
import DoneCallback = jest.DoneCallback;

jest.mock('@angular/material/sidenav', () => {
  const original = jest.requireActual('@angular/material/sidenav');
  return {
    ...original,
    MatSidenav: {
      close: ()=> false,
      open: ()=> true,
    }
  }
});

describe('SidenavService', () => {
  let service: SidenavService;
  let matSidenav: MatSidenav;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavService);
    matSidenav = MatSidenav as any as MatSidenav;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  test('should open the sidenav WHEN call to open method', async () => {
    // Arrange
    service.setSidenav(matSidenav);
    const spySidenavOpen = jest.spyOn(service, 'open')

    // Act
    const open = await service.open();

    // Assert
    expect(spySidenavOpen).toHaveBeenCalledTimes(1);
    expect(open).toBeTruthy();
  });
  test('should close the sidenav WHEN call to close method', async () => {
    // Arrange
    service.setSidenav(matSidenav);
    const spySidenavClose = jest.spyOn(service, 'close');

    // Act
    const close = await service.close();

    // Assert
    expect(spySidenavClose).toHaveBeenCalledTimes(1);
    expect(close).toBeFalsy();
  });

  test('should emmit a observable WHEN call to toggle method', (done: DoneCallback) => {
    // Arrange
    service.setSidenav(matSidenav);
    const spySideNav = jest.spyOn(service, 'toggle');
    // Act
    const toggle$ = service.sideNavToggleSubject;

    let count = 1;

    // Assert
    toggle$.subscribe(() => {});
    expect(toggle$.getValue()).toBeUndefined();

    service.toggle()
    expect(toggle$.getValue()).toBeTruthy();
    done();

  });
});
