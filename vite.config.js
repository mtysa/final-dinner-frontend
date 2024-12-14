import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/final-dinner-frontend/",
  plugins: [react()],
  server: {
    port: 3005,
    proxy: {
      "/recipes": {
        target: "https://api.spoonacular.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/recipes/, ""),
      },
    },
  },
});
