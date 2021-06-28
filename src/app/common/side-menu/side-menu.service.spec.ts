import { TestBed } from '@angular/core/testing';

import { SideMenuService } from './side-menu.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { menus } from './menu-element';
import { of } from 'rxjs';
import DoneCallback = jest.DoneCallback;

describe('SideMenuService', () => {
  let service: SideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(SideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should return a MenuElement[] WHEN call to getSideMenu method', (done:DoneCallback) => {
    // Arrange
    const spyGetSideMenu = jest.spyOn(service, 'getSideMenu');
    // Act
    service.getSideMenu().subscribe(data => {
      // Assert
      expect(data).toEqual(menus);
      expect(spyGetSideMenu).toHaveBeenCalled();
      expect(spyGetSideMenu).toHaveBeenCalledTimes(1);
      done()
    });
  });
});
