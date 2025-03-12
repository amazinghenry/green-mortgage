import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import "./App.css";
import DidYouKnow from "./components/didyouknow/DidYouKnow";
import MortgageChecklist from "./components/mortgagechecklist/MortgageChecklist";
import MortgageChecklistwo from "./components/mortgagechecklistwo/MortgageChecklistwo";
import Footer from "./components/footer/Footer";
import GetStartedRibbon from "./components/getstarted/GetStarted";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MortgageCalculator from "./components/mortgagecalculator/MortgageCalculator";
import Cto from "./components/cto/Cto";
import NotFound from "./components/notfound/NotFound";

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
        <Route
          path="mortgage-checklist"
          element={
            <>
              <MortgageChecklist />
            </>
          }
        />

        <Route
          path="mortgagechecklist"
          element={
            <>
              <MortgageChecklistwo />
            </>
          }
        />

        {/* Main route for the home page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Cto />
              <About />
              <DidYouKnow />
              <GetStartedRibbon />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
