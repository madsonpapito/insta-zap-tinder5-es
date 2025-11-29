"use client"

import { Search, Camera, MessageSquare, Check, CheckCircle, Star, Users } from "lucide-react"
import Image from "next/image"
// 1. Importe o useRouter do Next.js
import { useRouter } from "next/navigation"

// A small helper component to render the star ratings
const StarRating = ({ rating = 5 }) => (
  <div className="flex text-yellow-400">
    {Array.from({ length: rating }).map((_, index) => (
      <Star key={index} className="w-5 h-5 fill-current" />
    ))}
  </div>
)

export default function Step1() {
  // 2. Crie uma instância do router
  const router = useRouter()

  // 3. Crie uma função para lidar com o clique e navegar
  const handleNavigate = () => {
    router.push("/step-2") // Certifique-se que o caminho '/step-2' está correto
  }

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* =================================== */}
      {/* 1. Hero Section                     */}
      {/* =================================== */}
      <section className="bg-gradient-to-br from-[#1d1d3a] via-[#2a2a4b] to-[#3a2c6b] text-white py-16 px-4 overflow-hidden">
        <div className="container mx-auto max-w-3xl text-center flex flex-col items-center">
          <div className="bg-gradient-to-br from-pink-500 to-red-500 p-4 rounded-2xl mb-8 shadow-lg">
            <Search className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hoy es un <span className="text-red-500">like.</span> Mañana, una{" "}
            <span className="text-red-500">conversación.</span> ¿Y después?
            <br />
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            La traición no comienza con un beso. Comienza con un mensaje directo.
          </p>

          <div className="inline-flex items-center bg-green-900/50 text-green-300 border border-green-700 rounded-full px-4 py-1.5 text-sm mb-8">
            <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>Sistema de Detección Avanzado - Actualizado Noviembre 2025</span>
          </div>

          <div className="w-full max-w-lg space-y-3 text-left mb-8">
            <div className="bg-white/10 p-4 rounded-lg flex items-center gap-4 border border-white/20">
              <span>👀 Descubre qué "amigos" ven tus historias que tú no puedes ver.</span>
            </div>
            <div className="bg-white/10 p-4 rounded-lg flex items-center gap-4 border border-white/20">
              <span>👍 Monitorea cada like, incluso si intentan "quitarlo" después.</span>
            </div>
            <div className="bg-white/10 p-4 rounded-lg flex items-center gap-4 border border-white/20">
              <span>💾 Descubre las fotos y videos que guardan en carpetas ocultas.</span>
            </div>
            <div className="bg-white/10 p-4 rounded-lg flex items-center gap-4 border border-white/20">
              <span>🤫 "¿Este mensaje fue eliminado"? Descubre el contenido original</span>
            </div>
          </div>

          <button
            onClick={handleNavigate}
            className="w-full max-w-lg bg-gradient-to-r from-red-500 to-pink-600 hover:opacity-90 text-white font-bold py-4 px-6 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105"
          >
            OBTÉN LA VERDAD – COMIENZA LA BÚSQUEDA ANÓNIMA
          </button>
          <p className="text-xs text-gray-400 mt-2">Investigación 100% anónima. Nunca sabrán que verificaste.</p>
        </div>
      </section>

      {/* =================================== */}
      {/* 2. "You're Not Paranoid" Section    */}
      {/* =================================== */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">No Eres Paranoico -</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">Te Estás Protegiendo</h3>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            Deja de dudar de tus instintos. Obtén la claridad que necesitas para tomar decisiones informadas sobre tu
            relación.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="inline-block bg-pink-100 p-4 rounded-xl mb-4">
                <Search className="h-8 w-8 text-pink-500" />
              </div>
              <h4 className="font-bold text-lg mb-2">ACTIVIDAD RECIENTE</h4>
              <p className="text-gray-500 text-sm">Ve qué redes sociales usa más</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="inline-block bg-purple-100 p-4 rounded-xl mb-4">
                <Users className="h-8 w-8 text-purple-500" />
              </div>
              <h4 className="font-bold text-lg mb-2">PERFILES VISITADOS</h4>
              <p className="text-gray-500 text-sm">Ve los perfiles más visitados</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="inline-block bg-red-100 p-4 rounded-xl mb-4">
                <Camera className="h-8 w-8 text-red-500" />
              </div>
              <h4 className="font-bold text-lg mb-2">FOTOS CON LIKE</h4>
              <p className="text-gray-500 text-sm">Ve todas las fotos con like</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="inline-block bg-orange-100 p-4 rounded-xl mb-4">
                <MessageSquare className="h-8 w-8 text-orange-500" />
              </div>
              <h4 className="font-bold text-lg mb-2">CONVERSACIONES PRIVADAS</h4>
              <p className="text-gray-500 text-sm">Lo que realmente dicen a otros</p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================== */}
      {/* 3. Testimonials Section             */}
      {/* =================================== */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">No Estás Solo - Mira Lo Que Otros Descubrieron</h2>
          <div className="space-y-8">
            {/* Testimonial Cards... */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-left">
              <div className="flex items-center mb-4">
                <Image src="/images/83.jpg" alt="Sarah" width={48} height={48} className="rounded-full mr-4" />
                <div>
                  <p className="font-bold">Sarah, 42</p>
                  <p className="text-sm text-green-600 flex items-center">
                    <Check className="h-4 w-4 mr-1" />
                    Usuario Verificado
                  </p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                Sabía que algo andaba mal. El informe confirmó mis peores temores, pero al menos ahora podía tomar una
                decisión informada en lugar de vivir en constante ansiedad.
              </blockquote>
              <StarRating />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-left">
              <div className="flex items-center mb-4">
                <Image src="/images/86.jpg" alt="Jennifer" width={48} height={48} className="rounded-full mr-4" />
                <div>
                  <p className="font-bold">Jennifer, 33</p>
                  <p className="text-sm text-gray-500">Investigación completada en Noviembre 2025</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                Mejor decisión que he tomado. Me ahorró meses de incertidumbre y me dio el cierre que necesitaba. Mis
                instintos tenían razón todo el tiempo.
              </blockquote>
              <StarRating />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-left">
              <div className="flex items-center mb-4">
                <Image src="/images/87.jpg" alt="Michelle" width={48} height={48} className="rounded-full mr-4" />
                <div>
                  <p className="font-bold">Michelle, 35</p>
                  <p className="text-sm text-green-600 flex items-center">
                    <Check className="h-4 w-4 mr-1" />
                    Usuario Verificado
                  </p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                Me sentí culpable por verificar, pero mis instintos tenían razón. Ahora puedo seguir adelante con
                confianza en lugar de vivir en la duda.
              </blockquote>
              <StarRating />
            </div>
          </div>

          <button
            onClick={handleNavigate}
            className="w-full max-w-lg mt-12 bg-gradient-to-r from-red-500 to-pink-600 hover:opacity-90 text-white font-bold py-4 px-6 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105"
          >
            COMENZAR MI INVESTIGACIÓN ANÓNIMA
          </button>
          <p className="text-xs text-gray-400 mt-2">
            100% anónimo - Tu investigación se mantiene completamente privada
          </p>
        </div>
      </section>
    </div>
  )
}
