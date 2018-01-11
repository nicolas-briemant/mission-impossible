import { incremente, concatThrow, concatCallback, concatAsync } from '..';

describe('src | utils', () => {
  describe('incremente', () => {
    test('should incremente', () => {
      expect(incremente(1)).toEqual(2);
    });
  });
  describe('concat', () => {
    test('should concatThrow', () => {
      expect(concatThrow('Thomas', 'Tridon')).toEqual('Thomas / Tridon');
    });
    test('should concatThrow error', () => {
      expect(() => concatThrow('Thoxmas', 'Tridon')).toThrow(new Error('Forbidden concat'));
    });
    test('should concatCallback', () => {
      concatCallback('Thomas', 'Tridon', (err, result) => {
        expect(result).toEqual('Thomas / Tridon');
      });
    });
    test('should concatCallback throw Error', () => {
      concatCallback(1, 'Tridon', err => {
        // expect(err).toEqual(new Error("Forbidden concat"));
        expect(err).toBeInstanceOf(Error);
      });
    });
    test('should concatCallback error', () => {
      concatCallback(1, 'Tridon', err => {
        // expect(err).toEqual(new Error("Forbidden concat"));
        expect(err).toBeInstanceOf(Error);
      });
    });
  });
  describe('concatAsync', () => {
    test('should concatAsync', done => {
      concatAsync('Thomas', 'Tridon', (err, result) => {
        expect(result).toEqual('Thomas / Tridon');
        done();
      });
    });
    test('should concatAsync error', done => {
      concatAsync('Thoxmas', 'Tridon', err => {
        expect(err).toBeInstanceOf(Error);
        done();
      });
    });
  });
});
