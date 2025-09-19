/**
 * Linux-101 Homepage Features
 * Author: Krishna Teja Vedula
 * Description: Feature section for the homepage.
 *              Displays three interactive flip-cards highlighting
 *              Linux basics, dev environment setup, and Git/version control.
 */

import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

/* ================================================================
   1. FEATURE DATA
   List of features to render as interactive flip-cards
   ================================================================ */
type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: React.ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Get Started with Linux",
    Svg: require("@site/static/img/undraw_remote-worker.svg").default,
    description: (
      <>
        Learn the core Linux commands and workflows to build confidence in both
        native Linux and WSL environments.
      </>
    ),
  },
  {
    title: "Set Up Your Dev Environment",
    Svg: require("@site/static/img/undraw_dev-environment.svg").default,
    description: (
      <>
        Install and set up VS Code, Conda, and essential tools for a
        ready-to-use dev environment.
      </>
    ),
  },
  {
    title: "Learn Git and Version Control",
    Svg: require("@site/static/img/undraw_version-control.svg").default,
    description: (
      <>
        Understand Git fundamentals to track changes, manage projects, and
        collaborate effectively with others.
      </>
    ),
  },
];

/* ================================================================
   2. FEATURE COMPONENT
   Single flip-card with front (icon + title) and back (description)
   ================================================================ */
const Feature: React.FC<FeatureItem> = ({ title, Svg, description }) => {
  const [flipped, setFlipped] = useState(false);

  // Auto-reset to front after 3 seconds
  useEffect(() => {
    if (!flipped) return;
    const timer = setTimeout(() => setFlipped(false), 3000);
    return () => clearTimeout(timer);
  }, [flipped]);

  return (
    <div className={clsx("col col--4", styles.featureCol)}>
      <div
        className={styles.flipCard}
        onClick={() => setFlipped(!flipped)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setFlipped(!flipped)}
      >
        <div
          className={clsx(styles.flipCardInner, {
            [styles.flipped]: flipped,
          })}
        >
          {/* Front side: icon + title */}
          <div className={styles.flipCardFront}>
            <div className="text--center">
              <Svg className={styles.featureSvg} role="img" />
            </div>
            <Heading as="h3" className={styles.featureTitle}>
              {title}
            </Heading>
          </div>

          {/* Back side: description */}
          <div className={styles.flipCardBack}>
            <p className={styles.featureDescription}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================================================================
   3. HOMEPAGE FEATURES WRAPPER
   Renders the full feature list in a responsive grid
   ================================================================ */
const HomepageFeatures: React.FC = () => (
  <section className={styles.features}>
    <div className="container">
      <div className="row">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  </section>
);

export default HomepageFeatures;
