"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { Card } from "@/components/ui/card"
import { ArrowLeft, BookOpen, Clock, Download } from "lucide-react"

// Mock lesson data
const LESSONS_DATA: Record<
  string,
  Record<
    string,
    {
      name: string
      lessons: Array<{
        id: string
        title: string
        duration: string
        description: string
        type: "video" | "document" | "exercise"
        pdfUrl: string
      }>
    }
  >
> = {
  maths: {
    Maths: {
      name: "Maths",
      lessons: [
        {
          id: "l1",
          title: "Introduction aux équations linéaires",
          duration: "15 min",
          description: "Comprendre les bases des équations",
          type: "document",
          pdfUrl: "/lessons/67_711.pdf",
        },
        {
          id: "l2",
          title: "Résoudre des équations à une variable",
          duration: "20 min",
          description: "Techniques de résolution",
          type: "video",
          pdfUrl: "/pdfs/maths/algebra/l2.pdf",
        },
        {
          id: "l3",
          title: "Exercices d'équations",
          duration: "30 min",
          description: "Pratiquez vos compétences",
          type: "exercise",
          pdfUrl: "/pdfs/maths/algebra/l3.pdf",
        },
        {
          id: "l4",
          title: "Polynômes et factorisation",
          duration: "25 min",
          description: "Concepts avancés",
          type: "document",
          pdfUrl: "/pdfs/maths/algebra/l4.pdf",
        },
      ],
    },
    Physique: {
      name: "Physique",
      lessons: [
        {
          id: "l1",
          title: "Formes géométriques de base",
          duration: "15 min",
          description: "Points, lignes et angles",
          type: "video",
          pdfUrl: "/pdfs/maths/geometry/l1.pdf",
        },
        {
          id: "l2",
          title: "Triangles et propriétés",
          duration: "20 min",
          description: "Classification et théorèmes",
          type: "video",
          pdfUrl: "/pdfs/maths/geometry/l2.pdf",
        },
        {
          id: "l3",
          title: "Cercles et circonférence",
          duration: "18 min",
          description: "Géométrie circulaire",
          type: "document",
          pdfUrl: "/pdfs/maths/geometry/l3.pdf",
        },
        {
          id: "l4",
          title: "Problèmes de géométrie",
          duration: "40 min",
          description: "Exercices pratiques",
          type: "exercise",
          pdfUrl: "/pdfs/maths/geometry/l4.pdf",
        },
      ],
    },
  },
  science: {
    physics: {
      name: "Physique",
      lessons: [
        {
          id: "l1",
          title: "Lois du mouvement de Newton",
          duration: "22 min",
          description: "Force et accélération",
          type: "video",
          pdfUrl: "/pdfs/science/physics/l1.pdf",
        },
        {
          id: "l2",
          title: "Énergie et travail",
          duration: "25 min",
          description: "Conservation d'énergie",
          type: "video",
          pdfUrl: "/pdfs/science/physics/l2.pdf",
        },
        {
          id: "l3",
          title: "Électricité et magnétisme",
          duration: "30 min",
          description: "Champs et circuits",
          type: "document",
          pdfUrl: "/pdfs/science/physics/l3.pdf",
        },
        {
          id: "l4",
          title: "Expériences de physique",
          duration: "45 min",
          description: "Apprentissage pratique",
          type: "exercise",
          pdfUrl: "/pdfs/science/physics/l4.pdf",
        },
      ],
    },
    chemistry: {
      name: "Chimie",
      lessons: [
        {
          id: "l1",
          title: "Structure atomique",
          duration: "18 min",
          description: "Atomes et électrons",
          type: "video",
          pdfUrl: "/pdfs/science/chemistry/l1.pdf",
        },
        {
          id: "l2",
          title: "Réactions chimiques",
          duration: "20 min",
          description: "Équilibrer les équations",
          type: "video",
          pdfUrl: "/pdfs/science/chemistry/l2.pdf",
        },
        {
          id: "l3",
          title: "La table périodique",
          duration: "25 min",
          description: "Éléments et propriétés",
          type: "document",
          pdfUrl: "/pdfs/science/chemistry/l3.pdf",
        },
        {
          id: "l4",
          title: "Laboratoire virtuel",
          duration: "50 min",
          description: "Simuler des réactions",
          type: "exercise",
          pdfUrl: "/pdfs/science/chemistry/l4.pdf",
        },
      ],
    },
  },
}

function getTypeIcon(type: string) {
  return <Download className="w-4 h-4" />
}

function getTypeColor(type: string) {
  return "bg-red-100 text-red-700"
}

function getTypeLabel(type: string) {
  return "PDF"
}

export default function SubjectPage() {
  const params = useParams()
  const sectionId = params.id as string
  const subjectId = params.subjectId as string

  const subjectData = LESSONS_DATA[sectionId]?.[subjectId]

  if (!subjectData) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Link
            href={`/section/${sectionId}`}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft size={20} />
            Retour au sujet
          </Link>
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-slate-900">Sujet non trouvé</h1>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Link
            href={`/section/${sectionId}`}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 w-fit"
          >
            <ArrowLeft size={20} />
            Retour
          </Link>
          <div className="flex items-center gap-3">
            <BookOpen size={32} />
            <div>
              <h1 className="text-4xl font-bold">{subjectData.name}</h1>
              <p className="text-indigo-100 text-lg mt-1">{subjectData.lessons.length} leçons disponibles</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {subjectData.lessons.map((lesson) => (
            <Card
              key={lesson.id}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-102 cursor-pointer border-l-4 border-l-red-600"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getTypeColor(lesson.type)}`}
                    >
                      {getTypeIcon(lesson.type)}
                      {getTypeLabel(lesson.type)}
                    </span>
                    <div className="flex items-center gap-1 text-slate-600 text-sm">
                      <Clock size={16} />
                      {lesson.duration}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">{lesson.title}</h3>
                  <p className="text-slate-600">{lesson.description}</p>
                </div>
                <a
                  href={lesson.pdfUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap"
                >
                  <Download size={16} />
                  Télécharger
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
