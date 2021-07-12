import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AccountService } from './account.service';
import { AccountComponent } from './account.component';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(() => {
    const accountServiceStub = () => ({
      getUserAccount: () => ({ subscribe: (f: any) => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AccountComponent],
      providers: [{ provide: AccountService, useFactory: accountServiceStub }]
    });
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const accountServiceStub: AccountService = fixture.debugElement.injector.get(
        AccountService
      );
      jest.spyOn(accountServiceStub, 'getUserAccount');
      component.ngOnInit();
      expect(accountServiceStub.getUserAccount).toHaveBeenCalled();
    });
  });
});
