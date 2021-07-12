import { Convert } from './api-to-vm';
import { flushMock } from '../../utils/test/account.mocks';
import { UserAccountAPI } from './user-account.api.model';

describe('Test class Convert', () => {
  test('userAccountToJson failed', () => {
    // Arguments
    // Method call
    const result = ()=> Convert.toUserAccount({} as UserAccountAPI);

    // Expect result
    expect(result).toThrowError();
  });
});
