import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import { FailsComponent } from './fails.component';
import { FailsService } from './fails.service';
import { rankingListTemporal, tableLogsTemporal } from './api.temporal';
import exp from 'constants';

describe('FailsComponent', () => {
  let component: FailsComponent;
  let fixture: ComponentFixture<FailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ FailsComponent ],
      providers: [FailsService, DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should set properties WHEN call ngOnInit',  () => {
    // Arrange
    // Act
    component.ngOnInit();

    // Assert
    expect(component.rankingList).toEqual(rankingListTemporal);
    expect(component.dataSource).toEqual(tableLogsTemporal);
    expect(component.typeTimeVariationChart).toEqual('line');
    expect(component.typeErrorGlobalChart).toEqual('polarArea');
  });
});
