import { existsSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";

if (existsSync("dist/_redirects")) {
  unlinkSync("dist/_redirects");
}

if (existsSync("dist/wrangler.json")) {
  const config = JSON.parse(readFileSync("dist/wrangler.json", "utf8"));

  config.assets ??= {};
  config.assets.html_handling = "none";
  config.assets.not_found_handling = "none";
  delete config.assets.redirects;

  writeFileSync("dist/wrangler.json", `${JSON.stringify(config, null, 2)}\n`);
}

writeFileSync("dist/.assetsignore", "_redirects\n_worker.js\nwrangler.json\n");
