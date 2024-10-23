import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      // "@apis": fileURLToPath(new URL("./src/apis", import.meta.url)),
    },
  },
  server: {
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
        additionalData: `
          @import "@/assets/scss/variables";
          @import "@/assets/scss/mixin";
        `,
      },
    },
  },
});
