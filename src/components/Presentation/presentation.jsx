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
    <div className="p-wrapper" id="testimonial" style={{height:'50vh'}}>
      <div className="t-heading">
        <span style={{ color: darkMode ? "white" : "" }}>For more information, </span>
        <span>watch this video </span>
        {/* <span style={{ color: darkMode ? "white" : "" }}>with me...</span> */}
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <iframe src="https://www.youtube.com/embed/PfJuuQJvGjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
};

export default Presentation;
