import { parseInput, parseLine, extractNumbers, sum } from "./index";

describe('Day 1', () => {

  describe('extractNumbers', () => {
    it('should extract the word one', () => {
      expect(extractNumbers('one')).toEqual([1]);
    });

    it('should extract the word two', () => {
      expect(extractNumbers('two')).toEqual([2]);
    });

    it('should extract the word three', () => {
      expect(extractNumbers('three')).toEqual([3]);
    });

    it('should extract the word four', () => {
      expect(extractNumbers('four')).toEqual([4]);
    });

    it('should extract the word five', () => {
      expect(extractNumbers('five')).toEqual([5]);
    });

    it('should extract the word six', () => {
      expect(extractNumbers('six')).toEqual([6]);
    });

    it('should extract the word seven', () => {
      expect(extractNumbers('seven')).toEqual([7]);
    });

    it('should extract the word eight', () => {
      expect(extractNumbers('eight')).toEqual([8]);
    });

    it('should extract the word nine', () => {
      expect(extractNumbers('nine')).toEqual([9]);
    });

    it('should extract multiple words', () => {
      expect(extractNumbers('one two three four five six seven eight nine'))
        .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should extract digits correctly', () => {
      expect(extractNumbers('123456789')).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should extract overlapping words from the start of the string', () => {
      expect(extractNumbers('xtwone3four')).toEqual([2, 1, 3, 4]);
    })
  });

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

  describe('parseInput', () => {
    it('should return the correct array of numbers', () => {
      const input = `
sixbrqklb347
6sevenninexpnbgbr11three15
4zggkljkcqthree7
7lxjkqhmxcxsevennhszsbxzdfsonehnsrcfour9
jtpmfoureightvtjmlshbfour6nvjkqnddp3
twofive2fourfive1dvnrrvjr
twoeightnq6ninepxv
39sixgphfvninexts71five
seven3two8
six59jhtfvv1five6
Six5
4md
`;
      expect(parseInput(input)).toEqual([67, 65, 47, 79, 43, 21, 29, 35, 78, 66, 65, 44]);
    });
  });

  describe('sum', () => {
    it('should return the correct sum', () => {
      expect(sum([1, 2, 3])).toEqual(6);
    });
  })

})