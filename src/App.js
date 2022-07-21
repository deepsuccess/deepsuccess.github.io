import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Testimonial from "./components/Testimonials/Testimonial";
import Footer from "./components/Footer/Footer";
import Presentation from "./components/Presentation/presentation";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}/>
      <div className="mainContent">

      <Intro />
      <Services />
      <Experience />

      <Presentation />
      <Testimonial />
      {/* <Contact /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
