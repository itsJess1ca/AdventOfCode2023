export const sort = <T = unknown>(arr: T[], sortFn: (a: T, b: T) => number) => {
  const newArr = [...arr];
  newArr.sort(sortFn);
  return newArr;
}