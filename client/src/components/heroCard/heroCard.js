import React from "react";
import "./heroCard.css";

function HeroCard({ logo, name, value }) {
  return (
    <div className="heroCard">
      <div className="upperHalf">
        <h4 className="heroCardName">{name}</h4>
        <img src={logo} alt="" className="heroCardLogo" />
      </div>
      <div className="lowerHalf">
        <h1 className="heroCardValue">{value}</h1>
      </div>
    </div>
  );
}

export default HeroCard;
