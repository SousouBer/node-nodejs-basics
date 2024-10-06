import fs from "fs/promises";

import { existsSync } from "node:fs";

const filePath = "files/wrongFilename.txt";
const correctedFilePath = "files/properFilename.md";

const errorMessage = "FS operation failed";

const rename = async () => {
  try {
    if (!existsSync(filePath) || existsSync(correctedFilePath)) {
      throw new Error(errorMessage);
    }

    await fs.rename(filePath, correctedFilePath);
  } catch (err) {
    console.log(err);
  }
};

await rename();
