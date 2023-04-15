import React from 'react'
import './About.css'

function About() {
  return (
    <>
      <div className="details">
        <h1>ABOUT US</h1>
        <div className="own-1">
          <h2 className="h-own">COMPANY INFO</h2>
          <div className="container">
            <img
              className="com-logo"
              src="/images/logo1-removebg-preview.png"
              alt=""
            />
            <p className="info">
              Kapil Cables Pvt. Ltd. is one of the leading manufacturing company
              in M.P. for all types of LT Electric Cables & Conductors for
              Domestic, Industrial, Transmission, Irrigation & Distribution
              uses. The company has been expanding its existing facilities,
              setting up new facilities & improving work with customers because
              we believe in investing our workforce, clients, association &
              trade environment at large. The company brings empower trust &
              clarity to support the responsible developments, production &
              marketing of the power utility supplies
            </p>
          </div>
        </div>
        <div className="own-1">
          <h2 className="h-own">WORD FROM CEO</h2>

          <div className="owner">
            <p className="info">
              Since the company was established in Indore in 1996 we have
              remained at the forefront of development in the wires and cable
              industry, establishing a strong reputation for a wide range of
              wires and cable systems. We continue to develop new ideas and
              continuously improve our products to ensure that we remain a world
              market leader in electricity transmission & Distribution
              technology, but we do not forget our core values of continually
              striving for higher quality products and more efficient and
              environmental-friendly technologies and production methods. The
              first thing, we learnt from our Founders Late Shri Mahesh Patidar
              A culture, that is truly the stepping stone to where we are today
              and will remain in our journey to be an Electrical cables &
              conductors manufacturer
            </p>
            <img className="own-img" src="/images/owner.jpeg" alt="owner" />
          </div>
        </div>
        <div className="own-2">
          <h2 className="h-own">MANUFACTURING PLAN</h2>
          <div className="manufacture">
            <img className="fact-img" src="/images/1-Polycab.jpg" alt="" />
            <p className="info">
              Kapil Cables has always been striving for offering better products
              to market on time. For achieving this, We have set up modern
              plant. The manufacturing plant is located in Indore. Manufacturing
              plant is well equipped with latest modern machinery for producing
              quality product. All the plants are ISO 9001 certified. Plant is
              equipped with the testing facilities for assuring the best quality
              products. Plant is continuously upgraded to latest & modern
              technology for offering quality product at competitive prices. The
              safety records of plant is excellent. Plant produces Electrical
              cables & conductors, LT Power & Control Cables.
            </p>
          </div>
        </div>
        {/* <Button>
          Read More 
        </Button> */}
      </div>
    </>
  )
}

export default About