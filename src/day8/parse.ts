export const parseLine = (line: string) => {
  const lineNums = line.split(/\s/g).map(Number);

  function getDiffs(numbers: number[], history: number[][] = []) {
    const reductions = numbers.reduce<number[]>((diffs, number, index, arr) => {
      if (index === arr.length - 1) return diffs;
      diffs.push(arr[index + 1] - number);
      return diffs;
    }, []);

    if (reductions.every(n => n === 0)) {
      // All zero, return current (should be our diffs)
      return {numbers, history}
    }
    return getDiffs(reductions, [...history, numbers]);
  }

  return getDiffs(lineNums);
}