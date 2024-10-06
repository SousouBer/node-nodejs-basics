import fs from "fs/promises";

import { existsSync } from "node:fs";

const folderPath = "files";
const errorMessage = "FS operation failed";

const list = async () => {
  try {
    if (!existsSync(folderPath)) {
      throw new Error(errorMessage);
    }

    const arrayOfFiles = await fs.readdir(folderPath);
    console.log(arrayOfFiles);
  } catch (err) {
    console.error(err);
  }
};

await list();
