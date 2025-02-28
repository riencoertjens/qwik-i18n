import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    build: {
      emptyOutDir: true,
      reportCompressedSize: true,
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1600,
      minify: false,
    },
  };
});
