import React from "react";
import { Scale } from "lucide-react";

const MentionsLegales = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-green-800">
      <div className="flex items-center mb-6">
        <Scale className="w-7 h-7 mr-3" />
        <h1 className="text-3xl font-bold">Mentions légales</h1>
      </div>

      <p className="mb-4">
        Conformément aux dispositions des articles 6-III et 19 de la Loi
        n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique,
        il est précisé aux utilisateurs du site <strong>energieflow.fr</strong>{" "}
        l’identité des différents intervenants dans le cadre de sa réalisation
        et de son suivi.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Éditeur du site</h2>
      <p>
        EnergieFlow
        <br />
        [Nom de l'entreprise ou du praticien]
        <br />
        [Adresse complète]
        <br />
        SIRET : [numéro]
        <br />
        Email : contact@energieflow.fr
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Responsable de publication
      </h2>
      <p>[Nom complet]</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Hébergement</h2>
      <p>
        [Nom de l’hébergeur]
        <br />
        [Adresse de l’hébergeur]
        <br />
        Téléphone : [numéro]
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Propriété intellectuelle
      </h2>
      <p>
        Le site et chacun des éléments qui le composent sont la propriété
        exclusive de ÉnergieFlow. Toute reproduction ou représentation totale ou
        partielle, sans autorisation écrite préalable, est interdite.
      </p>
    </div>
  );
};

export default MentionsLegales;
