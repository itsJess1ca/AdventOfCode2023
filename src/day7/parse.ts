const cardStrengths = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']
const cardStrengths2 = ['J', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'Q', 'K', 'A']

export const parseRow = (row: string, part2 = false) => {
  let value = 0;

  const [handString, bidString] = row.split(/\s/);
  const bid = Number(bidString);
  const hand = handString.split('');
  const uniqueCards: Record<string, number> = {};
  for (const card of hand) {
    if (uniqueCards[card]) {
      uniqueCards[card] += 1;
    } else {
      uniqueCards[card] = 1;
    }
  }
  let keys = Object.keys(uniqueCards).sort((a, b) => uniqueCards[b] - uniqueCards[a]);

  if (part2 && uniqueCards['J'] > 0 && uniqueCards['J'] !== 5) {
    let i = 0;
    if (keys[i] === 'J') i += 1;
    uniqueCards[keys[i]] += uniqueCards['J'];
    keys = keys.filter(k => k !== 'J');
  }

  for (const key of keys) {
    if (uniqueCards[key] === 5) {
      value += 60000; // Five of a kind
      break;
    } else if (uniqueCards[key] === 4) {
      value += 50000; // Four of a kind
      break;
    } else if (uniqueCards[key] === 3 && keys.length === 2) {
      value += 40000; // Full house
      break;
    } else if (uniqueCards[key] === 3) {
      value += 30000; // Three of a Kind
      break;
    } else if (uniqueCards[key] === 2) {
      if (keys.length === 3) { // 2 pair
        value += 20000;
      } else {
        value += 10000;
      }
      break;
    }
  }

  return {value, bid, hand}
}

export const compareHands = (part: 1 | 2) =>
  (a: ReturnType<typeof parseRow>, b: ReturnType<typeof parseRow>) : number => {
  if (a.value !== b.value) return a.value - b.value;
  const aCards = a.hand;
  const bCards = b.hand;
  let val: number = 0;
  for (let i = 0; i < aCards.length; i++) {
    const aIndex = (part === 1 ? cardStrengths : cardStrengths2).indexOf(aCards[i]);
    const bIndex = (part === 1 ? cardStrengths : cardStrengths2).indexOf(bCards[i]);
    if (aIndex === bIndex) continue;
    val = aIndex - bIndex;
    break;
  }
  return val;
};