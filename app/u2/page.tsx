"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import {
  Camera,
  Shield,
  Check,
  AlertTriangle,
  Clock,
  Lock,
  User,
  Search,
  Heart,
  X,
  Flame
} from "lucide-react"
import { useRouter } from "next/navigation"

// Simulated match data
const potentialMatches = [
  { id: 1, name: "Perfil Coincidente #1", age: 28, distance: "3 km", image: "/images/71.jpg", matchScore: 94 },
  { id: 2, name: "Perfil Coincidente #2", age: 31, distance: "7 km", image: "/images/72.jpg", matchScore: 87 },
  { id: 3, name: "Perfil Coincidente #3", age: 26, distance: "12 km", image: "/images/73.jpg", matchScore: 82 },
]

const appLogos = [
  { name: "Tinder", color: "from-orange-500 to-pink-500", icon: Flame },
  { name: "Bumble", color: "from-yellow-400 to-yellow-500", icon: Heart },
  { name: "Hinge", color: "from-purple-500 to-pink-500", icon: Heart },
]

// Loading steps
const analysisSteps = [
  { text: "Procesando imagen facial...", duration: 2000 },
  { text: "Extrayendo características biométricas...", duration: 2500 },
  { text: "Escaneando base de datos de Tinder...", duration: 3000 },
  { text: "Escaneando base de datos de Bumble...", duration: 2500 },
  { text: "Escaneando base de datos de Hinge...", duration: 2500 },
  { text: "Verificando coincidencias...", duration: 2000 },
  { text: "Compilando informe...", duration: 1500 },
]

export default function TinderInvestigationPage() {
  const router = useRouter()
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState<"upload" | "gender" | "loading" | "report">("upload")
  const [loadingStep, setLoadingStep] = useState(0)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [selectedGender, setSelectedGender] = useState<"male" | "female" | null>(null)
  const [countdown, setCountdown] = useState(299) // 4:59

  // Countdown timer effect
  useEffect(() => {
    if (currentStep === "report" && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [currentStep, countdown])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGenderSelect = (gender: "male" | "female") => {
    setSelectedGender(gender)
    setCurrentStep("loading")
    startLoadingSimulation()
  }

  const startLoadingSimulation = () => {
    let step = 0
    let progress = 0

    const progressInterval = setInterval(() => {
      progress += 1
      setLoadingProgress(Math.min(progress, 100))

      if (progress >= 100) {
        clearInterval(progressInterval)
        setCurrentStep("report")
      }
    }, 170)

    const stepInterval = setInterval(() => {
      step += 1
      if (step < analysisSteps.length) {
        setLoadingStep(step)
      } else {
        clearInterval(stepInterval)
      }
    }, 2400)
  }

  const handleStartScan = () => {
    if (uploadedImage) {
      setCurrentStep("gender")
    }
  }

  const handleUnlockReport = () => {
    localStorage.setItem("selected_upsell", "tinder")
    router.push("/step-2")
  }

  // Upload Component
  const UploadSection = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 py-4 px-4">
        <div className="max-w-md mx-auto flex items-center justify-center gap-2">
          <Flame className="h-6 w-6 text-white" />
          <span className="text-white font-bold text-lg">Escáner de Apps de Citas</span>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-8">
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 bg-pink-500/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium border border-pink-500/30">
            <Shield className="h-4 w-4" />
            Reconocimiento Facial - Enero 2026
          </span>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 mb-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full mb-4">
              <Camera className="h-8 w-8 text-pink-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Sube Su Foto
            </h1>
            <p className="text-gray-600">
              Escanearemos todas las plataformas de citas para encontrar perfiles coincidentes.
            </p>
          </div>

          {/* Upload Area */}
          <label className="block cursor-pointer mb-6">
            <div className={`relative w-40 h-40 mx-auto rounded-2xl border-2 border-dashed transition-all ${uploadedImage ? "border-pink-500 bg-pink-50" : "border-gray-300 hover:border-pink-400 hover:bg-pink-50"
              }`}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              {uploadedImage ? (
                <Image
                  src={uploadedImage}
                  alt="Subida"
                  fill
                  className="object-cover rounded-2xl"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                  <Camera className="h-12 w-12 mb-2" />
                  <span className="text-sm">Toca para subir</span>
                </div>
              )}
            </div>
          </label>

          <button
            onClick={handleStartScan}
            disabled={!uploadedImage}
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Search className="h-5 w-5" />
            INICIAR ESCANEO FACIAL
          </button>
        </div>

        {/* App Logos */}
        <div className="text-center mb-6">
          <p className="text-gray-400 text-sm mb-4">Escaneando en:</p>
          <div className="flex justify-center gap-4">
            {appLogos.map((app, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className={`w-12 h-12 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <app.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-xs text-gray-400">{app.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-gray-400 text-xs">
            <Lock className="h-3 w-3" />
            <span>La foto es procesada de forma segura y nunca almacenada</span>
          </div>
        </div>
      </div>
    </div>
  )

  // Gender Selection
  const GenderSelectionSection = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full mb-4">
            <User className="h-8 w-8 text-pink-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            ¿Cuál es el género del objetivo?
          </h2>
          <p className="text-gray-600 mb-6">
            Esto optimiza nuestra búsqueda en apps de citas
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
        </div>
      </div>
    </div>
  )

  // Loading Component
  const LoadingSection = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {/* Photo Preview */}
          <div className="text-center mb-6">
            <div className="relative inline-block">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-pink-500">
                {uploadedImage && (
                  <Image
                    src={uploadedImage}
                    alt="Escaneando"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                <Search className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Escaneando bases de datos...</span>
              <span className="font-bold text-pink-600">{loadingProgress}%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>

          {/* Current Step */}
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center animate-pulse">
                <Search className="h-4 w-4 text-white" />
              </div>
              <span className="text-gray-700 text-sm">
                {analysisSteps[loadingStep]?.text || "Finalizando..."}
              </span>
            </div>
          </div>

          {/* Completed Steps */}
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
      {/* Alert Banner */}
      <div className="bg-red-600 text-white py-3 px-4 text-center animate-pulse">
        <div className="flex items-center justify-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-bold">¡ALERTA! Se encontraron 3 coincidencias potenciales</span>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Timer Card */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-4 text-center">
          <div className="flex items-center justify-center gap-2 text-red-600 mb-2">
            <Clock className="h-5 w-5" />
            <span className="font-medium">El informe expira en:</span>
          </div>
          <div className="text-4xl font-mono font-bold text-red-600">
            {formatTime(countdown)}
          </div>
        </div>

        {/* Matches Found */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            Perfiles Coincidentes Encontrados
          </h3>

          <div className="space-y-4">
            {potentialMatches.map((match) => (
              <div key={match.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl relative">
                <div className="relative">
                  <Image
                    src={match.image}
                    alt={match.name}
                    width={64}
                    height={64}
                    className="rounded-full blur-md"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Lock className="h-6 w-6 text-gray-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 blur-sm">{match.name}</p>
                  <p className="text-sm text-gray-500">
                    {match.age} años • {match.distance}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                        style={{ width: `${match.matchScore}%` }}
                      />
                    </div>
                    <span className="text-xs text-red-600 font-bold">{match.matchScore}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-gray-100 rounded-lg text-center">
            <Lock className="h-4 w-4 text-gray-400 mx-auto mb-1" />
            <p className="text-xs text-gray-500">Fotos de perfil y biografías bloqueadas</p>
          </div>
        </div>

        {/* Apps Detected */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
          <h3 className="font-bold text-gray-900 mb-4">Apps de Citas Detectadas</h3>
          <div className="flex justify-center gap-4">
            {appLogos.map((app, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className={`relative w-14 h-14 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <app.icon className="h-7 w-7 text-white" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                </div>
                <span className="text-xs text-gray-600">{app.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Unlock CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl shadow-xl p-6 text-white text-center">
          <AlertTriangle className="h-10 w-10 mx-auto mb-3" />
          <h3 className="font-bold text-xl mb-2">¡Informe Completo Listo!</h3>
          <p className="text-pink-100 text-sm mb-4">
            Desbloquea fotos de perfil, biografías, última actividad y capturas de conversaciones.
          </p>
          <button
            onClick={handleUnlockReport}
            className="w-full bg-white text-pink-600 font-bold py-4 rounded-xl shadow-lg hover:bg-pink-50 transition-all flex items-center justify-center gap-2"
          >
            <Lock className="h-5 w-5" />
            DESBLOQUEAR INFORME COMPLETO
          </button>
          <p className="text-xs text-pink-200 mt-3">
            El acceso expira en {formatTime(countdown)}
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
      return <UploadSection />
  }
}
