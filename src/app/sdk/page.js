"use client"
import React, { useState } from 'react';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import styles from './Sdk.module.css';
import FeaturesTab from '@/components/sdkTabs/features';
import PerformanceTab from '@/components/sdkTabs/performance';
import InterfacesTab from '@/components/sdkTabs/interfaces';
import RequirementsTab from '@/components/sdkTabs/requirement';
import PricingTab from '@/components/sdkTabs/pricing';

export default function Sdk() {
  const [activeTab, setActiveTab] = useState('features');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Navbar />

      <div className={styles.sdkContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.titleContainer}>
            <p>Server SDK for fingerprint recognition</p>
           
          </div>
          <hr className={styles.separator} />
          <div className={styles.descriptionContainer}>
            <div className={styles.descriptionText}>
              <p>
                Neurodactyl SDK helps system integrators and software providers to implement biometric fingerprint recognition - verification or identification - into their products, systems, and services. The SDK is based on deep learning technologies and matches any types of fingerprints between each other: flats, rolls, latents, and photo images, creating fixed-size and compatible templates for any type of fingerprints. Recognition algorithm of Neurodactyl server SDK has archived world&apos;s top tier accuracy in NIST PFT III benchmarks.
              </p>
            </div>
            <button className={styles.tryOnlineButton}>Try Online</button>
          </div>
        </div>

        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            <div className={`${styles.tabhead} ${activeTab === 'features' ? styles.activeTab : ''}`} onClick={() => handleTabClick('features')}>Features</div>
            <div className={`${styles.tabhead} ${activeTab === 'performance' ? styles.activeTab : ''}`} onClick={() => handleTabClick('performance')}>Performance</div>
            <div className={`${styles.tabhead} ${activeTab === 'interfaces' ? styles.activeTab : ''}`} onClick={() => handleTabClick('interfaces')}>Interfaces and Platforms</div>
            <div className={`${styles.tabhead} ${activeTab === 'requirements' ? styles.activeTab : ''}`} onClick={() => handleTabClick('requirements')}>System Requirements</div>
            <div className={`${styles.tabhead} ${activeTab === 'pricing' ? styles.activeTab : ''}`} onClick={() => handleTabClick('pricing')}>Licensing and Pricing</div>
          </div>
          <div className={styles.tabContent}>
            {activeTab === 'features' && <div className={styles.tab}><FeaturesTab /></div>}
            {activeTab === 'performance' && <div className={styles.tab}><PerformanceTab /></div>}
            {activeTab === 'interfaces' && <div className={styles.tab}><InterfacesTab /></div>}
            {activeTab === 'requirements' && <div className={styles.tab}><RequirementsTab /></div>}
            {activeTab === 'pricing' && <div className={styles.tab}><PricingTab /></div>}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
