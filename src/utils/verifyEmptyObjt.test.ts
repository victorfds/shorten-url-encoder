import { verifyEmptyObj } from './functions';

describe('expect obj empty equals to true', () => {
  it('Its empty', () => {
    [{}].map((n) => {
      expect(verifyEmptyObj(n)).toEqual(true);
    });
  });

  it('Its not empty', () => {
    [{ turn: false }, { 3: 5, 4: 2 }, NaN, [0, 2, 4], '1a'].map((n) => {
      expect(verifyEmptyObj(n)).toEqual(false);
    });
  });
});
