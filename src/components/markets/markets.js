import React from 'react';
import SingleMarket from './singlemarket';
import './markets.css';

const marketData = [
  { 
    headline: 'National ID', 
    description: (
      <>
        National biometric system plays a key role in fraud prevention, providing of digital governmental services and national security. Fingerprint recognition is a &quot;must-have&quot; biometric modality in such systems: it&apos;s reliable, unique for any individuals including identical twins and changes less over time than face.<br />
        Our algorithms are designed to work with millions of records in enrollment databases with high accuracy and low false accept rate even for a search with one finger. High matching speed - up to 1 billion matches per 1 s - is a crucial advantage for big scale projects. It significantly saves customer&apos;s budget: numbers of required matching servers is up to 100 times less than the same numbers for &quot;traditional&quot; recognition algorithms.
      </>
    ), 
    image: '/images/markets/id_sm.png', 
    imagePosition: 2 
  },
  { 
    headline: 'Banks', 
    description: (
      <>
       Banks go digital today. Now good service means that a lot of features can be provided to a client remotely, without visiting bank office. Biometric identification and verification help to prove customer&apos;s identity for online operations. Its safer and more convenient than a password, biometrics can not be forgotten or passed to someone else and it doesn&apos;t require memorizing.<br />
       Our technologies unlock fingerprint recognition for user&apos;s online verification and customer onboarding, because it requires only a regular phone. Mobile SDK can verify a person using 4 fingers, which are user-friendly to capture. It ensures ultimate verification and identification accuracy, which is much higher than recognition with one face.
      </>
    ), 
    image: '/images/markets/bank_sm.png', 
    imagePosition: 1 
  },
  { 
    headline: 'Governmental services', 
    description: (
      <>
        Biometric identification and verification expedite and secure providing of digital governmental services. It&apos;s especially convenient for elder citizens, who often have difficulties with online authorization and memorizing lots of different passwords, which stops them from using digital services.<br /> Fingerprint recognition provides high accuracy of identification, especially when several fingers are used. It contains different biometric data and reliability of recognition is increasing not several times, but by orders of magnitude.<br />
        Our technologies allow acquiring fingerprints by a scanner and a phone with compatible templates, as well as using fingerprints acquired by a phone and converted to standard format (WSQ) in legacy systems.
      </>
    ), 
    image: '/images/markets/gov_sm.png', 
    imagePosition: 2 
  },
  { 
    headline: 'Police and migration', 
    description: (
      <>
        Our algorithms demonstrate superior accuracy of neural networks working with national scale databases of tens or hundreds of millions individuals. Specially trained algorithms of detection and segmentation allow automatically processing fingerprint cards, segmenting flat and roll fingerprints of different quality, checking right/left hands and finger positions.<br /> Mobile finger acquisition opens new possibilities for law enforcement, making fingerprint recognition possible without a scanner but with an ordinary mobile phone.<br />
        Our technologies can not just capture but also run fingerprints against a database stored locally on a phone. It makes a check against relatively small databases (less than 10,000-100,000 fingers) fast and fully mobile - it requires only phone application instead of expensive mobile biometric terminals.
      </>
    ), 
    image: '/images/markets/police_sm.png', 
    imagePosition: 1 
  },
  { 
    headline: 'Forensics', 
    description: (
      <>
        Quality of latents collected from a crime scene is usually far away from ideal: it&apos;s &quot;dirty&quot;, partial, with artifacts. In many cases forensic experts should process it manually.<br /> Unlike &quot;traditional&quot; algorithms, neural networks can identify even partial fingerprints automatically. Furthermore, ability of machine algorithms to recognize complicated patterns surpasses human&apos;s, so the algorithm can automatically find a list of candidates and human can validate it manually.<br />
        Our SDK also has detection and segmentation algorithms for processing fingerprint cards and all types of fingerprints on it automatically.
      </>
    ), 
    image: '/images/markets/forensic_sm.png', 
    imagePosition: 2 
  },
];


function Markets() {
  return (
    <div className="markets-container">
      <div className='markets-tag'>Markets</div>
      <div className="market-list">
        {marketData.map((market, index) => (
          <SingleMarket key={index} {...market} />
        ))}
      </div>
    </div>
  );
}

export default Markets;