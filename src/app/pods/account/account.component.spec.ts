import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { AccountComponent } from './account.component';
import { AccountService } from './account.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  let service: AccountService;

  const accountServiceStub = () => ({
    getUserAccount: () => ({ subscribe: (f: any) => f({}) })
  });

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AccountComponent],
      providers: [{ provide: AccountService, useFactory: accountServiceStub }],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    service = TestBed.inject(AccountService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('account component visual', () => {
    test('should show the h1 with User Information WHEN render de component', async () => {
      // Arrange
      const titleDe: DebugElement = fixture.debugElement;
      const titleEl: HTMLElement = titleDe.nativeElement;
      // Act
      const h1 = titleEl.querySelector('h1');
      // Assert
      expect(h1!.textContent).toEqual('User Information');
    });
  });
  describe('ngOnInit', () => {
    test('makes expected calls', () => {
      // const accountServiceStub: AccountService = fixture.debugElement.injector.get(
      //   AccountService
      // );
      const spySrv = jest.spyOn(service, 'getUserAccount');
      component.ngOnInit();
      expect(spySrv).toHaveBeenCalled();
    });
  });
});
