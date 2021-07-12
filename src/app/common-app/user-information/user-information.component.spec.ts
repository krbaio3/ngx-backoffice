import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalizeSpacePipe } from '../../common/pipe/capitalize-space.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserInformationComponent } from './user-information.component';
import { StaticFieldComponent } from '../../common/static-field/static-field.component';
import { createEmptyUserAccount } from '../../pods/account/user-account.model';

describe('UserInformationComponent', () => {
  let component: UserInformationComponent;
  let fixture: ComponentFixture<UserInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        UserInformationComponent,
        CapitalizeSpacePipe,
        StaticFieldComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInformationComponent);
    component = fixture.componentInstance;
    component.userInfo = createEmptyUserAccount();
    fixture.detectChanges();
  });

  test('can load instance', () => {
    expect(component).toBeTruthy();
  });

  test(`title has default value`, () => {
    expect(component.title).toEqual(true);
  });
});
