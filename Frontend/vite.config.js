import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    outDir: 'dist', // Ensures that Vite outputs the build files to the 'dist' directory
  },
  plugins: [react()], // Includes the React plugin
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Allows for importing from '@' as an alias for 'src'
    },
  },
});
