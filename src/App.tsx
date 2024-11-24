import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import HowItWorks from "./components/howitworks/HowItWorks";
import "./App.css";
import DidYouKnow from "./components/didyouknow/DidYouKnow";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
import GetStartedRibbon from "./components/getstarted/GetStarted";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MortgageCalculator from "./components/mortgagecalculator/MortgageCalculator";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Route for the Mortgage Calculator with NavBar and Footer only */}
        <Route
          path="mortgage-calculator"
          element={
            <>
              <MortgageCalculator />
              <Footer />
            </>
          }
        />
        {/* Main route for the home page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <HowItWorks />
              <DidYouKnow />
              <Testimonial />
              <GetStartedRibbon />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
