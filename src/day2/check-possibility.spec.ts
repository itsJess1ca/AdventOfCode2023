import { checkPossibility } from "./check-possibility";

describe('checkPossibility', () => {
  it('should return true if possible', () => {
    expect(checkPossibility({red: 1, blue: 1, green: 1}, {red: 10, blue: 10, green: 10})).toEqual(true);
  });

  it('should return false if impossible', () => {
    expect(checkPossibility({red: 10, blue: 10, green: 10}, {red: 1, blue: 1, green: 1})).toEqual(false);
  });
})