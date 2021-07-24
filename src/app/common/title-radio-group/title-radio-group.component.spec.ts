import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import { TitleRadioGroupComponent } from './title-radio-group.component';

describe('TitleRadioGroupComponent', () => {
  let component: TitleRadioGroupComponent;
  let fixture: ComponentFixture<TitleRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleRadioGroupComponent],
      imports: [FlexLayoutModule, MatRadioModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
