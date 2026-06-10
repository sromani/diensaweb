import { existsSync, unlinkSync, writeFileSync } from "node:fs";

if (existsSync("dist/_redirects")) {
  unlinkSync("dist/_redirects");
}

// Cloudflare Workers Builds reads dist/wrangler.json — must exist with SPA disabled.
const workerConfig = {
  name: "diensaweb",
  compatibility_date: "2024-11-01",
  assets: {
    directory: ".",
    html_handling: "auto-trailing-slash",
    not_found_handling: "none",
  },
};

writeFileSync("dist/wrangler.json", `${JSON.stringify(workerConfig, null, 2)}\n`);
writeFileSync("dist/.assetsignore", "_redirects\n_worker.js\nwrangler.json\n");
