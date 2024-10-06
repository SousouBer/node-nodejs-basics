import fs from "node:fs/promises";

import { existsSync } from "node:fs";

const fileContent = "I am fresh and young";
const filePath = "files/fresh.txt";
const errorMessage = "FS operation failed";
const successMessage = "File created";

const create = async () => {
  try {
    if (existsSync(filePath)) {
      throw new Error(errorMessage);
    }

    await fs.writeFile(filePath, fileContent);
    console.log(successMessage);
  } catch (err) {
    console.log(err);
  }
};

await create();
