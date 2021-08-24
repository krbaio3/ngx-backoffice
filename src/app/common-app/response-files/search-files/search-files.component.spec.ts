import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SearchFilesComponent } from './search-files.component';
import { DatePickerRangeModule } from '../../../common';

describe('SearchFilesComponent', () => {
  let component: SearchFilesComponent;
  let fixture: ComponentFixture<SearchFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFilesComponent ],
      imports: [
        DatePickerRangeModule,
        MatButtonModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should emmit a event with date WHEN call handlerStartEventPicker', async () => {
    // Arrange
    const myDate = new Date('August 23, 2020 03:24:00');
    const spyEmitter = jest.spyOn(component.emitChangeStartEvent, 'emit');

    // Act
    component.handlerStartEventPicker(myDate);

    // Assert
    expect(spyEmitter).toHaveBeenCalledWith(myDate);
    expect(spyEmitter).toHaveBeenCalledTimes(1);
  });

  test('should not emmit a event with undefined value WHEN call handlerStartEventPicker', async () => {
    // Arrange
    const myDate = undefined as any as Date;
    const spyEmitter = jest.spyOn(component.emitChangeStartEvent, 'emit');

    // Act
    component.handlerStartEventPicker(myDate);

    // Assert
    expect(spyEmitter).not.toHaveBeenCalled();
  });

  test('should emmit a event with date WHEN call handlerEndEventPicker', async () => {
    // Arrange
    const myDate = new Date('August 23, 2020 03:24:00');
    const spyEmitter = jest.spyOn(component.emitChangeEndEvent, 'emit');

    // Act
    component.handlerEndEventPicker(myDate);

    // Assert
    expect(spyEmitter).toHaveBeenCalledWith(myDate);
    expect(spyEmitter).toHaveBeenCalledTimes(1);
  });

  test('should not emmit a event with undefined value WHEN call handlerEndEventPicker', async () => {
    // Arrange
    const myDate = undefined as any as Date;
    const spyEmitter = jest.spyOn(component.emitChangeEndEvent, 'emit');

    // Act
    component.handlerEndEventPicker(myDate);

    // Assert
    expect(spyEmitter).not.toHaveBeenCalled();
  });
});
