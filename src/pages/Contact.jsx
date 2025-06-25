import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-green-700 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Contactez-moi</h1>
        <p className="md:text-center text-green-600 mb-10">
          Une question, une envie de séance, ou simplement besoin d’un échange bienveillant ?<br />
          N’hésitez pas à me contacter, je vous répondrai au plus vite.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Coordonnées */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-green-600" />
              <a href="mailto:contact@energieflow.fr" className="hover:underline">
                contact@energieflow.fr
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-green-600" />
              <a href="tel:+33638710076" className="hover:underline">
                06 38 71 00 76
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-green-600" />
              <span>Lyon, France</span>
            </div>
          </div>

          {/* Formulaire */}
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message envoyé !");
            }}
          >
            <div>
              <label className="block text-sm mb-1">Nom</label>
              <input
                type="text"
                className="w-full border border-green-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-green-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows="5"
                className="w-full border border-green-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 text-white py-2 px-6 rounded-full transition block mx-auto"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* Carte Google Maps */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-4 text-green-700 text-center">
            Où me trouver ?
          </h2>
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Carte Lyon"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2666.702341830106!2d4.835659815645135!3d45.76404397910568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea49e70c5c29%3A0x9ffb8cb4f62c3530!2sLyon%2C%20France!5e0!3m2!1sfr!2sfr!4v1719142482804!5m2!1sfr!2sfr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
