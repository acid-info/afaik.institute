// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// @ts-ignore
require("dotenv").config();
// @ts-ignore
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Afaik.institute",
  url: "https://afaik.institute",
  baseUrl: "/",

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@acid-info/logos-docusaurus-preset",
      /** @type {import('@acid-info/logos-docusaurus-preset').PluginOptions} */
      ({
        businessUnit: "Logos",
        theme: {
          name: "default",
          options: {
            customCss: [require.resolve("./src/css/custom.scss")],
          },
        },
        docs: {
          routeBasePath: "/",
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "about",
        routeBasePath: "/about",
        path: "about",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@acid-info/logos-docusaurus-preset').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
        defaultMode: "light",
      },
      navbar: {
        hideOnScroll: true,
        items: [
          {
            type: "search",
          },
          {
            label: "Github",
            href: "https://github.com/acid-info",
          },
        ],
      },
      footer: {
        copyright: "afaik.institute @2023<br/>All Rights Reserved.",
        links: [
          {
            items: [
              {
                href: "https://twitter.com/ac1d_info",
                label: "Twitter",
              },
            ],
          },
          {
            items: [
              {
                href: "https://jobs.status.im/",
                label: "Work with us",
              },
              {
                href: "/terms",
                label: "Terms & conditions",
              },
              {
                href: "/privacy-policy",
                label: "Privacy Policy",
              },
              {
                href: "/security",
                label: "Security",
              },
            ],
          },
        ],
      },
    }),
};

module.exports = config;
