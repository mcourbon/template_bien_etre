import React from "react";
import {
  HeartHandshake,
  Leaf,
  Smile,
  Sparkles,
  User,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 text-green-700 pb-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-100 to-green-50 py-20">
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div id="bulle" className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Bienvenue dans votre espace de transformation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-800">
            À propos d'<span className="text-green-600">Énergie Flow</span>
          </h1>
          <p className="text-lg text-green-600 leading-relaxed max-w-3xl mx-auto">
            Un espace dédié à votre bien-être, à votre écoute et à votre
            transformation intérieure. Mon approche est fondée sur la
            bienveillance, l'authenticité et l'accompagnement personnalisé.
            <span className="font-semibold text-green-700">
              {" "}
              Ici, chaque parcours est unique.
            </span>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-6 group-hover:bg-green-200 transition-colors">
                <HeartHandshake className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-green-800">
                Accompagnement humain
              </h3>
              <p className="text-green-600 leading-relaxed">
                Je vous accueille avec respect et empathie, dans un cadre
                sécurisant et sans jugement. Votre vulnérabilité est honorée et
                protégée.
              </p>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-6 group-hover:bg-green-200 transition-colors">
                <Leaf className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-green-800">
                Équilibre naturel
              </h3>
              <p className="text-green-600 leading-relaxed">
                Mon approche privilégie l'harmonie entre corps, esprit et
                émotions pour un mieux-être durable et authentique.
              </p>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-6 group-hover:bg-green-200 transition-colors">
                <Smile className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-green-800">
                Joie et légèreté
              </h3>
              <p className="text-green-600 leading-relaxed">
                Le chemin vers soi peut aussi être doux, lumineux et
                profondément libérateur. Redécouvrez la joie d'être vous-même.
              </p>
            </div>
          </div>
        </div>

        {/* About Sandrine Section */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-8 md:p-12 mb-16 shadow-inner">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="bg-white p-6 rounded-full shadow-lg">
                <User className="w-16 h-16 text-green-600" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6 text-green-800">
                Qui suis-je ?
              </h2>
              <p className="text-lg leading-relaxed text-green-700 mb-4">
                Je m'appelle{" "}
                <strong className="text-green-800">Sandrine</strong>,
                praticienne engagée dans l'accompagnement des personnes en quête
                de sens, de paix intérieure ou d'un nouveau souffle.
              </p>
              <p className="text-lg leading-relaxed text-green-700">
                Formée à différentes approches holistiques, je mets mes
                compétences au service de votre cheminement personnel, avec
                douceur, présence et une profonde attention à ce qui vous anime.
              </p>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-green-100">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-green-100 p-4 rounded-full">
              <Award className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-green-800 text-center">
            Mon parcours
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-400">
              <h3 className="font-semibold text-green-800 mb-3">Les débuts</h3>
              <p className="text-green-700 leading-relaxed">
                Après plusieurs années dans le domaine de{" "}
                <strong>l'éducation et de l'accompagnement social</strong>, j'ai
                ressenti le besoin de me tourner vers des pratiques plus
                alignées avec mes valeurs profondes.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-400">
              <h3 className="font-semibold text-green-800 mb-3">
                La formation
              </h3>
              <p className="text-green-700 leading-relaxed">
                Je me suis formée à <strong>la sophrologie</strong>, aux{" "}
                <strong>techniques énergétiques</strong>
                (Reiki, soins vibratoires) ainsi qu'à l'
                <strong>écoute active</strong> et à la{" "}
                <strong>pleine présence</strong>.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-400">
              <h3 className="font-semibold text-green-800 mb-3">Aujourd'hui</h3>
              <p className="text-green-700 leading-relaxed">
                Ce parcours m'a permis d'unir mes compétences humaines et
                spirituelles pour proposer un accompagnement authentique, adapté
                à chacun·e, et toujours dans le respect du rythme personnel.
                <strong>
                  {" "}
                  Votre histoire compte, votre timing est respecté.
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div
            id="cta"
            className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-2xl p-8 max-w-2xl mx-auto shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4">
              Prêt·e à commencer votre transformation ?
            </h3>
            <p className="text-green-100 mb-6 leading-relaxed">
              Chaque voyage commence par un premier pas. Permettez-moi de vous
              accompagner sur ce chemin vers une version plus épanouie de
              vous-même.
            </p>
            <Link to="/seances">
              <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-green-50 transition-colors shadow-lg">
                Découvrir mes accompagnements
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
