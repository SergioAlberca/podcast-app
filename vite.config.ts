/// <reference types="vitest" />
import { defineConfig, loadEnv } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
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
    },
    build: {
      outDir: env.VITE_MODE === "dev" ? "./dist-dev" : "./dist",
      sourcemap: true,
      minify: env.VITE_MODE === "dev" ? false : true
    }
  };
});
