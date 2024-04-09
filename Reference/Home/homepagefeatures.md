to restore the homepage add the below to an index.js file under src\components\HomepageFeatures


import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About Me',
    Svg: require('@site/static/img/portfolio.svg').default,
    description: (
      <>
      Welcome to my corner of the web! I'm Kershia, a multifaceted professional. Beyond the roles of technical writer, U.S. Army Reserve Soldier, and certified Medical Lab Scientist, I'm an adventure-seeker at heart. My world is a blend of curiosity, creativity, and a thirst for knowledge, especially as I dive into cybersecurity. You'll often find me exploring the outdoors, gliding on my onewheel, or enjoying the company of my three dogs.
      </>
    ),
  },
  {
    title: 'Portfolio',
    Svg: require('@site/static/img/portfolio.svg').default,
    description: (
      <>
     As a Colorado-based technical writer with a rich five-year history,  I specialize in creating detailed, engaging documentation tailored to this website. This page offers a curated look at my work, specifically designed to showcase my capabilities. For a deeper dive into my projects and to view these samples, please click on the 'Documentation' link.
      </>
    ),
  },
  {
    title: 'Wandering the Wilds',
    Svg: require('@site/static/img/portfolio.svg').default,
    description: (
      <>
        Amidst Colorado's vast mountains, we've found solace, adventure, and awe. Join us as we wander through mesmerizing landscapes, from serene lakes nestled in the wilderness to vibrant aspen groves and majestic, windswept ridges. Each post is an invitation to discover the awe-inspiring trails and the stories they hold.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
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
}
