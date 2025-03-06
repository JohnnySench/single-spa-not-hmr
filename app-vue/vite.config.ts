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
        entryFileNames: 'app-vue.js',
        format: 'es',
        globals: {
          "Vue": "vue"
        }
      },
      external: ["vue"],
      preserveEntrySignatures: 'strict',
    },
  },
  preview: {
    port: 3001,
  },
  server: {
    port: 3001,
  }
});