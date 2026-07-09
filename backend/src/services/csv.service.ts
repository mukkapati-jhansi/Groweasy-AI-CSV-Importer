import fs from "fs";
import { parse } from "csv-parse/sync";

export function parseCsv(filePath: string) {
  const csv = fs.readFileSync(filePath);

  const records = parse(csv, {
    columns: true,
    skip_empty_lines: true,
  });

  return records;
}