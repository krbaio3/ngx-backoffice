import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadComponent } from './upload.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AdHocScaffoldModule } from '../../core/ad-hoc-scaffold/ad-hoc-scaffold.module';
import { InputFileModule } from '../../common';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ UploadComponent ],
      imports: [AdHocScaffoldModule,InputFileModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

});
