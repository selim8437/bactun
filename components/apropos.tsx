"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
          À propos de <span className="text-blue-600">Cours Bac</span>
        </h1>

        <Card className="shadow-md border-blue-100">
          <CardContent className="space-y-6 p-6 text-gray-700 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">👋 Qui sommes-nous ?</h2>
              <p>
                <strong>Cours Bac</strong> est une application web tunisienne que j’ai développée seul, avec une idée simple :
                permettre à tous les élèves du <strong>baccalauréat</strong> d’accéder librement à leurs leçons.
              </p>
              <p className="mt-2">
                Après avoir constaté que certaines personnes vendaient des cours en ligne, j’ai voulu réagir. On peut vendre
                beaucoup de choses, mais <strong>pas l’accès à la connaissance</strong>. En Tunisie, l’éducation est un droit
                fondamental et doit rester <strong>gratuite pour tous</strong>. C’est dans cet esprit qu’est né <strong>Cours Bac</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">🎯 Notre objectif</h2>
              <p>
                Offrir à chaque élève tunisien un accès simple et rapide à des <strong>leçons claires et bien organisées</strong>,
                selon sa <strong>section du Bac</strong> (Math, Sciences, Technique, Économie, Lettres, etc.).
              </p>
              <p className="mt-2">
                <strong>Cours Bac</strong> ne contient que des <strong>leçons</strong> — pas de vidéos, pas d’exercices payants — 
                juste le contenu essentiel pour apprendre, comprendre et réussir le Bac.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">💻 Développé avec Next.js</h2>
              <p>
                L’application est construite avec <strong>Next.js</strong>, un framework moderne qui offre une navigation fluide,
                rapide et adaptée à tous les appareils : ordinateurs, tablettes et smartphones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">📚 Contenu disponible</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Leçons classées par section du Bac tunisien</li>
                <li>Descriptions claires et structurées de chaque chapitre</li>
                <li>Accès libre et sans inscription</li>
                <li>Mise à jour continue du contenu</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">📩 Contact</h2>
              <p>
                Une idée, une suggestion ou une correction ?  
                👉 <strong>Écris-moi à :</strong>{" "}
                <a
                  href="mailto:contact@coursbac.tn"
                  className="text-blue-600 hover:underline"
                >
                  contact@coursbac.tn
                </a>
              </p>
            </section>

          </CardContent>
        </Card>
      </div>
    </div>
  )
}
