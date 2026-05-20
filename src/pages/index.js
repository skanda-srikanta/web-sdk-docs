import React from 'react';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

export default function Home() {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="CortexScan Web SDK Documentation"
      description="Documentation for the CortexScan Web SDK browser and Node surfaces, camera workflows, and release changes.">
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
