import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackgroundShapes from "./BackgroundShapes";

gsap.registerPlugin(ScrollTrigger);

const ServicePreview = () => {
//   useGSAP(() => {
//     gsap.from(
//       ["#service-1", "#service-2", "#service-3", "#service-4"],
//       {
//         scrollTrigger: {
//           trigger: "#service-grid",
//           start: "top 80%",
//           toggleActions: "play none none none",
//         },
//         opacity: 0,
//         y: 40,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power2.out",
//       }
//     );
//   }, []);

  const services = [
    {
      id: "service-1",
      title: "Séances individuelles",
      image: "/images/seances_individuelles.jpg",
      alt: "Séances individuelles",
    },
    {
      id: "service-2",
      title: "Ateliers de groupe",
      image: "/images/atelier_de_groupe.jpg",
      alt: "Ateliers de groupe",
    },
    {
      id: "service-3",
      title: "Gestion du stress",
      image: "/images/gestion_du_stress.jpg",
      alt: "Gestion du stress",
    },
    {
      id: "service-4",
      title: "Préparation mentale",
      image: "/images/preparation_mentale.jpg",
      alt: "Préparation mentale",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 relative">
      <BackgroundShapes
        type="roundedTriangle"
        position="top-right"
        size="w-48 h-48"
        color="text-green-300"
        opacity="opacity-20"
        offset="-top-8 -right-16"
      />
      <BackgroundShapes
        type="roundedSquare"
        position="bottom-left"
        size="w-40 h-40"
        color="text-green-300"
        opacity="opacity-20"
        offset="bottom-0 -left-16 rotate-45"
      />
      
      <div
        id="service-grid"
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
      >
        {services.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform"
          >
            {/* Container d'image avec aspect ratio fixe */}
            <div className="relative w-full aspect-[4/6]">
              <img
                src={service.image}
                alt={service.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Gradient overlay pour le texte */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Overlay coloré subtil au hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Texte en overlay sur l'image */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
              <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl leading-tight text-center drop-shadow-lg">
                {service.title}
              </h3>
              
              {/* Petite barre décorative */}
              <div className="w-12 h-1 bg-white/80 mx-auto mt-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>

            {/* Badge ou icône en haut à droite (optionnel) */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePreview;