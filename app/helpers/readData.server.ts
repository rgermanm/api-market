import * as fs from 'fs/promises';

export async function mdReader(fileName: string) {
  const file = await fs.readFile(`./app/utils/${fileName}`);
  return file.toString();
}