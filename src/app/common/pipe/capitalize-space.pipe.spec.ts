import { CapitalizeSpacePipe } from './capitalize-space.pipe';
import { TestBed } from '@angular/core/testing';

describe('CapitalizeSpacePipe', () => {
  let pipe: CapitalizeSpacePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CapitalizeSpacePipe] });
    pipe = TestBed.inject(CapitalizeSpacePipe);
  });

  test('can load instance', () => {
    expect(pipe).toBeTruthy();
  });

  test('transforms userAddress to User Address', () => {
    const value: string = 'userAddress';
    // const args: string[] = [];
    expect(pipe.transform(value)).toEqual('User Address');
  });

  test('should return "" when try to transform a number', () => {
    const value: number = 2;
    // const args: string[] = [];
    expect(pipe.transform(value)).toEqual("");
  });

  test('should return "" when try to transform a object', () => {
    const value: Object = {};
    // const args: string[] = [];
    expect(pipe.transform(value)).toEqual("");
  });

});
