import React, { useEffect, useState } from 'react';
import '../App.css';

const Layout = () => {

  const closeNavbar = () => {
    const navCollapse = document.getElementById('navbarNav');
    if (navCollapse.classList.contains('show')) {
      navCollapse.classList.remove('show');
    }
  };  

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="container">
        <a href="#top">
          <img src="/Images/logo.png" alt="Logo" height="50" className="me-2" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav fw-bold">
            <li className="nav-item"><a className="nav-link" href="#top" onClick={closeNavbar}>Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#erp" onClick={closeNavbar}>ERP</a></li>
            <li className="nav-item"><a className="nav-link" href="#crm" onClick={closeNavbar}>CRM</a></li>
            <li className="nav-item"><a className="nav-link" href="#about" onClick={closeNavbar}>About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact" onClick={closeNavbar}>Contact Us</a></li>
          </ul>
        </div>

        <a href="#contact" className="btn" style={{ backgroundColor: '#7D0A0A', color: 'white' }}>
          Get a Demo
        </a>
      </div>
    </nav>
  );
};

export default Layout;
