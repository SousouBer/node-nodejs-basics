import fs from "node:fs";
import crypto from "node:crypto";

import url from "node:url";
import path from "node:path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFileHash = (path) =>
  new Promise((resolve, reject) => {
    const hash = crypto.createHash("sha256");
    const rs = fs.createReadStream(path);

    rs.on("error", reject);
    rs.on("data", (chunk) => hash.update(chunk));
    rs.on("end", () => resolve(hash.digest("hex")));
  });

const calculateHash = async () => {
  const filePath = path.resolve(
    __dirname,
    "files",
    "fileToCalculateHashFor.txt"
  );

  try {
    const hashValue = await getFileHash(filePath);
    console.log(hashValue);
  } catch (err) {
    console.error(err);
  }
};

await calculateHash();
