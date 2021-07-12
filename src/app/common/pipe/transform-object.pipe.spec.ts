import { TransformObjectPipe } from './transform-object.pipe';
import { TestBed } from '@angular/core/testing';

  describe('TransformObjectPipe', () => {
    let pipe: TransformObjectPipe;

    beforeEach(() => {
      TestBed.configureTestingModule({ providers: [TransformObjectPipe] });
      pipe = TestBed.inject(TransformObjectPipe);
    });

    test('can load instance', () => {
      expect(pipe).toBeTruthy();
    });

    test('transforms object and return keys', () => {
      const value: Object = {
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
      };
      // const args: string[] = [];
      expect(pipe.transform(value)).toEqual(['a','b','c','d',]);
    });

    test('should return "" when the value is try to transform a void value', () => {
      expect(pipe.transform(void 0)).toBeUndefined();
    });

    test('should return "" when try to transform a value distinct to object', () => {
      const value: number = 1234;
      // const args: string[] = [];
      expect(pipe.transform(value)).toBeUndefined();
    });

  });
