import { increm, concatThrow, concatCallback, concatAsync } from '..';

describe('src | utils', () => {
  describe('increm', () => {
    test('should increm', () => {
      expect(increm(1)).toEqual(2);
    });
  });
  describe('concatThrow', () => {
    test('should concatenate', () => {
      expect(concatThrow('jemange', 'dupoulet')).toEqual('jemange - dupoulet');
    });
    test('should Throw error', () => {
      expect(() => concatThrow('jemXange', 'dupoulet')).toThrow(new Error('Forbidden concat'));
    });
  });
  describe('concatCallback', () => {
    test('should concatCallback', () => {
      concatCallback('jemange', 'dupoulet', (error, result) => {
        expect(result).toEqual('jemange - dupoulet');
      });
    });
    test('should concatCallback Throw Error', () => {
      concatCallback('jemaXnge', 'dupoulet', error => {
        expect(error).toEqual(new Error('Forbidden concat'));
        expect(error).toBeInstanceOf(Error);
      });
    });
    test('should concatCallback Throw TypeError', () => {
      concatCallback(1, 'dupoulet', error => {
        expect(error).toBeInstanceOf(Error);
      });
    });
  });
  describe('concatAsync', () => {
    test('should concatAsync', done => {
      concatAsync('jemange', 'dupoulet', (error, result) => {
        expect(result).toEqual('jemange - dupoulet');
        done();
      });
    });
    test('should concatAsync error', done => {
      concatAsync('jemaXnge', 'dupoulet', error => {
        expect(error).toBeInstanceOf(Error);
        done();
      });
    });
  });
});
