import Link from "next/link"

export function AppFooter() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          

          {/* Informations */}
          <div>
            <h3 className="font-bold text-lg mb-4">Informations</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <Link href="/apropos" className="hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
             
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Légal</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <Link href="/confidentialite" className="hover:text-white transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-white transition-colors">
                  Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex items-center justify-between flex-col md:flex-row gap-4">
          <p className="text-slate-400 text-sm">© 2025/2026 Cours Bac. Tous droits réservés. Selim Smaali</p>
          <div className="flex gap-6">
            
            <a href="linkedin.com/in/selim-smaali-43680a292" className="text-slate-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="github.com/selim8437" className="text-slate-400 hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
