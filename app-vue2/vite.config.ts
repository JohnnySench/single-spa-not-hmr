import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: true,
    emptyOutDir: false,
    rollupOptions: {
      input: resolve(__dirname, "./src/main.ts"),
      output: {
        entryFileNames: 'app-vue2.js',
        format: 'system',
      },
      preserveEntrySignatures: 'strict',
    },
  },
  server: {
    port: 3002,
  },
  preview: {
    port: 3002,
  }
});