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
        <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>Passionate about enhancing business processes and driving project success with high-quality documentation designed to make an impact. Click on <a href="/docs" style={{ fontWeight: 'bold' }}>Documentation</a> to view samples of my work and discover how my dedication to creating detailed, user-friendly documentation can benefit your operations.</p>
        <img src={require('/static/img/imghero.png').default} alt="Hero Banner Image" className="hero__image"/>
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

