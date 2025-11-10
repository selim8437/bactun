export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Politique de Confidentialité</h1>

        <div className="bg-white shadow-md rounded-lg p-6 space-y-6 text-gray-700 leading-relaxed">
          <p>
            Chez <strong>Cours Bac</strong>, nous respectons votre vie privée. Cette politique explique quelles informations nous collectons et comment nous les utilisons.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Collecte d’informations</h2>
            <p>
              Nous ne collectons pas d’informations personnelles des utilisateurs lorsque vous consultez les leçons. Aucun compte ou inscription n’est nécessaire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Cookies</h2>
            <p>
              Ce site n’utilise pas de cookies pour collecter des informations personnelles. Certains cookies peuvent être utilisés uniquement pour des besoins techniques (navigation, performance), mais aucune donnée identifiable n’est stockée.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Contact</h2>
            <p>
              Pour toute question concernant la confidentialité, vous pouvez nous écrire à :{" "}
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
