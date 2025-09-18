import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: React.ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Master Linux Basics',
    Svg: require('@site/static/img/undraw_remote-worker.svg').default,
    description: (
      <>
        Learn the fundamental Linux commands and get comfortable with different
        distributions.
      </>
    ),
  },
  {
    title: 'Efficient Version Control',
    Svg: require('@site/static/img/undraw_version-control.svg').default,
    description: (
      <>
        Understand the power of Git for version control and collaboration.
      </>
    ),
  },
  {
    title: 'Seamless Environment Setup',
    Svg: require('@site/static/img/undraw_dev-environment.svg').default,
    description: (
      <>
        Quickly get your development environment up and running with Linux and Git.
      </>
    ),
  },
];

const Feature: React.FC<FeatureItem> = ({ title, Svg, description }) => {
  const [flipped, setFlipped] = useState(false);

  // Auto flip back after 3 seconds
  useEffect(() => {
    if (!flipped) return;
    const timer = setTimeout(() => setFlipped(false), 3000);
    return () => clearTimeout(timer);
  }, [flipped]);

  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div
        className={styles.flipCard}
        onClick={() => setFlipped(!flipped)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setFlipped(!flipped)}
      >
        <div
          className={clsx(styles.flipCardInner, {
            [styles.flipped]: flipped,
          })}
        >
          <div className={styles.flipCardFront}>
            <div className="text--center">
              <Svg className={styles.featureSvg} role="img" />
            </div>
            <Heading as="h3" className={styles.featureTitle}>
              {title}
            </Heading>
          </div>
          <div className={styles.flipCardBack}>
            <p className={styles.featureDescription}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

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
