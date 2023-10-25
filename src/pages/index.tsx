import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--custom-black', styles.heroBanner, styles.bgBlack)}>
      <div className={clsx(styles.absolute)}>
        <div className={clsx(styles.absolute, styles.justifyCenter)}>
          <div className={clsx(styles.bgShape1, styles.bgTeal, styles.opacityFifty, styles.bgBlur)}></div>
          <div className={clsx(styles.bgShape2, styles.bgPrimary, styles.opacityFifty, styles.bgBlur)}></div>
          <div className={clsx(styles.bgShape1, styles.bgPurple, styles.opacityFifty, styles.bgBlur)}></div>
        </div>
      </div>
      <div className={clsx('container', styles.z999)}>
        <img src={"img/Logo.png"}  alt="XpensePath Logo"/>
        <h1 className={clsx("hero__title")}>{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--lg", styles.bgButton)}
            to="/docs/intro">
            Start your journey here 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/*<main>*/}
      {/*  <HomepageFeatures />*/}
      {/*</main>*/}
    </Layout>
  );
}
