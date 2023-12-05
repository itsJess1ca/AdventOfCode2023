import { part1, part2 } from "./index";
import { __example } from "./__input_example";
import { __input } from "./__input";

describe('Day 5', () => {
  describe('Part 1', () => {
    it('should return the expected value', () => {
      expect(part1(__example)).toEqual(35)
    })

    it('should return the correct value', () => {
      expect(part1(__input)).toEqual(346433842);
    })
  });

  describe('Part 2', () => {
    it('should return the expected value', async () => {
      expect(await part2(__example)).toEqual(46)
    })

    it('should return the correct value', async () => {
      expect(await part2(__input)).toEqual(60294664);
    })
  });
})