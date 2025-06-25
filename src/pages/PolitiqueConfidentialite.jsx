import React from "react";
import { Lock } from "lucide-react";

const PolitiqueConfidentialite = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-green-800">
      <div className="flex items-center mb-6">
        <Lock className="w-7 h-7 mr-3" />
        <h1 className="text-3xl font-bold">Politique de confidentialité</h1>
      </div>

      <p className="mb-4">
        Cette politique de confidentialité décrit comment ÉnergieFlow collecte,
        utilise et protège vos données personnelles lorsque vous utilisez ce
        site.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Données collectées</h2>
      <p>
        Les données que vous fournissez via le formulaire de contact (nom,
        email, message) sont utilisées uniquement pour répondre à votre demande.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Cookies</h2>
      <p>
        Ce site utilise des cookies à des fins de statistiques et d’amélioration
        de l’expérience utilisateur. Vous pouvez configurer votre navigateur
        pour refuser les cookies.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Utilisation des données
      </h2>
      <p>
        Les données personnelles collectées ne sont jamais cédées à des tiers.
        Elles sont utilisées uniquement dans le cadre de la relation entre vous
        et ÉnergieFlow.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Droits des utilisateurs
      </h2>
      <p>
        Conformément au RGPD, vous disposez d’un droit d’accès, de
        rectification, d’opposition et de suppression de vos données. Pour
        exercer ces droits, contactez-nous à l’adresse : contact@energieflow.fr
      </p>
    </div>
  );
};

export default PolitiqueConfidentialite;
