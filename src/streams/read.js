import fs from "node:fs";
import url from "node:url";
import path from "node:path";

import { stdout } from "node:process";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.resolve(__dirname, "files", "fileToRead.txt");
  const rs = fs.createReadStream(filePath);

  rs.pipe(stdout);
};

await read();
