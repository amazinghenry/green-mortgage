import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import HowItWorks from "./components/howitworks/HowItWorks";
import "./App.css";
import DidYouKnow from "./components/didyouknow/DidYouKnow";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <About />
      </div>
      <div>
        <HowItWorks />
      </div>
      <div>
        <DidYouKnow />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
