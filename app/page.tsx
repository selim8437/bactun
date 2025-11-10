"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

const SECTIONS = [
  { id: "maths", name: "Math", color: "from-blue-500 to-blue-600", icon: "∑" },
  { id: "science", name: "Science", color: "from-green-500 to-green-600", icon: "⚗" },
  { id: "informatique", name: "Informatique", color: "from-purple-500 to-purple-600", icon: "💻" },
  { id: "sport", name: "Sport", color: "from-orange-500 to-orange-600", icon: "⚽" },
  { id: "economics", name: "Économie & Gestion", color: "from-amber-500 to-amber-600", icon: "📈" },
  { id: "technique", name: "Technique", color: "from-slate-500 to-slate-600", icon: "🔧" },
  { id: "lettres", name: "Lettres", color: "from-red-500 to-red-600", icon: "📖" },

]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen size={32} />
            <h1 className="text-4xl font-bold">Bac Tunisie</h1>
          </div>
          <p className="text-blue-100 text-lg">
            Accédez à tous les cours pour votre année de baccalaureat, tout les eleves doit avoir le cours gratuitement 
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTIONS.map((section) => (
            <Link key={section.id} href={`/section/${section.id}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                <div className={`bg-gradient-to-br ${section.color} h-20 flex items-center justify-center text-4xl`}>
                  {section.icon}
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-slate-900">{section.name}</h2>
                  <p className="text-slate-600 text-sm mt-2">Explorez tous les sujets et leçons</p>
                  <div className="mt-4 inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                    Voir les contenus →
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
