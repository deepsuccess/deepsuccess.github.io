import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Course from '../../img/COURSE.png'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
// import Resume from "./resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Our </span>
        <span>Workshops</span>
        <spane style={{ color: darkMode ? "white" : "" }}>
          Here are some of our popular workshops that will help
          <br />
          you to grow your skillset and start your online business today.
        </spane>
        <div className="services-links">

        <a
          href="https://cosmofeed.com/view_ch/49c7dfb7-707a-4ab3-ac98-4e920ee184b8"
          target="__blank"
          style={{ textDecoration: "none" }}
        >
          <button className="button s-button">Buy Workshop</button>
        </a>
        <a
          href="https://cosmofeed.com/ch/v/49c7dfb7-707a-4ab3-ac98-4e920ee184b8"
          target="__blank"
          style={{ textDecoration: "none" }}
        >
          <button className="button s-button">View Workshop</button>
        </a>
        </div>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "20rem" }}
          transition={transition}
        >
          <Card
            emoji={Course}
            heading={"Instagram Growth Workshop"}
            detail={[
              "Instagram foundations",
              "Content creation best practices",
              "Advanced growth strategies",
              "Types of Instagram accounts",
              "Insights and analytics",
              "Trending music and trends",
              "Reel creation and editing techniques.",
            ]}
            mode={darkMode}
          />
        </motion.div>
        {/* second card */}
        {/* <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Gold"}
            detail={[
              <li>Public Speaking Mastery Course</li>,
              <li>Spoken English Mastery Course</li>,
              <li>Communication Mastery Course</li>,
              <li>Facebook Ads Mastery Course </li>,
              <li>Email Marketing Mastery Course</li>,
              <li>Sales Funnel Mastery Course</li>,
              <li>Advanced Affiliate Marketing Course</li>,
              <li>All Silver Courses Free As A Bonus</li>,

            ]}
            mode={darkMode}
            isGold={true}
          />
        </motion.div> */}
        {/* 3rd */}
        {/* <motion.div
          initial={{ top: "34rem", left: "25rem" }}
          whileInView={{ left: "21rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Platinum"}
            detail={[
              <li>Institutional Digital Marketing Course </li>,
              <li>Advanced Copywriting Course</li>,
              <li>8 Gold Courses Free As A Bonus</li>,
              <li>6 Silver Courses Free As A Bonus</li>,
              <li>Course Completion Certifcate</li>,
              <li>Upto 90 % Commission On Every Sale</li>,
            ]}
            mode={darkMode}
            isSilver={true}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div> */}
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
