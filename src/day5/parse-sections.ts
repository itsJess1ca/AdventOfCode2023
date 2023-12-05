import { stringByLine } from "../utils/string-by-line";
import { Almenac, MapName, Range, RangeRow, Ranges } from "./types";

export const getRanges = (string: RangeRow) => {
  const [destRangeStart, sourceRangeStart, rangeLength] = string.split(' ').map(Number);
  const output: Ranges = {
    destinationRange: [],
    sourceRange: [],
  }
  output.destinationRange.push([destRangeStart, destRangeStart + rangeLength - 1]);
  output.sourceRange.push([sourceRangeStart, sourceRangeStart + rangeLength - 1]);
  return output;
}

export const parseSections = (input: string, seedRange = false) => {
  const maps: Almenac = {
    seeds: [],
    seedToSoil: {
      destinationRange: [],
      sourceRange: []
    },
    soilToFertilizer: {
      destinationRange: [],
      sourceRange: []
    },
    fertilizerToWater: {
      destinationRange: [],
      sourceRange: []
    },
    waterToLight: {
      destinationRange: [],
      sourceRange: []
    },
    lightToTemperature: {
      destinationRange: [],
      sourceRange: []
    },
    temperatureToHumidity: {
      destinationRange: [],
      sourceRange: []
    },
    humidityToLocation: {
      destinationRange: [],
      sourceRange: []
    }
  };
  const camelCase = (str: string) => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase())

  let currentMap: MapName;

  return stringByLine(input)
    .reduce<Almenac>((maps, row, index) => {
      if (index === 0) {
        const seedNums = row.split(':')[1].split(' ').filter(Boolean).map(s => Number(s));
        if (seedRange) {
          let i = 0;
          const ranges: Range[] = [];
          let currentRange: number[] | null = null;
          for (const num of seedNums) {
            if (i === 0) {
              if (currentRange) {
                // @ts-ignore
                ranges.push(currentRange);
              }
              currentRange = [];
            }
            currentRange!.push(num);
            i = (i + 1) % 2;
          }
          maps.seeds = ranges;
        } else {
          maps.seeds = seedNums
        }
        return maps;
      }

      if (row.endsWith('map:')) {
        currentMap = camelCase(row).split(' ')[0] as MapName;
        return maps;
      }

      const ranges = getRanges(row as RangeRow);
      maps[currentMap].destinationRange = [...maps[currentMap].destinationRange, ...ranges.destinationRange];
      maps[currentMap].sourceRange = [...maps[currentMap].sourceRange, ...ranges.sourceRange];
      return maps;
    }, maps)
}

export const getDestBySource = (source: number, map: Ranges) => {
  const sourceRangeIndex = map.sourceRange
    .findIndex(range => range[0] <= source && range[1] >= source);
  if (sourceRangeIndex < 0) {
    return source;
  }

  const sourceRange = map.sourceRange[sourceRangeIndex];
  const destRange = map.destinationRange[sourceRangeIndex];
  const diff = sourceRange[1] - source;

  return destRange[1] - diff;
}

export const findLowestLocationFromRange = (seeds: Range, almenac: Almenac): number => {
  let lowestLocation = Infinity;
  for (let i = seeds[0]; i < seeds[0] + seeds[1]; i++) {
    const location = findSeedConditions(i, almenac);
    if (location < lowestLocation) {
      lowestLocation = location;
      console.log(`New Lowest location: ${lowestLocation}`);
    }
  }
  return lowestLocation;
}
export const findSeedConditions = (seed: number, almenac: Almenac): number => {
  const soil = getDestBySource(seed, almenac.seedToSoil);
  const fertilizer = getDestBySource(soil, almenac.soilToFertilizer);
  const water = getDestBySource(fertilizer, almenac.fertilizerToWater);
  const light = getDestBySource(water, almenac.waterToLight);
  const temp = getDestBySource(light, almenac.lightToTemperature);
  const humidity = getDestBySource(temp, almenac.temperatureToHumidity);
  return getDestBySource(humidity, almenac.humidityToLocation);
}