"use client"
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import "./navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sectionVisibility, setSectionVisibility] = useState({
    advantages: false,
    markets: false,
    aboutus: false,
    contacts: false,
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    const sections = ['advantages', 'markets', 'aboutus', 'contacts'];

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionRect = section.getBoundingClientRect();
        setSectionVisibility(prevVisibility => ({
          ...prevVisibility,
          [sectionId]: sectionRect.top < window.innerHeight / 2,
        }));
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavbarItemClick = () => {
    setIsMobileMenuOpen(false); 
  };
  return (
    <>
      <nav className={`navbar ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
        <Link className="navbar-logo" href="/">
          <Image className="pl-4" src="/images/logo.png" alt="Logo" width={300} height={300} />
        </Link>
        <div className="navbar-links">
          <ul className={isMobileMenuOpen ? "hidden" : ""}>
            <li>
              <Link className="hover:opacity-40" href="/">Products</Link>
              <span className="dropdown-symbol">▼</span>
              <ul className="dropdown-menu">
                <li><Link className="hover:opacity-40" href="/sdk">Server SDK for fingerprint recognition</Link></li>
                <li><Link className="hover:opacity-40" href="/rest-api">Server platform for fingerprint recognition</Link></li>
                <li><Link className="hover:opacity-40" href="/mobileapp">Mobile SDK for touchless fingerprint capture</Link></li>
              </ul>
            </li>
            <li>
              <Link className="hover:opacity-40" href="/">Solutions</Link>
              <span className="dropdown-symbol">▼</span>
              <ul className="dropdown-menu">
                <li><Link className="hover:opacity-40" href="/deduplication">Biometric deduplication</Link></li>
                <li><Link className="hover:opacity-40" href="/fingerprintcards">Fingerprint card conversion</Link></li>
              </ul>
            </li>
            <li className={sectionVisibility.advantages ? "highlighted" : ""}>
              <Link onClick={handleNavbarItemClick} className="hover:opacity-40" href="#advantages">Advantages</Link>
              
            </li>
            {sectionVisibility.advantages ? "↑" : ""}
            <li className={sectionVisibility.markets ? "highlighted" : ""}>
              <Link onClick={handleNavbarItemClick} className="hover:opacity-40" href="#markets">Markets</Link>
            </li>
            {sectionVisibility.markets ? "↑" : ""}
            <li>
              <Link onClick={handleNavbarItemClick} className="hover:opacity-40" href="/news">News</Link>
            </li>
            <li className={sectionVisibility.aboutus ? "highlighted" : ""}>
              <Link onClick={handleNavbarItemClick} className="hover:opacity-40" href="#aboutus">About us</Link>
            </li>
            {sectionVisibility.aboutus ? "↑" : ""}
            <li className={sectionVisibility.contacts ? "highlighted" : ""}>
              <Link onClick={handleNavbarItemClick} className="hover:opacity-40" href="#contacts">Contacts</Link>
            </li>
            {sectionVisibility.contacts ? "↑" : ""}
            <li>
              <Link className="hover:opacity-40" href="mailto:info@neurodactyl.com" >
                <Image className="pl-4" src="/mail.svg" alt="mail" width={50} height={50} />
              </Link>
            </li>
          </ul>
          <div className="navbar-mobile-button" onClick={toggleMobileMenu}>
            <div className={`bar ${isMobileMenuOpen ? "bar-1" : ""}`}></div>
            <div className={`bar ${isMobileMenuOpen ? "bar-2" : ""}`}></div>
            <div className={`bar ${isMobileMenuOpen ? "bar-3" : ""}`}></div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

