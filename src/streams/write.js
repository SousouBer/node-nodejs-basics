import fs from "node:fs";
import url from "node:url";
import path from "node:path";

import { stdin } from "node:process";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const filePath = path.resolve(__dirname, "files", "fileToWrite.txt");
  const ws = fs.createWriteStream(filePath);

  stdin.pipe(ws);
};

await write();
