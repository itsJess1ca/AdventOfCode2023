import { stringByLine } from "./string-by-line";

describe('stringByLine', () => {

  it('should return an array of strings', () => {
    expect(stringByLine(`test`)).toEqual(['test']);
  });

  it('should split by line', () => {
    const input = `
test
test1`;
    expect(stringByLine(input)).toEqual(['test', 'test1']);
  });

  it('should trim whitespace', () => {
    const input = `
      test
      test1`;
    expect(stringByLine(input)).toEqual(['test', 'test1']);
  });

  it('should filter out empty lines', () => {
    const input = `
      test
      
      test1`;
    expect(stringByLine(input)).toEqual(['test', 'test1']);
  });
})