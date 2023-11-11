"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './markets.css';

function SingleMarket({ headline, description, image, imagePosition }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const marketElement = document.getElementById(`market-${headline}`);
      if (marketElement) {
        const rect = marketElement.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headline]);

  return (
    <div
      id={`market-${headline}`}
      className={`single-market ${imagePosition === 1 ? 'image-left' : 'image-right'} ${isVisible ? 'visible' : ''}`}
    >
      <div className="market-details">
        {imagePosition === 1 && <Image src={image} alt={`Market ${headline}`} width={500} height={500} />}
        <div className="text-details">
          <div className='headline pb-10'>{headline}</div>
          <div className='market-desc'>{description}</div>
        </div>
        {imagePosition === 2 && <Image src={image} alt={`Market ${headline}`} width={500} height={500} />}
      </div>
    </div>
  );
}

export default SingleMarket;