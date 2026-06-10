import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), cloudflare()],
  build: {
    target: "es2020",
    cssMinify: true,
    rollupOptions: {
      input: {
        main: "index.html",
        privacy: "privacy/index.html",
      },
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
});
