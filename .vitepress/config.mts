import { link } from "fs";
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Nuxt Guide",
  themeConfig: {
    sidebar: {
      unjs: [
        {
          text: "unjs",
          link: "/unjs",
          items: [{ text: "jitti", link: "/unjs/jitti" }],
        },
      ],
      "/v3.12/": [
        { text: "packages", link: "/3.12/packages", items: [{ text: "con" }] },
      ],
    },
  },
});
