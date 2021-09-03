import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedQueriesComponent } from './advanced-queries.component';
import { MatCardModule } from '@angular/material/card';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdvancedQueriesComponent', () => {
  let component: AdvancedQueriesComponent;
  let fixture: ComponentFixture<AdvancedQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        AdvancedQueriesComponent
      ],
      imports:[
        MatCardModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
