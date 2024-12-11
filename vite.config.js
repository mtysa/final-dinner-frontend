import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3005, // Change the port number to 3005
    proxy: {
      "/recipes": {
        target: "https://api.spoonacular.com", // Target API
        changeOrigin: true, // Ensure the server handles the CORS issue
        rewrite: (path) => path.replace(/^\/recipes/, ""), // Remove `/recipes` prefix
      },
    },
  },
});
