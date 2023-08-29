import React from "react";
import "./presentation.css";
import "swiper/css";
import { useContext } from "react";
import { themeContext } from "../../Context";
import "swiper/css/pagination";


const Presentation = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  

  return (
    <div className="p-wrapper" id="presentation" >
      <div className="t-heading">
        <span style={{ color: darkMode ? "white" : "" }}>How I made more than </span>
        <span>2 Million </span>
        <span style={{ color: darkMode ? "white" : "" }}>in just 18 months at the age of 20, To know more about it </span>
        <span>watch this video </span>
        {/* <span style={{ color: darkMode ? "white" : "" }}>with me...</span> */}
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <iframe src="https://www.youtube.com/embed/a8ZTYzn3oqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <a className="button n-button" href="tel:+918949474648 "><center>WhatsApp me your queries on <br /> &nbsp;+91 8949474648</center> </a>
    </div>
  );
};

export default Presentation;
