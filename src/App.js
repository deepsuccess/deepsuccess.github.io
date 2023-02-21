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
import { BrowserRouter } from "react-router-dom";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Admin from "./components/Admin/admin";
// Import the functions you need from the SDKs you need

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div
              className="App"
              style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "white" : "",
              }}
              id="start"
            >
              <Navbar
                style={{
                  background: darkMode ? "black" : "",
                  color: darkMode ? "white" : "",
                }}
              />
              <div className="mainContent">
                <Intro />
                {/* <Services /> */}
                <Presentation />
                <Experience />
                <Testimonial />
                {/* <Contact /> */}
              </div>
              <Footer />
            </div>
          }
        />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
