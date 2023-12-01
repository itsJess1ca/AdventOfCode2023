export function sum(arr: number[]): number {
  return arr.reduce((sum, number) => sum + number, 0);
}