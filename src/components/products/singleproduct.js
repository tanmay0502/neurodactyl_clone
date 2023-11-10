"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SingleProduct = ({ headline, subheadline, image, description, link }) => {
  return (
    <div className="single-product">
      <Image className="product-image" src={image} alt="Product" width={100} height={100}/>
      <h4 className="subheadline">{subheadline}</h4>
      <h3 className="headline"><Link href={link} target="_blank" rel="noopener noreferrer">{headline}</Link></h3>
      <p>{description}</p>
    </div>
  );
};

export default SingleProduct;
