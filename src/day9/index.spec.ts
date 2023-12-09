import { part1, part2 } from "./index";
import { __example, __example2, __example3 } from "./__example";
import { __input } from "./__input";

describe('Day 8', () => {
  describe('Part 1', () => {
    it('example1', () => {
      expect(part1(__example)).toEqual(2);
    })
    it('example2', () => {
      expect(part1(__example2)).toEqual(6);
    })
    it('full', () => {
      expect(part1(__input)).toEqual(20513);
    })
  })
  describe('Part 2', () => {
    it('example3', () => {
      expect(part2(__example3)).toEqual(6);
    })
    it('full', () => {
      expect(part2(__input)).toEqual(15995167053923);
    })
  })
})