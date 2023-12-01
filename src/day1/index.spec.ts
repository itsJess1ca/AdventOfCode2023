import { day1 } from "./index";
import { sum } from "../utils/sum";

describe('day1', () => {
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
    expect(day1(input)).toEqual(sum([67, 65, 47, 79, 43, 21, 29, 35, 78, 66, 65, 44]));
  });
});