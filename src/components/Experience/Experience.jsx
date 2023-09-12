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
        <div className="circle" style={{color: darkMode?'var(--orange)':'',border:darkMode?"orange solid":"",backgroundColor:darkMode?"black":""}}>{process.env.REACT_APP_EARNINGS}</div>
        <span  style={{color: darkMode?'white':'',fontSize:"30px"}}>Total </span>
        <span style={{fontSize:"30px"}}>Earnings</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':'',border:darkMode?"orange solid":"",backgroundColor:darkMode?"black":""}}>{process.env.REACT_APP_SESSIONS}</div>
        <span  style={{color: darkMode?'white':'',fontSize:"30px"}}>Live </span>
        <span style={{fontSize:"30px"}}>Sessions</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':'',border:darkMode?"orange solid":"",backgroundColor:darkMode?"black":""}}>{process.env.REACT_APP_TEAM}</div>
        <span  style={{color: darkMode?'white':'',fontSize:"30px"}}>Students </span>
        <span style={{fontSize:"30px"}}>Trained</span>
      </div>
    </div>
  );
};

export default Experience;
