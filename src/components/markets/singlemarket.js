// singlemarket.js
import React from 'react';
import Image from 'next/image';

function SingleMarket({ headline, description, image, imagePosition }) {
  return (
    <div className={`single-market ${imagePosition === 1 ? 'image-left' : 'image-right'}`}>
      <div className="market-details">
        {imagePosition === 1 && <Image src={image} alt={`Market ${headline}`} width={500} height={500}/>}
        <div className="text-details">
          <div className='headline pb-10'>{headline}</div>
          <div className='market-desc'>{description}</div>
        </div>
        {imagePosition === 2 && <Image src={image} alt={`Market ${headline}`} width={500} height={500}/>}
      </div>
    </div>
  );
}

export default SingleMarket;