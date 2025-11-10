"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Send, User } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Merci pour ton message ! Je te répondrai dès que possible.")
    console.log("Message envoyé :", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
          Contact <span className="text-blue-600">Cours Bac</span>
        </h1>

        <Card className="shadow-md border-blue-100">
          <CardContent className="p-6 text-gray-700 leading-relaxed space-y-6">
            <p className="text-center">
              Tu as une question, une suggestion ou tu veux signaler une erreur dans une leçon ?  
              N’hésite pas à me contacter via le formulaire ci-dessous ou par e-mail directement.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1 font-medium text-gray-800">Nom</label>
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <User className="text-blue-600" size={18} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ton nom"
                    className="flex-1 outline-none bg-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-800">E-mail</label>
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <Mail className="text-blue-600" size={18} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ton.email@example.com"
                    className="flex-1 outline-none bg-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-800">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Écris ton message ici..."
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition"
              >
                <Send size={18} /> Envoyer le message
              </button>
            </form>

            <div className="text-center pt-6 border-t border-blue-100">
              <p>📧 Tu peux aussi m’écrire directement à :</p>
              <a
                href="mailto:contact@coursbac.tn"
                className="text-blue-600 hover:underline font-medium"
              >
                contact@coursbac.tn
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
