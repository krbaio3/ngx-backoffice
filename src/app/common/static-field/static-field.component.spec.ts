import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StaticFieldComponent } from './static-field.component';

describe('StaticFieldComponent', () => {
  let component: StaticFieldComponent;
  let fixture: ComponentFixture<StaticFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ StaticFieldComponent ],
      imports: [
        // MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
