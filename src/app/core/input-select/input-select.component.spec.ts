import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputSelectComponent } from './input-select.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {  MatAutocompleteModule } from '@angular/material/autocomplete';

describe('InputSelectComponent', () => {
  let component: InputSelectComponent;
  let fixture: ComponentFixture<InputSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputSelectComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        NoopAnimationsModule,
        MatAutocompleteModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should clear the emitter WHEN call emitterClearValue', async () => {
    // Arrange
    const spy = jest.spyOn(component.emitterSelect, 'emit');
    // Act
    component.emitterClearValue();
    // Assert
    expect(component.optionsCtrl.value).toEqual('');
    expect(spy).toHaveBeenCalledWith('');
  });

  test('should emit a value WHEN call emitterSelectOption method', async () => {
    // Arrange
    const spy = jest.spyOn(component.emitterSelect, 'emit');
    // Act
    component.emitterSelectOption('blablabla');
    // Assert
    expect(spy).toHaveBeenCalledWith('blablabla');
  });
});
