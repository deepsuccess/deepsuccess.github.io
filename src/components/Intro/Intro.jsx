import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import deepanshu from "../../img/deepanshu.jpg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
// import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Youtube from "../../img/youtube.png";
import Telegram from "../../img/telegram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
// import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span className="mobile-dp">
            <img src={deepanshu} alt="" />
          </span>
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Deepanshu Sain</span>
          <span style={{ fontWeight: "600" }}>
            {/* A leading Affiliate Marketing Guru at LeadsGuru, a recognised BOI Content Creator on Instagram and a YouTuber. */}
            <p>
              Tech content creator with 100K+ followers📱| Medical student🎓 |
              Affiliate Marketing Guru (₹2.5M in 2yrs) 💼 | Making waves on IG
              🌊 | Seeking brand collaborations ✨
            </p>
          </span>
        </div>
        <a className="button n-button" href="tel:+918619202808 ">
          <center>Contact me</center>{" "}
        </a>
        <div className="social-icons">
        <div>
        Follow me on
        </div>
        <div style={{display:'flex'}}>
        {[
          {
          title:'@deepsuccessss',
          link:"https://www.instagram.com/deepsuccessss/",
          image:Instagram
        },
          {
          title:'Deepanshu Sain',
          link:"https://www.youtube.com/channel/UCOIbUcksTZtnV7fAV3UNc6Q",
          image:Youtube
        },
          {
          title:'Deepsuccessss (Telegram)',
          link:"https://telegram.me/+rUvA6_JizUkwYzY1",
          image:Telegram
        },
          {
          title:'Deepanshu Sain',
          link:"https://www.linkedin.com/in/deepanshu-sain-a2718a282/",
          image:LinkedIn
        },
        ].map((social)=>{
          return <a
            href={social.link}
            target="__blank"
            className="instaTag"
            title={social.title}
          >
            <img
              src={social.image}
              alt={social.title}
              height="30px"
            />
            <span className="social-title">
            {social.title}
            </span>
          </a>
        })}
          </div>
        </div>
        {/* social icons */}
        <div className="i-icons">
          {/* <img src={Github} alt="" /> */}
          {/* <img src={LinkedIn} alt="" /> */}
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" style={{ zIndex: 2 , height:'580px'}} />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Affiliate" text2="Marketing Guru" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
          style={{ zIndex: 4 }}
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv
            img={thumbup}
            text1="Tech"
            text2="Creator"
            style={{ zIndex: 3 }}
          />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
