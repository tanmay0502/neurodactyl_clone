import React from 'react';
import "./landingpage.css";
import Image from 'next/image';
import Link from 'next/link';

function LandingPageComponent() {
  return (
    <div className="landing-page-container">
      <div className="landing-page-text">
        <h1>Contactless fingerprint Recognition</h1>
        <ul>
          <li>Highly accurate neural network algorithms</li>
          <li>Work with scans and photo images</li>
          <li>All types of fingerprints are supported</li>
        </ul>
        <h2 className=''>Top-tier algorithm accuracy&nbsp; <Link href='/s' className='underline'>{' '} in NIST PFT III evaluation</Link></h2>
      </div>
      <div className="landing-page-image">
        <Image src="/images/handbg.png" alt="Image" width={2000} height={2000} />
      </div>
    </div>
  );
}

export default LandingPageComponent;
