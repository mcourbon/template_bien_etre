import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [validationError, setValidationError] = useState("");

  // Formspree configuration, client just has to give his url
  const FORMSPREE_URL = "https://formspree.io/f/xgvyroej";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationError("");
    setError("");

    // Field validation
    const missingFields = [];
    if (!formData.nom.trim()) missingFields.push("nom");
    if (!formData.email.trim()) missingFields.push("email");
    if (!formData.message.trim()) missingFields.push("message");

    if (missingFields.length > 0) {
      const fieldNames = {
        nom: "nom complet",
        email: "adresse email",
        message: "message"
      };
      const missingFieldNames = missingFields.map(field => fieldNames[field]);
      setValidationError(`Veuillez remplir ${missingFieldNames.length > 1 ? 'les champs' : 'le champ'} : ${missingFieldNames.join(', ')}`);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.nom,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur réseau');
      }

      setIsSubmitted(true);
      setFormData({ nom: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (err) {
      console.error("Erreur envoi:", err);
      setError("Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement par téléphone.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 text-green-700 pb-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-100 to-green-50 py-20">
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Parlons de votre bien-être
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-800">
            Contactez-moi
          </h1>
          <p className="text-lg text-green-600 leading-relaxed max-w-3xl mx-auto">
            Une question, une envie de séance, ou simplement besoin d'un échange
            bienveillant ?<br />
            <span className="font-semibold text-green-700">
              N'hésitez pas à me contacter, je vous répondrai dans les 24h.
            </span>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Contact Cards and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-6">
                Comment me joindre
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Mail className="text-green-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800 mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:contact@energieflow.fr"
                        className="text-green-600 hover:text-green-700 hover:underline transition-colors"
                      >
                        contact@energieflow.fr
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="text-green-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800 mb-1">
                        Téléphone
                      </h3>
                      <a
                        href="tel:+33638710076"
                        className="text-green-600 hover:text-green-700 hover:underline transition-colors"
                      >
                        06 38 71 00 76
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MapPin className="text-green-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800 mb-1">
                        Localisation
                      </h3>
                      <span className="text-green-600">Lyon, France</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Info */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-green-600 w-6 h-6" />
                <h3 className="font-semibold text-green-800">Disponibilités</h3>
              </div>
              <div className="space-y-2 text-green-700">
                <p>
                  <strong>Lundi - Vendredi :</strong> 9h00 - 18h00
                </p>
                <p>
                  <strong>Samedi :</strong> 9h00 - 16h00
                </p>
                <p>
                  <strong>Dimanche :</strong> Sur rendez-vous
                </p>
              </div>
              <div className="mt-4 p-3 bg-white rounded-lg border-l-4 border-green-400">
                <p className="text-sm text-green-700">
                  <strong>Réponse garantie sous 24h</strong> - Je m'engage à
                  vous répondre rapidement pour organiser notre première
                  rencontre.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-100">
            <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
              Envoyez-moi un message
            </h2>

            {/* Message's status */}
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3">
                <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-800">
                    Message envoyé avec succès !
                  </p>
                  <p className="text-sm text-green-600">
                    Je vous répondrai dans les plus brefs délais.
                  </p>
                </div>
              </div>
            )}

            {validationError && (
              <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-2xl flex items-center gap-3">
                <AlertCircle className="text-orange-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-orange-800">Champs manquants</p>
                  <p className="text-sm text-orange-600">{validationError}</p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3">
                <AlertCircle className="text-red-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-800">Erreur d'envoi</p>
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full border-2 border-green-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2">
                  Adresse email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full border-2 border-green-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2">
                  Votre message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  rows={6}
                  className="w-full border-2 border-green-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-400 transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Parlez-moi de vos attentes, de ce qui vous amène vers moi, ou de toute question que vous pourriez avoir..."
                  required
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-green-600 disabled:hover:to-green-500"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer mon message
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-green-600 text-center mt-4">
              Vos données personnelles sont protégées et ne seront jamais
              partagées.
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-100">
          <h2 className="text-3xl font-bold mb-6 text-green-800 text-center">
            Où me trouver ?
          </h2>
          <p className="text-center text-green-600 mb-8 max-w-2xl mx-auto">
            Basée à Lyon, je propose des séances en cabinet et également à
            domicile dans un rayon de 20km. Les consultations en ligne sont
            aussi possibles.
          </p>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-green-200">
            <iframe
              title="Carte Lyon"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2666.702341830106!2d4.835659815645135!3d45.76404397910568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea49e70c5c29%3A0x9ffb8cb4f62c3530!2sLyon%2C%20France!5e0!3m2!1sfr!2sfr!4v1719142482804!5m2!1sfr!2sfr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-2xl p-8 max-w-3xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Une première approche en douceur
            </h3>
            <p className="text-green-100 mb-6 leading-relaxed">
              Vous hésitez encore ? Un premier échange téléphonique de 15
              minutes est offert pour faire connaissance et répondre à toutes
              vos questions.
            </p>

            {/* Phone button */}
            <a
              href="tel:+33638710076"
              className="inline-flex items-center gap-3 bg-white text-green-600 font-semibold py-4 px-8 rounded-full hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
            >
              <Phone className="w-5 h-5" />
              Appelez-moi : 06 38 71 00 76
            </a>

            <p className="text-sm text-green-100">
              Aucun engagement • Échange bienveillant • Conseils personnalisés
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;