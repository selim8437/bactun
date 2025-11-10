export default function ConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Conditions d’Utilisation</h1>

        <div className="bg-white shadow-md rounded-lg p-6 space-y-6 text-gray-700 leading-relaxed">
          <p>
            Bienvenue sur <strong>Cours Bac</strong>. En utilisant ce site, vous acceptez les conditions suivantes :
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Utilisation du contenu</h2>
            <p>
              Tout le contenu disponible sur Cours Bac (leçons, fiches, résumés) est fourni à titre éducatif et gratuit pour les élèves du Bac tunisien. Vous pouvez consulter et utiliser les leçons à des fins personnelles et non commerciales uniquement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Propriété intellectuelle</h2>
            <p>
              Les contenus publiés sur ce site sont la propriété de Cours Bac ou de leurs auteurs respectifs. Il est interdit de copier, redistribuer ou revendre les documents sans autorisation écrite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Responsabilité</h2>
            <p>
              Cours Bac fournit les leçons et résumés avec soin, mais ne peut garantir l’exactitude complète du contenu. L’utilisation du site se fait à vos propres risques.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier ces conditions à tout moment. Les utilisateurs sont invités à consulter régulièrement cette page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Contact</h2>
            <p>
              Pour toute question concernant ces conditions, contactez-nous à :{" "}
              <a href="mailto:contact@coursbac.tn" className="text-blue-600 hover:underline">
                contact@coursbac.tn
              </a>
            </p>
          </section>

          <p className="text-sm text-gray-500">Dernière mise à jour : Novembre 2025</p>
        </div>
      </div>
    </div>
  )
}
