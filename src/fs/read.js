import fs from "fs/promises";

import { existsSync } from "node:fs";

const folderPath = "files/fileToRead.txt";
const errorMessage = "FS operation failed";

const read = async () => {
  try {
    if (!existsSync(folderPath)) {
      throw new Error(errorMessage);
    }

    const fileData = await fs.readFile(folderPath, { encoding: "utf8" });
    console.log(fileData);
  } catch (err) {
    console.log(err);
  }
};

await read();
