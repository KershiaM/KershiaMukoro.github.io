import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About Me',
    Svg: require('@site/static/img/home_1.svg').default,
    description: (
      <>
    I'm Kershia—a tech enthusiast with a flair for transforming complex concepts into accessible content. In my downtime, you'll find me out hiking, mastering the onewheel, or enjoying the company of my three dogs. Welcome to my page!
      </>
    ),
  },
  {
    title: 'Pathfinding Paws',
    Svg: require('@site/static/img/home_2.svg').default,
    description: (
      <>
        Step into the lives of Holly, Tabitha, and Moji, a trio with unique spirits that brighten every path they tread. Dive into the Trio Tale Page for more on their personalities and backstories.
      </>
    ),
  },
  {
    title: 'Wandering the Wilds',
    Svg: require('@site/static/img/home_3.svg').default,
    description: (
      <>
        Amidst Colorado's vast mountains, we've found solace, adventure, and awe. Explore with us the trails that lead to crystal-clear lakes, through aspen groves, and atop windswept ridges.
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
