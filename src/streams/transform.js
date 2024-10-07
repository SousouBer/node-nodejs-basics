import { Transform } from "node:stream";

import { stdin, stdout } from "node:process";

const reversedInput = new Transform({
  transform(chunk, _, callback) {
    callback(null, chunk.toString().trim().split("").reverse().join(""));
  },
});

const transform = async () => {
  stdin.pipe(reversedInput).pipe(stdout);
};

await transform();
