import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={require('/static/img/imghero.png') .default} alt="Hero Banner Image" className="hero__image"/>
        <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>Passionate about enhancing business processes and driving project success through top-tier documentation services designed to make a substantial impact. Whether you are revamping existing documents or crafting a new documentation framework from scratch, I am here to lead the way.  
        </p>

        <p> Explore my portfolio for a curated look at my work, specifically designed to showcase my capabilities. Dive deeper into my projects and view samples by clicking on the documentation link. Together, let's simplify complex information and make it actionable and usable.
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

