import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Semantic AI Search',
    image: '/img/prof_search.png',
    description: (
      <>
        Stop memorizing filenames. Search your entire library using natural
        language—our AI understands visual concepts and spatial descriptions.
      </>
    ),
  },
  {
    title: 'Enterprise Security',
    image: '/img/prof_security.png',
    description: (
      <>
        Advanced RBAC, SSO, and real-time audit logs built for global teams.
        Secure your assets with industry-standard governance and compliance.
      </>
    ),
  },
  {
    title: 'Advanced Distribution',
    image: '/img/prof_distribution.png',
    description: (
      <>
        High-performance CDN, branded asset portals, and automated metadata
        sync. Share your brand assets across the globe with millisecond latency.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
