"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import {
  MessageCircle,
  Shield,
  Check,
  AlertTriangle,
  MapPin,
  Clock,
  Users,
  Lock,
  ChevronDown,
  User,
  Camera,
  Search,
  Phone,
  Image as ImageIcon,
  FileText,
  Bell,
  Eye
} from "lucide-react"
import { useRouter } from "next/navigation"

// Country data with flags and codes
const countries = [
  { code: "+1", name: "Estados Unidos", flag: "🇺🇸" },
  { code: "+44", name: "Reino Unido", flag: "🇬🇧" },
  { code: "+34", name: "España", flag: "🇪🇸" },
  { code: "+52", name: "México", flag: "🇲🇽" },
  { code: "+54", name: "Argentina", flag: "🇦🇷" },
  { code: "+56", name: "Chile", flag: "🇨🇱" },
  { code: "+57", name: "Colombia", flag: "🇨🇴" },
  { code: "+51", name: "Perú", flag: "🇵🇪" },
  { code: "+58", name: "Venezuela", flag: "🇻🇪" },
  { code: "+55", name: "Brasil", flag: "🇧🇷" },
  { code: "+49", name: "Alemania", flag: "🇩🇪" },
  { code: "+33", name: "Francia", flag: "🇫🇷" },
  { code: "+39", name: "Italia", flag: "🇮🇹" },
  { code: "+351", name: "Portugal", flag: "🇵🇹" },
]

// Simulated suspicious activity data
const suspiciousKeywords = [
  { keyword: "te extraño", count: 47, risk: "high" },
  { keyword: "no le digas", count: 23, risk: "high" },
  { keyword: "borra esto", count: 18, risk: "critical" },
  { keyword: "hotel", count: 12, risk: "medium" },
  { keyword: "a solas", count: 31, risk: "high" },
  { keyword: "en secreto", count: 15, risk: "critical" },
]

const recentLocations = [
  { place: "Av. Principal 456", time: "Hace 2 horas", type: "Edificio Residencial" },
  { place: "Centro comercial Plaza", time: "Ayer", type: "Centro Comercial" },
  { place: "Hotel Mirador", time: "5 días", type: "Hotel" },
]

const suspiciousContacts = [
  { name: "❤️ Mi Amor", messages: 234, lastSeen: "Hace 5 min", avatar: "/images/71.jpg" },
  { name: "Trabajo - Ana", messages: 156, lastSeen: "Hace 1 hora", avatar: "/images/72.jpg" },
  { name: "😘", messages: 89, lastSeen: "Hace 3 horas", avatar: "/images/73.jpg" },
]

// Loading steps for simulation
const analysisSteps = [
  { text: "Conectando con servidores de WhatsApp...", duration: 2000 },
  { text: "Recuperando historial de mensajes...", duration: 3000 },
  { text: "Analizando patrones de conversación...", duration: 2500 },
  { text: "Escaneando contenido multimedia...", duration: 3000 },
  { text: "Identificando contactos frecuentes...", duration: 2000 },
  { text: "Mapeando datos de ubicación...", duration: 2500 },
  { text: "Detectando mensajes eliminados...", duration: 3000 },
  { text: "Compilando informe de actividad sospechosa...", duration: 2000 },
]

export default function WhatsAppMonitorPage() {
  const router = useRouter()
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState<"input" | "gender" | "loading" | "report">("input")
  const [loadingStep, setLoadingStep] = useState(0)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [selectedGender, setSelectedGender] = useState<"male" | "female" | null>(null)
  const [showCriticalAlert, setShowCriticalAlert] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handle gender selection and start loading
  const handleGenderSelect = (gender: "male" | "female") => {
    setSelectedGender(gender)
    setCurrentStep("loading")
    startLoadingSimulation()
  }

  // Loading simulation
  const startLoadingSimulation = () => {
    let step = 0
    let progress = 0

    const progressInterval = setInterval(() => {
      progress += 1
      setLoadingProgress(Math.min(progress, 100))

      if (progress >= 100) {
        clearInterval(progressInterval)
        setCurrentStep("report")
        setTimeout(() => setShowCriticalAlert(true), 1000)
      }
    }, 200)

    const stepInterval = setInterval(() => {
      step += 1
      if (step < analysisSteps.length) {
        setLoadingStep(step)
      } else {
        clearInterval(stepInterval)
      }
    }, 2500)
  }

  const handleStartMonitoring = () => {
    if (phoneNumber.length >= 7) {
      setCurrentStep("gender")
    }
  }

  const handleUnlockReport = () => {
    localStorage.setItem("selected_upsell", "whatsapp")
    router.push("/step-2")
  }

  // Phone Input Component
  const PhoneInputSection = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 py-4 px-4">
        <div className="max-w-md mx-auto flex items-center justify-center gap-2">
          <MessageCircle className="h-6 w-6 text-white fill-white" />
          <span className="text-white font-bold text-lg">WhatsApp</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-8">
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30">
            <Shield className="h-4 w-4" />
            Monitoreo Verificado - Enero 2026
          </span>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 mb-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <MessageCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              ¡Felicidades, ganaste<br />1 acceso gratuito!
            </h1>
            <p className="text-gray-600">
              Ingresa el número abajo y comienza el monitoreo silencioso.
            </p>
          </div>

          {/* Phone Input */}
          <div className="space-y-4">
            <div className="flex gap-2">
              {/* Country Selector */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 transition-colors rounded-xl px-3 py-3 border border-gray-200"
                >
                  <span className="text-xl">{selectedCountry.flag}</span>
                  <span className="text-sm font-medium text-gray-700">{selectedCountry.code}</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-50 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 max-h-60 overflow-y-auto">
                    {countries.map((country) => (
                      <button
                        key={country.code}
                        onClick={() => {
                          setSelectedCountry(country)
                          setIsDropdownOpen(false)
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-xl">{country.flag}</span>
                        <span className="text-sm text-gray-600">{country.name}</span>
                        <span className="text-sm font-medium text-gray-900 ml-auto">{country.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Phone Number Input */}
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                placeholder="Número de teléfono"
                className="flex-1 bg-gray-100 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={handleStartMonitoring}
              disabled={phoneNumber.length < 7}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Search className="h-5 w-5" />
              INICIAR MONITOREO
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3">
          {[
            { icon: MessageCircle, text: "Conversaciones en tiempo real" },
            { icon: ImageIcon, text: "Fotos y videos enviados/recibidos" },
            { icon: MapPin, text: "Ubicación y check-ins" },
            { icon: Bell, text: "Mensajes eliminados recuperados" },
            { icon: Clock, text: "Historial de actividad" },
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-300">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <feature.icon className="h-4 w-4 text-green-400" />
              </div>
              <span className="text-sm">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 text-gray-400 text-xs">
            <Lock className="h-3 w-3" />
            <span>Encriptación de extremo a extremo • 100% Indetectable</span>
          </div>
        </div>
      </div>
    </div>
  )

  // Gender Selection Component
  const GenderSelectionSection = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <User className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            ¿Cuál es el género del objetivo?
          </h2>
          <p className="text-gray-600 mb-6">
            Esto nos ayuda a optimizar nuestro análisis
          </p>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleGenderSelect("male")}
              className="flex flex-col items-center gap-3 p-6 bg-blue-50 hover:bg-blue-100 rounded-2xl border-2 border-transparent hover:border-blue-500 transition-all"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">👨</span>
              </div>
              <span className="font-semibold text-gray-900">Masculino</span>
            </button>

            <button
              onClick={() => handleGenderSelect("female")}
              className="flex flex-col items-center gap-3 p-6 bg-pink-50 hover:bg-pink-100 rounded-2xl border-2 border-transparent hover:border-pink-500 transition-all"
            >
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">👩</span>
              </div>
              <span className="font-semibold text-gray-900">Femenino</span>
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-6">
            Número objetivo: {selectedCountry.code} {phoneNumber}
          </p>
        </div>
      </div>
    </div>
  )

  // Loading Component
  const LoadingSection = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {/* Profile Preview */}
          <div className="text-center mb-6">
            <div className="relative inline-block">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                <Check className="h-3 w-3 text-white" />
              </div>
            </div>
            <p className="text-gray-600 mt-3 text-sm">
              Analizando {selectedCountry.code} {phoneNumber}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Progreso</span>
              <span className="font-bold text-green-600">{loadingProgress}%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>

          {/* Current Step */}
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                <Search className="h-4 w-4 text-white" />
              </div>
              <span className="text-gray-700 text-sm">
                {analysisSteps[loadingStep]?.text || "Finalizando..."}
              </span>
            </div>
          </div>

          {/* Steps Completed */}
          <div className="space-y-2">
            {analysisSteps.slice(0, loadingStep).map((step, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-500 text-xs">
                <Check className="h-3 w-3 text-green-500" />
                {step.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  // Report Component
  const ReportSection = () => (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-slate-900 to-slate-900">
      {/* Critical Alert Banner */}
      {showCriticalAlert && (
        <div className="bg-red-600 text-white py-3 px-4 text-center animate-pulse">
          <div className="flex items-center justify-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-bold">¡ALERTA CRÍTICA! Se detectó actividad sospechosa</span>
          </div>
        </div>
      )}

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
                <AlertTriangle className="h-3 w-3 text-white" />
              </div>
            </div>
            <div>
              <h2 className="font-bold text-gray-900">{selectedCountry.code} {phoneNumber}</h2>
              <p className="text-red-600 text-sm font-medium">⚠️ Alto Nivel de Riesgo Detectado</p>
            </div>
          </div>

          {/* Risk Meter */}
          <div className="bg-red-50 rounded-xl p-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Puntuación de Riesgo de Infidelidad</span>
              <span className="font-bold text-red-600">87%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 rounded-full" style={{ width: "87%" }} />
            </div>
          </div>
        </div>

        {/* Suspicious Keywords */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-red-500" />
            Palabras Clave Sospechosas Detectadas
          </h3>
          <div className="space-y-3">
            {suspiciousKeywords.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${item.risk === "critical" ? "bg-red-500" : item.risk === "high" ? "bg-orange-500" : "bg-yellow-500"
                    }`} />
                  <span className="text-gray-700 font-medium blur-sm">&quot;{item.keyword}&quot;</span>
                </div>
                <span className="text-sm text-gray-500 blur-sm">{item.count}x</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-gray-100 rounded-lg text-center">
            <Lock className="h-4 w-4 text-gray-400 mx-auto mb-1" />
            <p className="text-xs text-gray-500">Desbloquea para ver detalles completos</p>
          </div>
        </div>

        {/* Suspicious Contacts */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-red-500" />
            Contactos Más Sospechosos
          </h3>
          <div className="space-y-3">
            {suspiciousContacts.map((contact, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <Image
                  src={contact.avatar}
                  alt={contact.name}
                  width={48}
                  height={48}
                  className="rounded-full blur-md"
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-900 blur-sm">{contact.name}</p>
                  <p className="text-xs text-gray-500">{contact.messages} mensajes • {contact.lastSeen}</p>
                </div>
                <Eye className="h-5 w-5 text-gray-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Recent Locations */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-red-500" />
            Ubicaciones Recientes
          </h3>
          <div className="space-y-3">
            {recentLocations.map((location, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 blur-sm">{location.place}</p>
                  <p className="text-xs text-gray-500">{location.type} • {location.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unlock CTA */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl shadow-xl p-6 text-white text-center">
          <AlertTriangle className="h-10 w-10 mx-auto mb-3" />
          <h3 className="font-bold text-xl mb-2">¡Informe Completo Disponible!</h3>
          <p className="text-red-100 text-sm mb-4">
            Desbloquea el acceso completo a conversaciones, medios, ubicaciones y mensajes eliminados.
          </p>
          <button
            onClick={handleUnlockReport}
            className="w-full bg-white text-red-600 font-bold py-4 rounded-xl shadow-lg hover:bg-red-50 transition-all flex items-center justify-center gap-2"
          >
            <Lock className="h-5 w-5" />
            DESBLOQUEAR INFORME COMPLETO
          </button>
          <p className="text-xs text-red-200 mt-3">
            El acceso expira en 24 horas
          </p>
        </div>

        {/* Trust Footer */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-4 text-gray-400 text-xs">
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3" /> 100% Anónimo
            </span>
            <span className="flex items-center gap-1">
              <Lock className="h-3 w-3" /> Encriptación SSL
            </span>
          </div>
        </div>
      </div>
    </div>
  )

  // Render based on current step
  switch (currentStep) {
    case "gender":
      return <GenderSelectionSection />
    case "loading":
      return <LoadingSection />
    case "report":
      return <ReportSection />
    default:
      return <PhoneInputSection />
  }
}
