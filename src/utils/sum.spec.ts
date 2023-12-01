import { sum } from "./sum";

describe('sum', () => {
  it('should return the sum of the array', () => {
    expect(sum([1, 1])).toEqual(2);
    expect(sum([1, 2, 3, 4, 5, 6])).toEqual(21);
  });
});