import React from 'react';
import SingleAdvantage from './singleadvantage';
import "./advantages.css";

const advantageData = [
  { image: '/images/advantages/rocket.png', headline: 'Superior accuracy', description: 'Neural network based technology provides extremely high recognition accuracy for verification and identification' },
  { image: '/images/advantages/fingerprint.png', headline: 'All types of fingerprints', description: 'Processing of photo images and standard scans (flats, rolls, latents) with one technology creating templates compatible between each other' },
  { image: '/images/advantages/template1.png', headline: 'Fixed size of biometric template', description: 'Fingerprint biometric templates always have standard size - 512 bytes regardless of fingerprint or image type' },
  { image: '/images/advantages/flash.png', headline: 'High matching speed', description: 'Matching performance is 100+ million matches per 1 s on one modern CPU and up to 1 billion matches per 1 s using batch mode or GPU' },
  { image: '/images/advantages/dpi.png', headline: 'DPI tolerant technology', description: 'Algorithm works with images or scans from 250 dpi and higher and doesn\'t require exact DPI values(for example, exactly 500 dpi)' },
  { image: '/images/advantages/accuracy.png', headline: 'Identification with the highest confidence', description: 'By capturing of 4 fingers at once with our mobile SDK you can guarantee almost 100% reliable and user-friendly identification' },
];

function Advantages() {
    return (
      <div className="advantages-container">
        <div className='adv pb-14 pt-6'>Advantages</div>
        <div className="advantages">
          {advantageData.map((advantage, index) => (
            <SingleAdvantage key={index} {...advantage} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Advantages;