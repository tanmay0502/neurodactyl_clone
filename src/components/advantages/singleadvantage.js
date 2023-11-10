import React from 'react';
import "./advantages.css";
import Image from 'next/image';
function SingleAdvantage({ image, headline, description }) {
  return (
    <div className="single-advantage">
      <Image className='flex justify-center m-auto' src={image} alt="Advantage" width={50} height={50} />
      <h3 className="headline py-6">{headline}</h3>
      <p className="description pb-10">{description}</p>
    </div>
  );
}

export default SingleAdvantage;
