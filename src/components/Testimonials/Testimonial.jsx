import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";
import ReactPlayer from "react-player";

const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const clients = [
    {
      img: profilePic1,
      review:
        "So Finally there are Fucking Six figures on my dashboard I Never imagined ki class 11th ka ladka 17 ki age mai yha tak bhi Aa sakta Thank you so much Deepanshu Bhai ye sab aapki guidence and support wajase possible ho paya hai again thank you so much bhai jald hi 200k karnege",
    },
    {
      img: profilePic2,
      review:
        "Junuuuuuuuu I'm sooo happy cried hugging both me friends ... Imagining that day when I don't have even 500rs tadap ho jati thi shaukh pure krne ke liye .... Agar jugnuu nhi hota to ye kaise hota ..I remember every happening howImet you,how you helped me to start,what if you haven't helped me asIwas having just 1k you trusted me,aaj yha nhi pahuch pati your Instagram poster turned blessing for me butm soo sooo happy happy happy ... First earning aur1lakh ki khusi dono alag hi peak par hai",
    },
    {
      img: profilePic3,
      review:
        "Deepanshu bhai 100k maine kbhi socha nhi tha yrr ki ma itna earn bhi kar paunga yeh online business ke through! Starting me socha tha ki bhai bs 5k nikal jaye ye business se toh bhot hai! But today I've earned more than 100k in just 2 months at the age of 17 just because of you you're always there for me whenever I need your help i can't explain this Lakhpati waala feeling Raat din ek krdiya tha maine yeh lakhpati waala tittle paane ke liye and today I feel like han mere jo      hardwork hai woh worth it tha Once again tysm deepanshu bhai for all your mentorship and everything!",
    },
    {
      img: profilePic4,
      review:
        "Hello Deepanshu Bro! 50K Done Muje aaj bhi yad hay,aapne usse waqth muje help ki thi jabh may apke saath work nahi karta tha,You use to remove time for me guide me,whenIneeded someone's guidence!Aap iss business may mere liye inspiration ho!Apke aisa bro,mentor aur sponsor milna sab ke nasibh may nahi hota greatful to work with you!Thank you for supporting me!God Bless You!",
    },
    {
      img: profilePic5,
      review:
        "So Finally 2 Lakh Done Thank You So Much Everyone For Supporting Me it would be Not Possible Without Your Help, Support, Gudiance, Many Many Thanks to Mr. Deepanshu Sain Sir who helped me and Supported Me to achieve this milestone",
    },
  ];
  const clientVideos = [
    {
      videoUrl:
        "https://youtube.com/shorts/xVmrkMtrlQg?feature=share",
    },
    {
      videoUrl:
        "https://youtube.com/shorts/uxToW4Q2oFY?feature=share",
    },
    {
      videoUrl:
        "https://youtube.com/shorts/BfUoVKsPgJI?feature=share",
    }
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span style={{ color: darkMode ? "white" : "" }}>My team </span>
        <span>Earns </span>
        <span style={{ color: darkMode ? "white" : "" }}>with me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {/* {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span
                  className="review"
                  style={{ color: darkMode ? "#bcbcbc" : "" }}
                >
                  {client.review}
                </span>
              </div>
            </SwiperSlide>
          );
        })} */}
        {clientVideos.map((client, index) => {
          return (
            <SwiperSlide key={index}>
            <ReactPlayer url={client.videoUrl} playIcon="true" controls="true"/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
