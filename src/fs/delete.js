import fs from "fs/promises";

import { existsSync } from "node:fs";

const filePath = "files/fileToRemove.txt";
const errorMessage = "FS operation failed";

const remove = async () => {
  try {
    if (!existsSync(filePath)) {
      throw new Error(errorMessage);
    }

    await fs.unlink(filePath);
  } catch (err) {
    console.error(err);
  }
};

await remove();
