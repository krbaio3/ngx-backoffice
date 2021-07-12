import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMenuComponent } from './filter-menu.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { DatePickerRangeComponent } from '../date-picker-range/date-picker-range.component';
import { FilterMenuItemComponent } from './filter-menu-item/filter-menu-item.component';
import { SelectComponent } from '../select/select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FilterMenuComponent', () => {
  let component: FilterMenuComponent;
  let fixture: ComponentFixture<FilterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        FilterMenuComponent,
        DatePickerRangeComponent,
        FilterMenuItemComponent,
        SelectComponent
      ],
      imports: [
        MatExpansionModule,
        NoopAnimationsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('TogglePanel specs', () => {
    test('should have panelState property to falsy WHEN create the component',() => {
      // Arrange
      // Act
      // Assert
      expect(component.panelState).toBeFalsy();
    });
    test('should change panelState value WHEN exec togglePanel function', () => {
      // Arrange
      // Act
      component.togglePanel();
      // Assert
      expect(component.panelState).toBeTruthy();
    });
  });

  describe('HandlerPanel specs', () => {
    test('should change panelState value to true WHEN exec handlerOpened function',() => {
      // Arrange
      // Act
      component.handlerOpened();
      // Assert
      expect(component.panelState).toBeTruthy();
    });

    test('should change panelState value to false WHEN exec handlerClosed function',() => {
      // Arrange
      component.panelState = true;
      // Act
      component.handlerClosed();
      // Assert
      expect(component.panelState).toBeFalsy();
    });
  });
});
