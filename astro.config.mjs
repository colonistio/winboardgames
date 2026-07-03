import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://winboardgames.com",
  trailingSlash: "never",
  build: {
    format: "file"
  }
});
