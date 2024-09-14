import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Seo from "./components/Seo";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {

  return (
    <div className="bg-bg-primary">
      <Nav />
      <Hero />
      <Gallery />
      <Seo />
      <Footer />
    </div>
  );
}

export default App;
