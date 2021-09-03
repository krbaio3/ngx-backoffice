import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ToolbarService } from './toolbar.service';
import { flushMock } from '../../utils/test/account.mocks';
import DoneCallback = jest.DoneCallback;
import { notification, Notify } from './toolbar.helpers';

describe('ToolbarService', () => {
  let service: ToolbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ToolbarService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getNotifications', () => {

    test('makes expected calls', (done: DoneCallback) => {
      service.getNotifications('1').subscribe((res: Notify[]) => {
        expect(res).toEqual(notification);
        done()
      });
    });
  });
});
