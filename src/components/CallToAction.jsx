import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  // Animate the call-to-action block on scroll using GSAP
  useGSAP(() => {
    gsap.from("#call-to-action", {
      scrollTrigger: {
        trigger: "#call-to-action",
        start: "top 85%", // animation starts when the top of the element reaches 85% of the viewport height
        toggleActions: "play none none none", // play only once
      },
      opacity: 0,
      y: 50, // move up from 50px below
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 md:mt-8 mb-16">
      {/* Animated container */}
      <div
        id="call-to-action"
        className="bg-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 ease-out text-center"
      >
        {/* Section title */}
        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          Prêt·e à rééquilibrer votre énergie ?
        </h2>

        {/* Description */}
        <p className="text-green-600 text-lg mb-8 max-w-3xl mx-auto">
          Que vous souhaitiez réserver une séance, poser une question ou
          simplement échanger, je suis à votre écoute.
        </p>

        {/* Contact button with arrow icon */}
        <Link
          to="/contact"
          className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-medium py-3 px-6 rounded-full transition"
        >
          Me contacter
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
