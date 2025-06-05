import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.to(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="py-16 px-6 text-center flex justify-center items-center">
      <div className="relative md:w-[80vw] sm:w-full max-w-[1400px] h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-xl">
        {/* Vidéo de fond avec luminosité réduite */}
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.8)" }} // 0.7 = 70% luminosité (un peu sombre)
        >
          <source src="/videos/relaxation.mp4" type="video/mp4" />
        </video>

        {/* Overlay texte */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white text-center">
          <h1 className="g_fadeIn text-4xl md:text-6xl font-semibold leading-tight">
            Sérénité & équilibre
          </h1>
          <p className="g_fadeIn mt-6 text-lg md:text-xl max-w-3xl">
            Séances de sophrologie personnalisées pour apaiser l’esprit et le
            corps.
          </p>
          <button className="g_fadeIn mt-10 bg-green-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-green-500 transition-colors">
            Découvrir
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
