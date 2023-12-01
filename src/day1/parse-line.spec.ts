import { parseLine } from "./parse-line";


describe('parseLine', () => {
  it('should return the correct int when provided only numbers', () => {
    expect(parseLine('42')).toEqual(42);
  });

  it('should return the correct int when letters are in the string', () => {
    expect(parseLine('4nion2')).toEqual(42);
    expect(parseLine('tmmnhlxzpj1eightldxhjnone97')).toEqual(17);
  });

  it('should consider digits spelled out', () => {
    expect(parseLine('one2')).toEqual(12);
  })
});