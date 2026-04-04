import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark hero-grid', styles.heroBanner)} style={{ 
      background: 'oklch(0.09 0 0)',
      position: 'relative'
    }}>
      <div className="container" style={{ zIndex: 1 }}>
        <Heading as="h1" className="hero__title">
          User Guide & <span style={{ color: 'var(--ifm-color-primary)' }}>API Reference</span>
        </Heading>
        <p className="hero__subtitle" style={{ color: 'var(--ifm-color-secondary)' }}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Explore the Docs
          </Link>
          <Link
            className="button button--secondary button--lg margin-left--md"
            to="/docs/api/authentication">
            API Reference
          </Link>
        </div>
      </div>
      {/* Subtle glow effect to match landing page */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(ellipse at center, oklch(0.55 0.2 262 / 0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
