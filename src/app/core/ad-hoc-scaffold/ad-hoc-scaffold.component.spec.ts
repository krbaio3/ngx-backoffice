import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHocScaffoldComponent } from './ad-hoc-scaffold.component';
import { MatCardModule } from '@angular/material/card';

describe('AdHocScaffoldComponent', () => {
  let component: AdHocScaffoldComponent;
  let fixture: ComponentFixture<AdHocScaffoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdHocScaffoldComponent],
      imports: [
        MatCardModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHocScaffoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
