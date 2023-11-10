import React from 'react';
import Image from 'next/image';
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        </div>
        <div className="footer-text">
          <p>All Right Reserved, 2023. Neurodactyl, LLC.</p>
          <p>Address: Georgia, Tbilisi, Nadzaladevi District, Kursebi Street, N15.</p>
          <p>Identification Number: 400354488</p>
          <p>E-mail us: info@neurodactyl.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
