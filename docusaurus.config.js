// docusaurus.config.js
// Docusaurus v3 configuration for "Mayur's Notebook"
module.exports = {
  title: "Mayur's Notebook",
  tagline: "My study notes",
  url: "https://mayurkukatkar.github.io", // Your website URL
  baseUrl: "/notebook/", // e.g. "/mayurs-notebook/" or "/" for user/organization pages
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "static/img/logo.svg",
  organizationName: "mayurkukatkar", // GitHub org/user name.
  projectName: "notebook", // Repo name.
  deployment: {
    branch: "gh-pages",
  },
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
          routeBasePath: "/", // Serve docs at root
          editUrl:
            "https://github.com/mayurkukatkar/notebook/edit/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Enable MDX/Markdown support (default).
        },
        blog: false, // Disable blog
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false, // Allow users to toggle dark mode
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Mayur's Notebook",
        logo: {
          alt: "Mayur's Notebook Logo",
          src: "img/logo.svg",
          srcDark: "img/logo.svg",
        },
        items: [
          {
            type: "docsVersionDropdown",
            position: "left",
            // Dropdown for docs versions
          },
          {
            to: "/",
            label: "Docs",
            position: "left",
          },
          // GitHub link
          {
            href: "https://github.com/mayurkukatkar/notebook",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/getting-started",
              },
              {
                label: "Tutorials",
                to: "/tutorials/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/<GITHUB_USER>/<REPO_NAME>",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Examples",
                to: "/examples",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Mayur's Notebook. Built with Docusaurus.`,
      },
      prism: {
        theme: require("prism-react-renderer/themes/github"),
        darkTheme: require("prism-react-renderer/themes/vsDark"),
        additionalLanguages: ["bash", "python", "java", "json"],
      },
      // Algolia placeholder config — replace with your keys for full search
      algolia: {
        appId: process.env.ALGOLIA_APP_ID || "U20TV2YB7D",
        apiKey: process.env.ALGOLIA_API_KEY || "baaf3150aa05875ded4b71d52306aef6",
        indexName: process.env.ALGOLIA_INDEX_NAME || "YOUR_INDEX_NAME",
      },
      // Local search plugin config (fallback) — configured separately in plugins section
    }),
  plugins: [
    // Local search fallback (community plugin)
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexPages: true,
        // For more options, see plugin docs
        language: "en",
      },
    ],
  ],
};
