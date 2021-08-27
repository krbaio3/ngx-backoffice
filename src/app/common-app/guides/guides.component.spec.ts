import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesComponent } from './guides.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GuidesComponent', () => {
  let component: GuidesComponent;
  let fixture: ComponentFixture<GuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ GuidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should change the property showTable to true WHEN call handlerEmitterSelect method', async () => {
    // Arrange
    //compruebo que la propiedad showTable está inicializada a false
    expect(component.showTable).toBeFalsy();
    // Act
    component.handlerEmitterSelect('paco');
    // Assert
    expect(component.showTable).toBeTruthy();
  });

  test('should change the property showTable to false WHEN call handlerEmitterSelect method with ""', async () => {
    // Arrange
    //compruebo que la propiedad showTable está inicializada a false
    expect(component.showTable).toBeFalsy();
    // Act
    component.handlerEmitterSelect('');
    // Assert
    expect(component.showTable).toBeFalsy();
  });
});
