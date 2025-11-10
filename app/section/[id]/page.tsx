"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { Card } from "@/components/ui/card"
import { ArrowLeft, BookMarked } from "lucide-react"

// Mock data for sections and their subjects
const SECTIONS_DATA: Record<
  string,
  { name: string; color: string; subjects: Array<{ id: string; name: string; description: string }> }
> = {
  maths: {
    name: "Mathématiques",
    color: "from-blue-500 to-blue-600",
    subjects: [
      { id: "Maths", name: "Maths", description: "Équations, inéquations et polynômes" },
      { id: "Physique", name: "Physique", description: "Formes, angles et transformations" },
      { id: "Science", name: "Science", description: "Dérivées, intégrales et limites" },
      { id: "Arabe", name: "Arabe", description: "Données, probabilités et analyse" },
      { id: "Francais", name: "Francais", description: "Équations, inéquations et polynômes" },
      { id: "Anglais", name: "Anglais", description: "Formes, angles et transformations" },
      { id: "Philo", name: "Philo", description: "Dérivées, intégrales et limites" },
      { id: "Informatique", name: "Informatique", description: "Données, probabilités et analyse" },
    ],
  },
  science: {
    name: "Sciences",
    color: "from-green-500 to-green-600",
    subjects: [
      
      { id: "Maths", name: "Maths", description: "Équations, inéquations et polynômes" },
      { id: "Physique", name: "Physique", description: "Formes, angles et transformations" },
      { id: "Science", name: "Science", description: "Dérivées, intégrales et limites" },
      { id: "Arabe", name: "Arabe", description: "Données, probabilités et analyse" },
      { id: "Francais", name: "Francais", description: "Équations, inéquations et polynômes" },
      { id: "Anglais", name: "Anglais", description: "Formes, angles et transformations" },
      { id: "Philo", name: "Philo", description: "Dérivées, intégrales et limites" },
      { id: "Informatique", name: "Informatique", description: "Données, probabilités et analyse" },
    ],
  },
  informatique: {
    name: "Informatique",
    color: "from-purple-500 to-purple-600",
    subjects: [
      { id: "Maths", name: "Maths", description: "Équations, inéquations et polynômes" },
      { id: "Physique", name: "Physique", description: "Formes, angles et transformations" },
      { id: "Algorithme", name: "Algorithme", description: "Dérivées, intégrales et limites" },
      { id: "Arabe", name: "Arabe", description: "Données, probabilités et analyse" },
      { id: "Francais", name: "Francais", description: "Équations, inéquations et polynômes" },
      { id: "Anglais", name: "Anglais", description: "Formes, angles et transformations" },
      { id: "Philo", name: "Philo", description: "Dérivées, intégrales et limites" },
      { id: "STI", name: "STI", description: "Données, probabilités et analyse" },
      
    ],
  },
  sport: {
    name: "Éducation Physique",
    color: "from-orange-500 to-orange-600",
    subjects: [
     { id: "Maths", name: "Maths", description: "Équations, inéquations et polynômes" },
      { id: "Physique", name: "Physique", description: "Formes, angles et transformations" },
      { id: "Science", name: "Science Biologique", description: "Dérivées, intégrales et limites" },
      { id: "Arabe", name: "Arabe", description: "Données, probabilités et analyse" },
      { id: "Francais", name: "Francais", description: "Équations, inéquations et polynômes" },
      { id: "Anglais", name: "Anglais", description: "Formes, angles et transformations" },
      { id: "Philo", name: "Philo", description: "Dérivées, intégrales et limites" },
      { id: "Sport-pratique", name: "Sport Pratique", description: "Données, probabilités et analyse" },
      { id: "Sport-theorique", name: "Sport Theorique", description: "Données, probabilités et analyse" },
      { id: "Edu-phy", name: "Education Physique", description: "Données, probabilités et analyse" },

    ],
  },
  economics: {
    name: "Économie & Gestion",
    color: "from-amber-500 to-amber-600",
    subjects: [
      { id: "Maths", name: "Maths", description: "Équations, inéquations et polynômes" },
      { id: "eco", name: "Economie", description: "Formes, angles et transformations" },
      { id: "gestion", name: "Gestion", description: "Dérivées, intégrales et limites" },
      { id: "Arabe", name: "Arabe", description: "Données, probabilités et analyse" },
      { id: "Francais", name: "Francais", description: "Équations, inéquations et polynômes" },
      { id: "Anglais", name: "Anglais", description: "Formes, angles et transformations" },
      { id: "Philo", name: "Philo", description: "Dérivées, intégrales et limites" },
      { id: "his", name: "Histoire", description: "Dérivées, intégrales et limites" },
      { id: "geo", name: "Geography", description: "Dérivées, intégrales et limites" },

      { id: "Informatique", name: "Informatique", description: "Données, probabilités et analyse" },
    ],
  },
  technique: {
    name: "Filières Techniques",
    color: "from-slate-500 to-slate-600",
    subjects: [
      { id: "Maths", name: "Maths", description: "Équations, inéquations et polynômes" },
      { id: "Physique", name: "Physique", description: "Formes, angles et transformations" },
      { id: "technologie", name: "Technologie", description: "Dérivées, intégrales et limites" },
      { id: "technologie-tp", name: "Technologie TP", description: "Dérivées, intégrales et limites" },
      { id: "Arabe", name: "Arabe", description: "Données, probabilités et analyse" },
      { id: "Francais", name: "Francais", description: "Équations, inéquations et polynômes" },
      { id: "Anglais", name: "Anglais", description: "Formes, angles et transformations" },
      { id: "Philo", name: "Philo", description: "Dérivées, intégrales et limites" },
      { id: "Informatique", name: "Informatique", description: "Données, probabilités et analyse" },
    ],
  },
  lettres: {
    name: "Filières lettres",
    color: "from-red-500 to-red-600",
    subjects: [
      { id: "islam", name: "Pense islamique", description: "Équations, inéquations et polynômes" },
      { id: "his", name: "Histoire", description: "Formes, angles et transformations" },
      { id: "geo", name: "Geographie", description: "Dérivées, intégrales et limites" },
      { id: "Arabe", name: "Arabe", description: "Données, probabilités et analyse" },
      { id: "Francais", name: "Francais", description: "Équations, inéquations et polynômes" },
      { id: "Anglais", name: "Anglais", description: "Formes, angles et transformations" },
      { id: "Philo", name: "Philo", description: "Dérivées, intégrales et limites" },
      { id: "Informatique", name: "Informatique", description: "Données, probabilités et analyse" },
    ],
  },
}

export default function SectionPage() {
  const params = useParams()
  const sectionId = params.id as string
  const sectionData = SECTIONS_DATA[sectionId]

  if (!sectionData) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft size={20} />
            Retour à l'accueil
          </Link>
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-slate-900">Section non trouvée</h1>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className={`bg-gradient-to-r ${sectionData.color} text-white`}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white mb-4 w-fit">
            <ArrowLeft size={20} />
            Retour
          </Link>
          <div className="flex items-center gap-3">
            <BookMarked size={32} />
            <h1 className="text-4xl font-bold">{sectionData.name}</h1>
          </div>
          <p className="text-white/80 text-lg mt-2">Découvrez tous les sujets et ressources disponibles</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {sectionData.subjects.map((subject) => (
            <Link key={subject.id} href={`/section/${sectionId}/subject/${subject.id}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer p-6">
                <h2 className="text-2xl font-semibold text-slate-900 mb-2">{subject.name}</h2>
                <p className="text-slate-600 mb-4">{subject.description}</p>
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  Voir les leçons →
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
