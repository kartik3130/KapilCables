import React from "react";
import "../App.css";
import "./Certificate.css";

function Certificate() {
  return (
    <>
      <div className="certificate">
        <img className="head-img" src="/images/page_title_bg.png" alt="" />
        <div className="text">CERTIFICATES</div>
      </div>
      <div className="owner">
        <img className="own-img" src="/images/cert.png" alt="" />
        <p className="info-1">1. ISO 9001:2015</p>
        <p className="info-1">
          2. IS 694:2010 (PVC Insulated, Sheathed/Unsheathed Cables 1.1 KV
          Grade)
        </p>
        <p className="info-1">
          3. IS: 1554 (P-1):1988 (PVC Insulated, Armored/Un-Armoured, PVC
          Sheathed Heavy Duty Cables, 1.1 KV Grade)
        </p>
        <p className="info-1">
          4. IS 7098 (P-1):1988 (XLPE Insulated, Armoured/Un-Armoured, PVC
          Sheathed Heavy Duty Cables, 1.1 KV Grade)
        </p>
        <p className="info-1">
          5. IS: 14255:1995 (AERIAL BUNCHED Cables, 1.1 KV Grade)
        </p>
        <p className="info-1">
          6. IS 398 (Part-4):1994 (All Aluminium Alloy Conductor)
        </p>
        <p className="info-1">
          7. IS:398 (Part 2):1996 (Aluminium Conductor Steel Reinforced)
        </p>
      </div>
    </>
  );
}

export default Certificate;
