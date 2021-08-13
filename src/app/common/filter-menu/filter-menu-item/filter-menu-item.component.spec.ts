import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMenuItemComponent } from './filter-menu-item.component';

describe('FilterMenuItemComponent', () => {
  let component: FilterMenuItemComponent;
  let fixture: ComponentFixture<FilterMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should emmit a boolean WHEN call toggle method', () => {
    // Arrange
    const spyEmit = jest.spyOn(component.emitTogglePanel, 'emit' );
    const spyToggle = jest.spyOn(component, 'toggle' );

    // Act
    component.toggle();

    // Assert
    expect(spyToggle).toHaveBeenCalled();
    expect(spyEmit).toHaveBeenCalledWith(true);
  });
});
