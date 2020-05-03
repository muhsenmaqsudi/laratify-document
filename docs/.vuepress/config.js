const path = require("path");

module.exports = {
  title: "Laravel Componel",
  description: "a Laravel 7 components ui package",
  base: "/laravel-componel/",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../.vuepress"),
      },
    },
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "/css/tailwind.css",
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Components", link: "/components/" },
      {
        text: "Github",
        link: "https://github.com/muhsenmaqsudi/laravel-componel",
      },
    ],
    sidebar: [
      {
        title: "Guide", // required
        collapsable: false, // optional, defaults to true
        children: ["/guide/", "/guide/installation"],
      },
      {
        title: "Components",
        collapsable: false, // optional, defaults to true
        children: [
          "/components/",
          "/components/alert",
          "/components/badge",
          "/components/button",
          "/components/input",
          "/components/checkbox",
          "/components/select",
          "/components/file",
          "/components/textarea",
          "/components/radios",
          "/components/dropdown",
        ],
      },
    ],
    // sidebarDepth: 2,
    smoothScroll: true,
  },
  plugins: [
    ["vuepress-plugin-code-copy", true],
    ["@vuepress/back-to-top"],
    ["@vuepress/last-updated"],
  ],
};
