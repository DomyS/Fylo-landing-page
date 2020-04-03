import React from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import Header from "./components/Header/Header";
import LogoPage from "./components/LogoPage/LogoPage";
import Productive from "./components/Productive/Productive";
import Quotes from "./components/Quotes/Quotes";
import Access from "./components/Access/Access";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <LogoPage />
      <Productive />
      <Quotes />
      <Access />
      <Footer />
    </div>
  );
}

export default App;
