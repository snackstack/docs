// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "snackstack",
  tagline: "A generic notification management library",
  url: "https://snackstack.github.io",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "snackstack", // Usually your GitHub org/user name.
  projectName: "snackstack.github.io", // Usually your repo name.
  deploymentBranch: "master",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/snackstack/docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "snackstack",
        logo: {
          alt: "Snackstack",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "get-started",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/snackstack/core",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "Get started",
                to: "/docs/",
              },
              {
                label: "Guides",
                to: "/docs/guides/managing-notifications",
              },
              {
                label: "Adapters",
                to: "/docs/adapters/mui",
              },
              {
                label: "API Reference",
                to: "/docs/api-reference/hooks/useSnackManager",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Repository",
                href: "https://github.com/snackstack/core",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/tobias-tengler",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/tobiastengler",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/tobias-tengler/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tobias Tengler. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
