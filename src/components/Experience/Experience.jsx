import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':'',border:darkMode?"orange solid":"",backgroundColor:darkMode?"black":""}}>9 Lakh+</div>
        <span  style={{color: darkMode?'white':'',fontSize:"30px"}}>Total </span>
        <span style={{fontSize:"30px"}}>Earnings</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':'',border:darkMode?"orange solid":"",backgroundColor:darkMode?"black":""}}>7200+</div>
        <span  style={{color: darkMode?'white':'',fontSize:"30px"}}>Total </span>
        <span style={{fontSize:"30px"}}>Referrals</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':'',border:darkMode?"orange solid":"",backgroundColor:darkMode?"black":""}}>1500+</div>
        <span  style={{color: darkMode?'white':'',fontSize:"30px"}}>Team </span>
        <span style={{fontSize:"30px"}}>Members</span>
      </div>
    </div>
  );
};

export default Experience;
