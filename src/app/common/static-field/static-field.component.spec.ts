import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticFieldComponent } from './static-field.component';

describe('StaticFieldComponent', () => {
  let component: StaticFieldComponent;
  let fixture: ComponentFixture<StaticFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticFieldComponent ]
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
