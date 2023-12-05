type CamelCase<S extends string> = S extends `${infer P1}-${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
  : Lowercase<S>

export type MapSlug = 'seed-to-soil' | 'soil-to-fertilizer' | 'fertilizer-to-water' | 'water-to-light' | 'light-to-temperature' | 'temperature-to-humidity' | 'humidity-to-location';
export type MapName = CamelCase<MapSlug>;
export type MapRow = `${MapSlug} map:`
export type RangeRow = `${number} ${number} ${number}`;

export type Range = [number, number];
export interface Ranges {
  destinationRange: [number, number][];
  sourceRange: [number, number][];
}

export interface Almenac {
  seeds: number[] | Range[];
  seedToSoil: Ranges,
  soilToFertilizer: Ranges,
  fertilizerToWater: Ranges,
  waterToLight: Ranges,
  lightToTemperature: Ranges,
  temperatureToHumidity: Ranges,
  humidityToLocation: Ranges
}

export interface Conditions {
  seed: number;
  soil: number;
  fertilizer: number;
  water: number;
  light: number;
  temp: number;
  humidity: number;
  location: number;
}