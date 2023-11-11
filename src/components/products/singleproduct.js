"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SingleProduct = ({ headline, subheadline, image, description, link }) => {
  return (
    <div className="single-product">
      <Image className="product-image" src={image} alt="Product" width={100} height={100}/>
      <h4 className="subheadline pt-10">{subheadline}</h4>
      <h3 className="headlink py-4"><Link href={link}>{headline}</Link></h3>
      <p className='description'>{description}</p>
    </div>
  );
};

export default SingleProduct;
