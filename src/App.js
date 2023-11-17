import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import { FaHeart } from "react-icons/fa";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App " style={{ background: "#080808", color: "white" , width:"100%" }}>
      <div id="header">
        <Navbar />
        <Header />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Services">
        <Services />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <footer className="text-center mt-5">
        <p>
          Made with <FaHeart style={{ color: "red" }} /> by Shivam
        </p>
      </footer>
    </div>
  );
}

export default App;
