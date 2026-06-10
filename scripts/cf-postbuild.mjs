import { existsSync, unlinkSync, writeFileSync } from "node:fs";

for (const file of ["dist/_redirects", "dist/wrangler.json"]) {
  if (existsSync(file)) {
    unlinkSync(file);
  }
}

writeFileSync("dist/.assetsignore", "_redirects\n_worker.js\nwrangler.json\n");
