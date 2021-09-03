import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingListComponent } from './ranking-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SalesListComponent', () => {
  let component: RankingListComponent;
  let fixture: ComponentFixture<RankingListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ RankingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test(`should change the value of property showLoader to true and
    in 2000 ms to false WHEN call reload method`, async () => {
    jest.useFakeTimers();

    const spy = jest.spyOn(window, 'setTimeout');

    // Act
    component.reload();

    // Assert
    expect(component.showLoader).toBeTruthy();

    // Act
    jest.runOnlyPendingTimers();

    // Assert
    expect(spy).toHaveBeenCalled();
    expect(component.showLoader).toBeFalsy();
  });
});
