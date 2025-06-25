import React from "react";
import { Facebook, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-50 text-green-700 py-5 mt-20">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo ou nom */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Équilibre & Sérénité</h3>
          <p className="text-green-600 text-sm">
            Accompagnement bienveillant pour retrouver votre harmonie
            intérieure.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Liens utiles</h4>
          <ul className="space-y-2 text-green-600 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/a-propos" className="hover:underline">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/seances" className="hover:underline">
                Séances
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Pages légales */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Informations légales</h4>
          <ul className="space-y-2 text-green-600 text-sm">
            <li>
              <Link to="/mentions-legales" className="hover:underline">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                to="/politique-de-confidentialite"
                className="hover:underline"
              >
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux / contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-green-600 text-sm">
            <li className="flex items-center gap-2">
              <a
                href="mailto:contact@energieflow.fr"
                className="hover:underline"
              >
                contact@energieflow.fr
              </a>
            </li>
            <li className="flex gap-4 mt-4">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-green-900 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-green-900 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-100 mt-10 pt-6 text-center text-sm text-green-500">
        &copy; {new Date().getFullYear()} EnergieFlow - Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
