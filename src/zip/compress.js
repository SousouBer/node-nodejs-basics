import zlib from "node:zlib";
import fs from "node:fs";
import url from "node:url";
import path from "node:path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const filePath = path.resolve(__dirname, "files", "fileToCompress.txt");
  const compressedFilePath = path.resolve(__dirname, "files", "archive.gz");

  const rs = fs.createReadStream(filePath);
  const ws = fs.createWriteStream(compressedFilePath);

  const gzip = zlib.createGzip();

  rs.pipe(gzip).pipe(ws);
};

await compress();
