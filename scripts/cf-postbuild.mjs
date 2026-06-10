import { existsSync, unlinkSync, writeFileSync } from "node:fs";

if (existsSync("dist/_redirects")) {
  unlinkSync("dist/_redirects");
}

writeFileSync("dist/.assetsignore", "_redirects\n_worker.js\nwrangler.json\n");
