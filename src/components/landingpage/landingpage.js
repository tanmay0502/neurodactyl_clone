import React from 'react';
import "./landingpage.css";
import Image from 'next/image';

function LandingPageComponent() {
  return (
    <div className="landing-page-container">
      <div className="landing-page-text">
        <h1>Contactless Fingerprint Recognition</h1>
        <ul>
          <li>Highly accurate neural network algorithms</li>
          <li>Work with scans and photo images</li>
          <li>All types of fingerprints are supported</li>
        </ul>
        <h2>Top-tier algorithm accuracy <span className='underline'>in NIST PFT III evaluation</span></h2>
      </div>
      <div className="landing-page-image">
        <Image src="/images/handbg.png" alt="Image" width={100} height={100} />
      </div>
    </div>
  );
}

export default LandingPageComponent;
