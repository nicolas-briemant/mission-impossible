import { increm, concatThrow, concatCallback, concatAsync } from '..';

describe('src|utils', () => {
  describe('add', () => {
    test('should add', () => {
      expect(increm(1)).toEqual(2);
    });
  });

  describe('concatThrow', () => {
    test('should concat', () => {
      expect(concatThrow('hello', 'mahmoud')).toEqual('hello - mahmoud');
    });
    test('should throw error', () => {
      expect(() => concatThrow('hXello', 'mahmoud')).toThrow(new Error('Forbidden Concat'));
    });
  });

  describe('concatCallback', () => {
    test('should concatCalback result', () => {
      concatCallback('chebbo', 'mahmoud', (error, result) => {
        expect(result).toEqual('chebbo - mahmoud');
      });
    });
    test('should concatCalback error', () => {
      concatCallback('X', 'mahmoud', error => {
        expect(error).toEqual(new Error('Forbidden Concat'));
        expect(error).toBeInstanceOf(Error);
      });
    });
  });
  describe('concatAsync', () => {
    test('should concatAsync', done => {
      concatAsync('chebbo', 'mahmoud', (error, result) => {
        expect(result).toEqual('chebbo - mahmoud');
        done();
      });
    });
  });
});
