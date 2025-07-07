import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const autoCloser = () => menuOpen && setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 50) {
        setShowNavbar(false); 
      } else {
        setShowNavbar(true); 
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar navbar-expand-lg px-4 py-3 sticky-top ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
      <a className="navbar-brand underline h5" href="/">Rafay Ahmed</a>

      <button
        className="btn border-0 bg-transparent custom-toggle d-lg-none"
        type="button"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: menuOpen ? 'darkgrey' : 'black' }}
          size="xl"
        />
      </button>

      <div className={`collapse navbar-collapse py-3 ${menuOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" onClick={autoCloser} href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" onClick={autoCloser} href="#projects">Projects</a></li>
          <li className="nav-item"><a className="nav-link" onClick={autoCloser} href="#skills">Skills</a></li>
          <li className="nav-item"><a className="nav-link" onClick={autoCloser} href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
