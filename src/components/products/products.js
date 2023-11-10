import React from 'react';
import SingleProduct from './singleproduct';
import './products.css';

const Products = () => {
  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="product-line"></div>
      <div className="products-list">
        <SingleProduct
          headline="SDK"
          subheadline="Server SDK for fingerprint recognition"
          image="/images/products/sdk.png"
          description="Detection, template extraction and matching (1:1, 1:N, M:N). Scans and photo images are supported."
          link="/sdk"
        />
        <div className="product-line-vertical"></div>
        <SingleProduct
          headline="REST API"
          subheadline="Server platform for fingerprint recognition"
          image="/images/products/api.png"
          description="Easy integration of biometric features, microservices architecture for system scaling and load balancing"
          link="/api"
        />
        <div className="product-line-vertical"></div>
        <SingleProduct
          headline="Mobile SDK"
          subheadline="Fingers capture and recognition for mobile devices"
          image="/images/products/phone1.png"
          description="Touchless fingerprint acquisition and recognition with mobile phones (Android, iOS, web)"
          link="/mobilesdk"
        />
      </div>
    </div>
  );
};

export default Products;
