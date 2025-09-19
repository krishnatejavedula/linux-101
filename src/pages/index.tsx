/**
 * Linux-101 Homepage
 * Author: [Your Name]
 * Description: Main landing page for Linux-101.
 *              Features a hero banner with site title, tagline, 
 *              and CTA button, followed by homepage features.
 * License: MIT
 */

import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

/* ================================================================
   1. HERO HEADER
   Displays the site title, tagline, and call-to-action button
   ================================================================ */
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Introduction"
          >
            🚀 Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ================================================================
   2. HOMEPAGE LAYOUT
   Wraps the page in Docusaurus Layout with SEO description,
   hero header, and main features section
   ================================================================ */
export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Linux-101: A step-by-step guide for beginners to learn Linux."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
