import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/

export default defineConfig({
  base: "/ovas-ucun/",
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
      "@components/": `${path.resolve(__dirname, "src/components")}/`,
      "@styles/": `${path.resolve(__dirname, "src/styles")}/`,
      "@pages/": `${path.resolve(__dirname, "src/pages")}/`,
      "@context/": `${path.resolve(__dirname, "src/context")}/`,
      "@hooks/": `${path.resolve(__dirname, "src/hooks")}/`,
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
