import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import "../App.css";

function Products() {
  return (
    <div className="cards">
      <h1>OUR PRODUCTS AREA</h1>
      <p>
        Kapil Cables Pvt. Ltd. is one of the leading manufacturing company in
        M.P. for all types of LT Electric Cables & Conductors for Domestic,
        Industrial, Transmission, Irrigation & Distribution uses.
      </p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/home.png"
              text="WE COVER DOMESTIC AREA"
              label="DOMESTICS"
              path="/domestic"
            />
            <CardItem
              src="/images/irrigation.jpeg"
              text="WE COVER IRRIGATION AREA"
              label="IRRIGATION"
              path="/irrigation"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/transmission.jpeg"
              text="WE COVER TRANSMISSION AREA"
              label="TRANSMISSION"
              path="/transmission"
            />
            <CardItem
              src="/images/Industry.webp"
              text="WE COVER INDUSTRY AREA"
              label="INDUSTRY"
              path="/industry"
            />
            <CardItem
              src="/images/line.jpeg"
              text="WE COVER DISTRIBUTIVE AREA"
              label="DISTRIBUTION"
              path="/distribution"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;
