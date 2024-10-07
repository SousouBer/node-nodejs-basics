import zlib from "node:zlib";
import fs from "node:fs";
import url from "node:url";
import path from "node:path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const compressedFilePath = path.resolve(__dirname, "files", "archive.gz");
  const decompressedFilePath = path.resolve(
    __dirname,
    "files",
    "fileToCompress.txt"
  );

  const rs = fs.createReadStream(compressedFilePath);
  const ws = fs.createWriteStream(decompressedFilePath);

  const unzip = zlib.createUnzip();

  rs.pipe(unzip).pipe(ws);
};

await decompress();
