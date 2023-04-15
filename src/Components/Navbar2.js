import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar2.css'

function Navbar2() {


const [click, setClick] = useState(false);
const closeMobileMenu = () => setClick(false);

  return (
    <>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                    HOME
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                    ABOUT KAPIL CABLES
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                    OUR PRODUCTS
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/certificates' className="nav-links" onClick={closeMobileMenu}>
                    CERTIFICATE
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/clients' className="nav-links" onClick={closeMobileMenu}>
                    DISTRIBUTION & CLIENTS
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                    CONTACT US
                </Link>
            </li>
          </ul>
    </>
  )
}

export default Navbar2