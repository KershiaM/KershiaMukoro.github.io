import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import React from 'react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={require('/static/img/imghero.png') .default} alt="Hero Banner Image" className="hero__image"/>
        <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>Passionate about enhancing business processes and driving project success through top-tier documentation designed to make a substantial impact. Click on documentation to view samples of my work highlighting my ability to create and design meticulous and user-friendly documentation.
        </p>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Dive into Kershia's world of clear, concise, and effective technical communication.">
      <HomepageHeader />
       <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}

