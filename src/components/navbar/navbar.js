"use client"
import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import "./navbar.css";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
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
                  <li><Link href="/">Server SDK for fingerprint recognition</Link></li>
                  <li><Link href="/">Server platform for fingerprint recognition</Link></li>
                  <li><Link href="/">Mobile SDK for touchless fingerprint capture</Link></li>

                </ul>
              </li>
              <li>
                <Link className="hover:opacity-40" href="/">Solutions</Link>
                <span className="dropdown-symbol">▼</span>
                <ul className="dropdown-menu">
                  <li><Link href="/">Biometric deduplication</Link></li>
                  <li><Link href="/">Fingerprint card conversion</Link></li>
                </ul>
              </li>
              <li>
                <Link className="hover:opacity-40" href="/">Advantages</Link>
              </li>
              <li>
                <Link className="hover:opacity-40" href="/">Markets</Link>
              </li>
              <li>
                <Link className="hover:opacity-40" href="/">News</Link>
              </li>
              <li>
                <Link className="hover:opacity-40" href="/">About us</Link>
              </li>
              <li>
                <Link className="hover:opacity-40" href="/">Contacts</Link>
              </li>
              <li>
                <Link className="hover:opacity-40" href="mailto:info@neurodactyl.com" >✉️</Link>
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
  