import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/

export default defineConfig({
  base: '/ovas-sua/ova-template/',
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
      "@shared/": `${path.resolve(__dirname, "src/core/shared/components")}/`,
      "@styles/": `${path.resolve(__dirname, "src/core/shared/styles")}/`,
      "@context/": `${path.resolve(__dirname, "src/context")}/`,
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});