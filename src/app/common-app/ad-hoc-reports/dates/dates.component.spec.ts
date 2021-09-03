import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerRangeModule } from '../../../common/date-picker-range/date-picker-range.module';
import { DatesComponent } from './dates.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DatesComponent', () => {
  let component: DatesComponent;
  let fixture: ComponentFixture<DatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatesComponent],
      imports: [DatePickerRangeModule, NoopAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
