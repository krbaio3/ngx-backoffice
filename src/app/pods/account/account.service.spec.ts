import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserAccount } from './user-account.model';
import DoneCallback = jest.DoneCallback;
import { flushMock, responseMock } from '../../utils/test/account.mocks';

describe('AccountService', () => {
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AccountService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUserAccount', () => {

    test('makes expected calls', (done:DoneCallback) => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getUserAccount().subscribe((res: UserAccount) => {
        expect(res).toEqual(responseMock);
        done()
      });
      const req = httpTestingController.expectOne(
        'assets/json/user-account.json'
      );
      expect(req.request.method).toEqual('GET');
      req.flush(flushMock);
      httpTestingController.verify();
    });
  });
});
