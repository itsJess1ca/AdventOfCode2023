import { example1 } from "./__input_example_1";
import { part1, part2 } from "./index";
import { input } from "./__input_string";



describe('part 1', () => {
  it('should get the correct result for the example', () => {
      expect(part1(example1)).toEqual(8);
  })

  it('should get the correct result for the full input', () => {
    expect(part1(input)).toEqual(2683);
  });
});

describe('part 2', () => {
  it('should get the correct result for the example', () => {
    expect(part2(example1)).toEqual(2286);
  });

  it('should get the correct result for the full input', () => {
    expect(part2(input)).toEqual(49710);
  });
})