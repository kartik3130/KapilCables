import React, { useState , useEffect} from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
// import { Button } from "./Button";
// import Navbar2 from "./Navbar2";

function Navbar() {
  const [click, setClick] = useState(false);
  const [contact, setContact] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showContact = () => {
      if(window.innerWidth <= 960){
          setContact(false);
      } else{
          setContact(true);
      }
  }

  useEffect(()=>{
    showContact();
  },[])

  window.addEventListener('resize', showContact);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="/images/logo-removebg-preview.png" alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                    HOME
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                    ABOUT US
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
                    CLIENTS
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                    CONTACT US
                </Link>
            </li>
          </ul>
          {/* {contact && <Button buttonStyle = 'btn--outline'><div className="call">
            🅒ALL 🅤S   ||   🅔MAIL 🅤S
          </div></Button>} */}
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
