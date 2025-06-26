import React, { useEffect } from "react";
import {
  User,
  Users,
  Brain,
  Heart,
  Clock,
  MapPin,
  Euro,
  CheckCircle,
  Star,
  Phone,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useGSAP(() => {
    gsap.from("#cta", {
      scrollTrigger: {
        trigger: "#cta",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from("#bulle", {
      scrollTrigger: {
        trigger: "#bulle",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: -100,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".trust-item", {
      scrollTrigger: {
        trigger: ".trust-indicators",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  const services = [
    {
      id: "individuelles",
      title: "Séances individuelles",
      subtitle: "Un accompagnement personnalisé pour votre épanouissement",
      image: "/images/seances_individuelles.jpg",
      icon: <User className="w-8 h-8" />,
      description:
        "Un moment privilégié, rien que pour vous. Dans un cadre sécurisant et bienveillant, nous explorons ensemble vos besoins, vos blocages et vos aspirations pour créer un chemin sur mesure vers votre mieux-être.",
      benefits: [
        "Écoute attentive et sans jugement",
        "Techniques adaptées à vos besoins spécifiques",
        "Rythme respectueux de votre évolution",
        "Confidentialité absolue",
      ],
      duration: "1h à 1h30",
      price: "À partir de 60€",
      location: "Cabinet ou à domicile",
      techniques: [
        "Sophrologie",
        "Reiki",
        "Écoute active",
        "Techniques énergétiques",
      ],
    },
    {
      id: "groupe",
      title: "Ateliers de groupe",
      subtitle: "Partage et croissance collective dans la bienveillance",
      image: "/images/atelier_de_groupe.jpg",
      icon: <Users className="w-8 h-8" />,
      description:
        "Rejoignez un cercle de personnes partageant les mêmes aspirations. Ces ateliers créent un espace de partage authentique où chacun peut grandir grâce à l'énergie collective et la richesse des échanges.",
      benefits: [
        "Force du groupe et entraide",
        "Partage d'expériences enrichissant",
        "Tarif accessible pour tous",
        "Création de liens authentiques",
      ],
      duration: "2h à 2h30",
      price: "25€ par personne",
      location: "Salle dédiée à Lyon",
      techniques: [
        "Méditation guidée",
        "Exercices de sophrologie",
        "Cercles de parole",
        "Pratiques énergétiques collectives",
      ],
    },
    {
      id: "stress",
      title: "Gestion du stress",
      subtitle: "Retrouvez sérénité et équilibre dans votre quotidien",
      image: "/images/gestion_du_stress.jpg",
      icon: <Heart className="w-8 h-8" />,
      description:
        "Le stress fait partie de la vie, mais il ne doit pas la dominer. Apprenez des techniques concrètes et efficaces pour transformer votre relation au stress et retrouver votre pouvoir personnel.",
      benefits: [
        "Techniques de respiration apaisantes",
        "Gestion des émotions difficiles",
        "Outils pratiques pour le quotidien",
        "Renforcement de la confiance en soi",
      ],
      duration: "1h à 1h15",
      price: "55€",
      location: "Cabinet, en ligne ou à domicile",
      techniques: [
        "Cohérence cardiaque",
        "Relaxation progressive",
        "Ancrage énergétique",
        "Visualisations guidées",
      ],
    },
    {
      id: "preparation",
      title: "Préparation mentale",
      subtitle: "Optimisez vos performances et révélez votre potentiel",
      image: "/images/preparation_mentale.jpg",
      icon: <Brain className="w-8 h-8" />,
      description:
        "Que ce soit pour un projet professionnel, un examen, une compétition ou un changement de vie, préparez votre mental à exceller. Développez concentration, confiance et clarté d'esprit.",
      benefits: [
        "Amélioration de la concentration",
        "Gestion du trac et de l'anxiété",
        "Visualisation de la réussite",
        "Renforcement de la motivation",
      ],
      duration: "1h à 1h30",
      price: "65€",
      location: "Cabinet ou en ligne",
      techniques: [
        "Sophrologie dynamique",
        "PNL",
        "Visualisation créatrice",
        "Techniques de focus",
      ],
    },
  ];

  // Management of the scroll towards the anchor on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Petit délai pour s'assurer que la page est chargée
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 pb-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-100 to-green-50 py-20">
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 text-center">
          <div
            id="bulle"
            className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4" />
            Découvrez mes accompagnements
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-800">
            Mes Séances & Accompagnements
          </h1>
          <p className="text-lg text-green-600 leading-relaxed max-w-3xl mx-auto">
            Chaque personne est unique, c'est pourquoi je propose différentes
            formules d'accompagnement adaptées à vos besoins, votre rythme et
            vos objectifs personnels.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 ">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 items-center scroll-mt-20`}
            >
              {/* Image Section */}
              <div className="flex-1">
                <div className="relative group">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-[0%_30%] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-xl border border-green-100">
                    <div className="text-green-600">{service.icon}</div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-xl text-green-600 font-medium mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-green-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                  <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Les bénéfices
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-green-700 text-sm">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 rounded-xl p-4 text-center border border-green-200">
                    <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold text-green-800 text-sm">
                      Durée
                    </p>
                    <p className="text-green-600 text-sm">{service.duration}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 text-center border border-green-200">
                    <Euro className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold text-green-800 text-sm">
                      Tarif
                    </p>
                    <p className="text-green-600 text-sm">{service.price}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 text-center border border-green-200">
                    <MapPin className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold text-green-800 text-sm">Lieu</p>
                    <p className="text-green-600 text-sm">{service.location}</p>
                  </div>
                </div>

                {/* Techniques */}
                <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-xl p-6 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-3">
                    Techniques utilisées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.techniques.map((technique, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-green-700 px-3 py-1 rounded-full text-sm border border-green-200"
                      >
                        {technique}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  Réserver cette séance
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div
            id="cta"
            className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-6">
              Vous ne savez pas quelle séance choisir ?
            </h3>
            <p className="text-green-100 mb-8 text-lg leading-relaxed">
              Chaque parcours est unique. Offrons-nous un premier échange de 15
              minutes pour identifier ensemble l'accompagnement qui vous
              correspond le mieux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33638710076"
                className="inline-flex items-center gap-3 bg-white text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-green-50 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Échange gratuit de 15min
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto trust-indicators">
          <div className="text-center p-6 trust-item">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-green-800 mb-2">
              Première séance satisfaite ou remboursée
            </h4>
            <p className="text-green-600 text-sm">
              Votre satisfaction est ma priorité
            </p>
          </div>
          <div className="text-center p-6 trust-item">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-green-800 mb-2">
              Accompagnement bienveillant
            </h4>
            <p className="text-green-600 text-sm">
              Respect de votre rythme et de vos besoins
            </p>
          </div>
          <div className="text-center p-6 trust-item">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-green-800 mb-2">
              Disponible 7j/7
            </h4>
            <p className="text-green-600 text-sm">
              Flexibilité pour s'adapter à votre agenda
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
