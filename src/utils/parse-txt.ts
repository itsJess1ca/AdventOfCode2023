import { readFileSync } from 'fs';
import * as fs from "fs";
export function parseTxt(path: string) {
  return fs.readFileSync(path, 'utf8');
}