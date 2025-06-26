import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  // GSAP animation triggered on component mount
  useGSAP(() => {
    gsap.to(".g_fadeIn", {
      opacity: 1, // Fade in to full opacity
      y: 0, // Animate vertical position to 0 (original place)
      duration: 1, // Animation duration 1 second
      stagger: 0.3, // Stagger animation start for each element by 0.3 seconds
      ease: "power1.inOut", // Easing function for smooth animation
    });
  }, []);

  return (
    // Hero section with padding and flex centering
    <section className="py-16 px-6 text-center flex justify-center items-center">
      {/* Container with responsive width/height, rounded corners and shadow */}
      <div className="relative md:w-[80vw] sm:w-full max-w-[1400px] h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-xl">
        {/* Background video with reduced brightness */}
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.8)" }} // 80% brightness for a slightly darkened effect
        >
          <source src="/videos/relaxation.mp4" type="video/mp4" />
        </video>

        {/* Text overlay positioned absolutely, centered flex column */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white text-center">
          {/* Main heading with fade-in animation class */}
          <h1 className="g_fadeIn text-4xl md:text-6xl font-semibold leading-tight">
            Sérénité & Équilibre
          </h1>

          {/* Subtitle paragraph with same fade-in animation */}
          <p className="g_fadeIn mt-6 text-lg md:text-xl max-w-3xl">
            Séances de sophrologie personnalisées pour apaiser l’esprit et le
            corps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
