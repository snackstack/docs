module.exports = {
  title: "snackstack",
  tagline: "Generic management of notification messages",
  url: "https://snackstack.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "snackstack",
  projectName: "snackstack.github.io",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "snackstack",
      items: [
        { label: "Docs", to: "docs/" },
        { label: "Examples", to: "examples/" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Installation",
              to: "docs/",
            },
            {
              label: "Getting Started",
              to: "docs/introduction/getting-started",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              to: "https://github.com/snackstack",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tobias Tengler, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/snackstack/docs/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
};
