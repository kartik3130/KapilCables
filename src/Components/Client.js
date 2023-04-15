import React from 'react'
import CardItem from './CardItem'
import './Client.css'
// import '../App.css'

function Client() {
  return (
    <>
      <div className="cards">
      <h1>DISTRIBUTION & CLIENTS</h1>
      <p>
      CLIENT TESTIMONIALS
      </p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/SBPDCL_logo.gif"
              text="SBPDCL"
              label="SBPDCL"
              path="/clients"
            />
            <CardItem
              src="/images/Maharashtra-Power-Discom-MahaDiscom-MahaVitaran-Logo.png"
              text="MAHAVITARAN"
              label="MAHAVITARAN"
              path="/clients"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/Indian_Railway_Logo_2.png"
              text="INDIAN RAILWAYS"
              label="INDIAN RAILWAYS"
              path="/clients"
            />
            <CardItem
              src="/images/mpeb.jpeg"
              text="MPEB"
              label="MPEB"
              path="/clients"
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src="/images/pwd.jpeg"
              text="PUBLIC WORK DEPARTMENT"
              label="PWD"
              path="/clients"
            />
            <CardItem
              src="/images/pLFDXB2k_400x400.jpeg"
              text="PURVANCHAL VIDHYUT VIBHAG"
              label="PVV"
              path="/clients"
            />
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Client