export function stringByLine(input: string, trim = true): string[] {
  return input.split(/[\t\n\r]/)
    .map(line => trim ? line.trim() : line) // Trim whitespace
    .filter(Boolean); // Filter out empty lines
}