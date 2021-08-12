import { BodyOptionsModule } from './../../../core/body-options/body-options.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiesComponent } from './parties.component';
import { TitleRadioGroupModule } from '../../../common/';

describe('PartiesComponent', () => {
  let component: PartiesComponent;
  let fixture: ComponentFixture<PartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartiesComponent],
      imports: [TitleRadioGroupModule, BodyOptionsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
