module.exports = {
  title: "Laravel Componel",
  description: "a Laravel 7 components ui package",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      {
        text: "Github",
        link: "https://github.com/muhsenmaqsudi/laravel-componel",
      },
    ],
    sidebar: {
      "/guide/": ["", "installation"],
      // fallback
      "/": ["" /* / */],
    },
  },
  plugins: [
    ["vuepress-plugin-code-copy", true],
    ["@vuepress/back-to-top"],
    ["@vuepress/last-updated"],
  ],
};
