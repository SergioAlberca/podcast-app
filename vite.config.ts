/// <reference types="vitest" />
import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@/core", replacement: path.resolve(__dirname, "src/core") },
      {
        find: "@/common",
        replacement: path.resolve(__dirname, "src/common")
      },
      {
        find: "@/components",
        replacement: path.resolve(__dirname, "src/ui/components")
      },
      {
        find: "@/pages",
        replacement: path.resolve(__dirname, "src/ui/pages")
      },
      {
        find: "@/store",
        replacement: path.resolve(__dirname, "src/ui/store")
      },
      {
        find: "@/test",
        replacement: path.resolve(__dirname, "src/test")
      }
    ]
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts"
  }
});
