import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./components/Home";
import ServicePreview from "./components/ServicePreview";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Home />
      <ServicePreview />
    </main>
  );
};

export default App;
