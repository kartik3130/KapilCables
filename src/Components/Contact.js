import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-1">
      <div className="content">
        <h2>CONTACT PAGE</h2>
        <p>
          Kapil Cables Pvt. Ltd. is one of the leading manufacturing company in
          M.P. for all types of LT Electric Cables & Conductors for Domestic,
          Industrial, Transmission, Irrigation & Distribution uses.
        </p>

        {/* <p>
          The company has been expanding its existing facilities, setting up new
          facilities & improving work with customers because we believe in
          investing our workforce, clients, association & trade environment at
          large. The company brings empower trust & clarity to support the
          responsible developments, production & marketing of the power utility
          supplies.
        </p>

        <p>
          Kapil Cables & Conductors are manufactured in one of the most modern
          plants having all necessary infrastructure with latest machines
          including extruders, stranding machines, laying up machines &
          armouring machines. We have all necessary equipments required for
          testing ultimate strength of its Insulation, Conductor, Steel wire &
          Strip in accordance with Indian Standard Specification.
        </p> */}
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon"><i class="fa-solid fa-map-pin"></i></div>
            <div className="text-1">
              <h3>Address</h3>
              <p>
                488/8 Rau Pithampur Road <br></br>Opposite Nakhrali Dhani, Indore
                <br></br>(M.P.) 453331
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i class="fa-solid fa-phone"></i></div>
            <div className="text-1">
              <h3>Phone</h3>
              <a href="tel:94250-65968">+91-94250-65968<br></br></a>
              <a href="tel:99260-30006">+91-99260-30006<br></br></a>
              <a href="tel:99260-00940">+91-99260-00940</a>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i class="fa-solid fa-envelope"></i></div>
            <div className="text-1">
              <h3>Email</h3>
              <a href="mailto:kapilcables38@gmail.com?body=My custom mail body">kapilcables38@gmail.com<br></br></a>
              <a href="mailto:sales@kapilcables.com?body=My custom mail body">sales@kapilcables.com<br></br></a>
              <a href="mailto:enquiry@kapilcables.com?body=My custom mail body">enquiry@kapilcables.com</a>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" required="required"/>
              <span>FULL NAME</span>
            </div>
            <div className="inputBox">
              <input type="text" required="required"/>
              <span>EMAIL</span>
            </div>
            <div className="inputBox">
              <textarea required="required"></textarea>
              <span>TYPE YOUR MESSAGE ...</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="" value="send"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
