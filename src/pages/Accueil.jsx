// src/pages/Accueil.jsx
import React from "react";
import Hero from "../components/Hero";
import Home from "../components/Home";
import ServicePreview from "../components/ServicePreview";
import CallToAction from "../components/CallToAction";

const Accueil = () => {
  return (
    <>
      <Hero />
      <Home />
      <ServicePreview />
      <CallToAction />
    </>
  );
};

export default Accueil;
