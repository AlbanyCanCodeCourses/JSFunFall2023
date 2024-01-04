import path from "path";
import { sync } from "glob";
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  /**
   * If you are deploying to Github pages, include the "base"
   * It should be the name of your Github repository in between backslashes
   */
  base: "/vite-demo/",
  build: {
    rollupOptions: {
      /**
       * Add this look for and include all HTML files
       * when we use `npm run build`
       */
      input: sync(path.resolve(__dirname, "**/*.html")),
    },
  },
  plugins: [
    legacy({
      /**
       * This line tells Vite what browsers we need to support. For examples,
       * @see https://github.com/browserslist/browserslist?tab=readme-ov-file#full-list
       */
      targets: ["defaults", "ie 11"],
    }),
  ],
});
