import { extractNumbers } from "./extract-numbers";

describe('extractNumbers', () => {

  it('should extract digits correctly', () => {
    expect(extractNumbers('123456789')).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should extract number words', () => {
    expect(extractNumbers('one two three four five six seven eight nine'))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should be case insensitive', () => {
    expect(extractNumbers('One Two Three Four Five Six Seven Eight Nine'))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  })

  it('should extract overlapping words from the start of the string', () => {
    expect(extractNumbers('twone3four')).toEqual([2, 1, 3, 4]);
  })
});