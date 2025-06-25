import React from "react";
import { HandHeart, Leaf } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackgroundShapes from "./BackgroundShapes";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    gsap.from("#bloc-1", {
      scrollTrigger: {
        trigger: "#bloc-1",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from("#bloc-2", {
      scrollTrigger: {
        trigger: "#bloc-2",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from("#bloc-3", {
      scrollTrigger: {
        trigger: "#bloc-3",
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-16 relative md:mt-8 overflow-hidden md:overflow-visible">
      {/* Blocs 1 et 2 côte à côte */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bloc Sophrologie */}
        <div id="bloc-1" className="relative">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <BackgroundShapes />
          </div>

          <div className="bg-green-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 ease-out relative z-5">
            <div className="flex items-center mb-4">
              <Leaf className="text-green-700 w-7 h-7 mr-3" />
              <h2 className="text-xl font-semibold text-green-700">
                La Sophrologie, qu’est-ce que c’est ?
              </h2>
            </div>
            <p className="text-green-600 text-base mb-4">
              Une méthode douce et accessible qui vous aide à retrouver
              équilibre, sérénité et mieux-être au quotidien.
            </p>
          </div>
        </div>

        {/* Bloc Approche */}
        <div id="bloc-2" className="relative">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <BackgroundShapes
              type="roundedSquare"
              position="bottom-right"
              size="w-40 h-40"
              color="text-green-300"
              opacity="opacity-20"
            />
          </div>

          <div className="bg-green-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 ease-out relative z-5">
            <div className="flex items-center mb-4">
              <HandHeart className="text-green-700 w-7 h-7 mr-3" />
              <h2 className="text-xl font-semibold text-green-700">
                Notre approche personnalisée
              </h2>
            </div>
            <p className="text-green-600 text-base mb-4">
              Chaque séance est conçue pour vous accompagner selon vos besoins
              spécifiques, avec bienveillance et expertise.
            </p>
          </div>
        </div>
      </div>

      {/* CTA final vers À propos */}
      <div id="bloc-3" className="text-center pt-6">
        <p className="text-xl font-semibold text-green-700 mb-4">
          Envie d’en savoir plus sur notre démarche globale ?
        </p>

        <Link
          to="/a-propos"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-500 transition-colors font-medium shadow"
        >
          En savoir plus sur nous
        </Link>
      </div>
    </section>
  );
};

export default Home;
