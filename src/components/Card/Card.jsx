import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color,mode,isGold,isSilver}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} style={{ width: isGold ? "190%" : "108%" || isSilver ? "180%" : "" }}alt="" />
      <span style={{ color: mode ? "var(--orange)" : "" }}>{heading}</span>
      <span style={{ color: mode ? "white" : "" }}>{detail.map((list)=>{
        return <li>{list}</li>
      })}</span>
      {/* <button className="c-button">LEARN MORE</button> */}
    </div>
  );
};

export default Card;
