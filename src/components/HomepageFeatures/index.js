import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Install And Start',
    Svg: require('@site/static/img/Quick_Start.svg').default,
    description: (
      <>
        Install the current 3.x package, pick the right browser or Node entry point,
        and get to a working decode flow quickly.
      </>
    ),
    path : "/docs/Quick_Start"
  },
  {
    title: 'API Reference',
    Svg: require('@site/static/img/API_Reference.svg').default,
    description: (
      <>
        Review the current CDDecoder, CDCamera, CDLicense, CDDevice, and symbology
        APIs with the browser and Node split in mind.
      </>
    ),
    path : "/docs/API_Reference"
  },
  {
    title: 'Advanced Topics',
    Svg: require('@site/static/img/Advanced_Topics.svg').default,
    description: (
      <>
        Configure symbologies, DPM, preprocessing, verification, and decoding
        behavior for production scenarios.
      </>
    ),
    path : "/docs/Advanced_Topics"
  },
  {
    title: 'Release Notes',
    Svg: require('@site/static/img/Release_Notes.svg').default,
    description: (
      <>
        Track SDK changes, current 3.0 updates, and notable behavior changes such
        as repeated init handling and worker availability.
      </>
    ),
    path : "/docs/Release_Notes"
  },
];

function Feature({Svg, title, description, path}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={path} style={{textDecoration : 'none'}}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
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
