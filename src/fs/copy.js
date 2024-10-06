import fs from "fs/promises";

import { existsSync } from "node:fs";

const folderPath = "files";
const copyFolderPath = "files_copy";
const errorMessage = "FS operation failed";
const successMessage = "Copied successfully";

const copy = async () => {
  try {
    if (!existsSync(folderPath) || existsSync(copyFolderPath)) {
      throw new Error(errorMessage);
    }

    await fs.cp(folderPath, copyFolderPath, { recursive: true });
    console.log(successMessage);
  } catch (err) {
    console.log(err);
  }
};

await copy();
