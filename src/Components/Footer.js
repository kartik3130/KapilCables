import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <img src="/images/logo.gif" alt="" className="img" />
        <p className="footer-subscription-heading">
          Kapil Cables Pvt. Ltd. is one of the leading manufacturing company in
          M.P. for all types of LT Electric Cables & Conductors for Domestic,
          Industrial, Transmission, Irrigation & Distribution uses.
        </p>
        {/* <p className="footer-subscription-text">
          Fill Up your Details! and give your Feedback any-time.
        </p> */}
        {/* <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter your EMAIL"
              className="footer-input"
            />
            <input
              type="text"
              name="feedback"
              placeholder="Give us your FEEDBACK"
              className="footer-feed"
            />
            <Button buttonStyle="btn--outline">Submit</Button>
          </form>
        </div> */}
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about'>How it works</Link>
            <Link to='/about'>Testimonials</Link>
            <Link to='/clients'>Clients</Link>
            {/* <Link to='/'>Products</Link> */}
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/contact'>Support</Link>
            <Link to='/contact'>Distribution</Link>
            {/* <Link to='/'>Sponsorships</Link> */}
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            {/* <Link to='/'>Twitter</Link> */}
          </div>
          <div class='footer-link-items'>
            <h2>Products</h2>
            <Link to='/products'>Domestics</Link>
            <Link to='/products'>Irrigation</Link>
            <Link to='/products'>Industry</Link>
            {/* <Link to='/'>Twitter</Link> */}
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img src="/images/logo-removebg-preview.png" alt="" />
            </Link>
          </div>
          <small className="website-rights">
            KAPIL CABLES Pvt. Ltd. Ⓒ 2023
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="Linkedin"
            >
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
