/**
 * Docusaurus Configuration File
 * Author: Krishna Teja Vedula
 * Description: Configuration for the Linux-101 Docusaurus website.
 *              Includes presets, theme customization, i18n, navbar, footer,
 *              syntax highlighting, and color modes.
 */

import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

/* ================================================================
   1. SITE METADATA
   Basic information about the site (title, tagline, URLs, etc.)
   ================================================================ */
const config: Config = {
  title: "Linux-101",
  tagline: "A step-by-step guide for beginners to learn Linux.",
  favicon: "img/favicon.ico",

  url: "https://github.com",
  baseUrl: "/linux-101/",

  organizationName: "krishnatejavedula",
  projectName: "linux-101",

  future: {
    v4: true, // Enable compatibility with upcoming Docusaurus v4
  },

  /* ================================================================
     2. ERROR HANDLING
     How to handle broken links and markdown references
     ================================================================ */
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  /* ================================================================
     3. INTERNATIONALIZATION (i18n)
     Default language and supported locales
     ================================================================ */
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  /* ================================================================
     4. PRESETS
     Classic preset with docs, blog, and theme options
     ================================================================ */
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          sidebarCollapsible: true, // Allow categories to collapse
          sidebarCollapsed: true,   // Start categories collapsed
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  /* ================================================================
     5. THEME CONFIGURATION
     Navbar, footer, Prism syntax highlighting, and color modes
     ================================================================ */
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",

    /* -------------------------------
       Navbar configuration
       ------------------------------- */
    navbar: {
      title: "Linux-101",
      logo: {
        alt: "Linux-101 Logo",
        src: "img/undraw_space-exploration.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorials",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/krishnatejavedula/linux-101",
          label: "GitHub",
          position: "right",
        },
        {
          label: "Women in Physics",
          href: "https://www.involvement.mtu.edu/organization/wip",
          position: "left",
        },
      ],
    },

    /* -------------------------------
       Footer configuration
       ------------------------------- */
    footer: {
      style: "dark",
      copyright: `© ${new Date().getFullYear()} Linux-101. Made with Docusaurus`,
    },

    /* -------------------------------
       Prism syntax highlighting
       ------------------------------- */
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    /* -------------------------------
       Color mode settings
       ------------------------------- */
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
