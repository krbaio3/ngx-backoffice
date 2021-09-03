import 'jest-preset-angular';
import '@testing-library/jest-dom';
import { ngMocks } from 'ng-mocks';

/* global mocks for jsdom */
const mock = () => {
  let storage: { [key: string]: string } = {};
  return {
    getItem: (key: string) => (key in storage ? storage[key] : undefined),
    setItem: (key: string, value: string) => (storage[key] = value || ''),
    removeItem: (key: string) => delete storage[key],
    clear: () => (storage = {}),
  };
};

Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: (property: any): string => {
      return '';
    },
  }),
});

Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});

// All methods in mock declarations and providers
// will be automatically spied on their creation.
// https://ng-mocks.sudo.eu/extra/auto-spy
// ngMocks.autoSpy('jest'); // or jasmine

// ngMocks.defaultMock helps to customize mocks
// globally. Therefore, we can avoid copy-pasting
// among tests.
// https://ng-mocks.sudo.eu/api/ngMocks/defaultMock
// ngMocks.defaultMock(AuthService, () => ({
//   isLoggedIn$: EMPTY,
//   currentUser$: EMPTY,
// }));


/* output shorter and more meaningful Zone error stack traces */
// Error.stackTraceLimit = 2;
