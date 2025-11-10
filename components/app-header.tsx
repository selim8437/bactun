"use client"

import Link from "next/link"
import { BookOpen, Menu, X } from "lucide-react"
import { useState } from "react"

export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="bg-blue-600 p-2 rounded-lg">
            <BookOpen size={24} className="text-white" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-slate-900">Cours Bac</h1>
            <p className="text-xs text-slate-600">Tunisie</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
            Accueil
          </Link>
          <Link href="/apropos" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium py-2">
            À propos
          </Link>
           <Link href="/confidentialite" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium py-2">
            Confidentialité
          </Link>
           <Link href="/conditions" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium py-2">
            Conditions
          </Link>
          
        </nav>

        <button
          className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t border-slate-200 bg-slate-50 px-6 py-4 space-y-3">
          <Link href="/" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium py-2">
            Accueil
          </Link>
          <Link href="/apropos" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium py-2">
            À propos
          </Link>
          <Link href="/confidentialite" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium py-2">
            Confidentialité
          </Link>
           <Link href="/conditions" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium py-2">
            Conditions
          </Link>
        </nav>
      )}
    </header>
  )
}
