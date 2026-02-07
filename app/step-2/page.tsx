"use client"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { User, CheckCircle, Heart, MessageCircle, Lock, AlertTriangle, Wifi, Instagram, Whatsapp, Tinder, LockOpen } from "lucide-react"
import { useFacebookTracking } from "@/hooks/useFacebookTracking"

// ==========================================================
// DADOS DOS PERFIS E IMAGENS
// ==========================================================
// Perfis que interagem com o alvo
const FEMALE_PROFILES = [
  "@jessy_nutty",
  "@alexis_30",
  "@izes",
  "@maryjane434",
  "@emma.whistle32",
  "@celina_anderson467",
  "@letty.miriah99",
]
const FEMALE_IMAGES = [
  "/images/male/perfil/1.jpg",
  "/images/male/perfil/2.jpg",
  "/images/male/perfil/3.jpg",
  "/images/male/perfil/4.jpg",
  "/images/male/perfil/5.jpg",
  "/images/male/perfil/6.jpg",
  "/images/male/perfil/7.jpg",
  "/images/male/perfil/8.jpg",
  "/images/male/perfil/9.jpg",
]
const MALE_PROFILES = [
  "@john.doe92",
  "@mike_anderson",
  "@chris_williams",
  "@danny.smith",
  "@liam.baker",
  "@noah_carter",
  "@ryan_hills",
]
const MALE_IMAGES = [
  "/images/female/perfil/1.jpg",
  "/images/female/perfil/2.jpg",
  "/images/female/perfil/3.jpg",
  "/images/female/perfil/4.jpg",
  "/images/female/perfil/5.jpg",
  "/images/female/perfil/6.jpg",
  "/images/female/perfil/7.jpg",
  "/images/female/perfil/8.jpeg",
  "/images/female/perfil/9.jpg",
]

// Imagens "interceptadas" (borradas) que o alvo curtiu
const LIKED_BY_MALE_PHOTOS = [
  "/images/male/liked/male-liked-photo-1.webp",
  "/images/male/liked/male-liked-photo-2.webp",
  "/images/male/liked/male-liked-photo-3.webp",
  "/images/male/liked/male-liked-photo-4.webp",
  "/images/male/liked/male-liked-photo-5.webp",
  "/images/male/liked/male-liked-photo-6.webp",
  "/images/male/liked/male-liked-photo-7.webp",
  "/images/male/liked/male-liked-photo-8.webp",
  "/images/male/liked/male-liked-photo-9.webp",
  "/images/male/liked/male-liked-photo-10.webp",
  "/images/male/liked/male-liked-photo-11.webp",
  "/images/male/liked/male-liked-photo-12.webp",
  "/images/male/liked/male-liked-photo-13.webp",
  "/images/male/liked/male-liked-photo-14.webp",
  "/images/male/liked/male-liked-photo-15.webp",
  "/images/male/liked/male-liked-photo-16.webp",
  "/images/male/liked/male-liked-photo-17.webp",
  "/images/male/liked/male-liked-photo-18.webp",
  "/images/male/liked/male-liked-photo-19.webp",
  "/images/male/liked/male-liked-photo-20.webp",
  "/images/male/liked/male-liked-photo-21.webp",
  "/images/male/liked/male-liked-photo-22.webp",
  "/images/male/liked/male-liked-photo-23.webp",
  "/images/male/liked/male-liked-photo-24.webp",
]
const LIKED_BY_MALE_STORIES = [
  "/images/male/liked/male-liked-story-1.webp",
  "/images/male/liked/male-liked-story-2.webp",
  "/images/male/liked/male-liked-story-3.webp",
  "/images/male/liked/male-liked-story-5.webp",
  "/images/male/liked/male-liked-story-6.webp",
  "/images/male/liked/male-liked-story-7.webp",
  "/images/male/liked/male-liked-story-8.webp",
  "/images/male/liked/male-liked-story-9.webp",
  "/images/male/liked/male-liked-story-10.webp",
  "/images/male/liked/male-liked-story-11.webp",
  "/images/male/liked/male-liked-story-12.webp",
  "/images/male/liked/male-liked-story-13.webp",
  "/images/male/liked/male-liked-story-14.webp",
  "/images/male/liked/male-liked-story-15.webp",
  "/images/male/liked/male-liked-story-16.webp",
  "/images/male/liked/male-liked-story-17.webp",
  "/images/male/liked/male-liked-story-18.webp",
  "/images/male/liked/male-liked-story-19.webp",
  "/images/male/liked/male-liked-story-20.webp",
  "/images/male/liked/male-liked-story-21.webp",
  "/images/male/liked/male-liked-story-22.webp",
  "/images/male/liked/male-liked-story-23.webp",
  "/images/male/liked/male-liked-story-24.webp",
]
const LIKED_BY_FEMALE_PHOTOS = [
  "/images/female/liked/female-liked-photo-2.webp",
  "/images/female/liked/female-liked-photo-3.webp",
  "/images/female/liked/female-liked-photo-4.webp",
  "/images/female/liked/female-liked-photo-5.webp",
  "/images/female/liked/female-liked-photo-6.webp",
  "/images/female/liked/female-liked-photo-7.webp",
  "/images/female/liked/female-liked-photo-8.webp",
  "/images/female/liked/female-liked-photo-9.webp",
  "/images/female/liked/female-liked-photo-10.webp",
  "/images/female/liked/female-liked-photo-11.webp",
  "/images/female/liked/female-liked-photo-12.webp",
  "/images/female/liked/female-liked-photo-13.webp",
  "/images/female/liked/female-liked-photo-14.webp",
  "/images/female/liked/female-liked-photo-15.webp",
]
const LIKED_BY_FEMALE_STORIES = [
  "/images/female/liked/female-liked-story-1.webp",
  "/images/female/liked/female-liked-story-3.webp",
  "/images/female/liked/female-liked-story-4.webp",
  "/images/female/liked/female-liked-story-10.webp",
  "/images/female/liked/female-liked-story-11.webp",
  "/images/female/liked/female-liked-story-12.webp",
  "/images/female/liked/female-liked-story-13.webp",
]
// Array de comentarios para la sección "INTERCEPTADO" - según el género del objetivo
// Si el objetivo es masculino, los comentarios vienen de mujeres (para él)
const INTERCEPTED_COMMENTS_FEMALE_TARGET = [
  "Wow, estás muy bueno 🥰",
  "🫣😏",
  "Me estoy excitando 🥵",
  "Me vuelves loca 😈",
  "Qué guapo eres 😍",
  "Eres irresistible 🔥",
]
// Si el objetivo es femenino, los comentarios vienen de hombres (para ella)
const INTERCEPTED_COMMENTS_MALE_TARGET = [
  "Wow, estás muy buena 🥰",
  "🫣😏",
  "Me estoy excitando 🥵",
  "Me vuelves loco 😈",
  "Qué guapa eres 😍",
  "Eres irresistible 🔥",
]
// ==========================================================

// --- Funções auxiliares ---
const sanitizeUsername = (username: string): string => {
  let u = (username || "").trim()
  if (u.startsWith("@")) u = u.slice(1)
  u = u.toLowerCase()
  return u.replace(/[^a-z0-9._]/g, "")
}
const setProfileLocalCache = (user: string, profile: any) => {
  if (!user || !profile) return
  try {
    const key = "igProfileCacheV1"
    const cache = JSON.parse(localStorage.getItem(key) || "{}") || {}
    cache[user] = { profile, ts: Date.now() }
    localStorage.setItem(key, JSON.stringify(cache))
  } catch (e) {
    console.error("[v0] Erro ao salvar perfil no cache:", e)
  }
}
const getProfileFromCache = (user: string): any | null => {
  try {
    const key = "igProfileCacheV1"
    const cache = JSON.parse(localStorage.getItem(key) || "{}") || {}
    if (cache[user] && cache[user].profile) {
      return cache[user].profile
    }
  } catch (e) {
    console.error("[v0] Erro ao ler o cache do perfil:", e)
  }
  return null
}

const PageHeader = () => (
  <header className="w-full max-w-md mx-auto text-center px-4 pt-12 pb-8">
    <div className="inline-block bg-white p-4 rounded-2xl shadow-lg mb-6">
      {/* 2. Substituí Wifi por Instagram e ajustei a cor para rosa */}
      <Instagram className="h-10 w-10 text-pink-600" />
    </div>
    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
      <span role="img" aria-label="magnifying glass">
        🔍
      </span>{" "}
      Ayúdanos a Encontrar Lo Que Ocultan
    </h1>
    <p className="text-white">Cuantos más detalles proporciones, más profundo podremos investigar. Todo permanece 100% anónimo.</p>
  </header>
)

// --- Componente da Página ---
export default function Step2() {
  const [step, setStep] = useState(1)
  const [instagramHandle, setInstagramHandle] = useState("")
  const [selectedGender, setSelectedGender] = useState<string | null>(null)
  const [profileData, setProfileData] = useState<any>(null)
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [loadingProgress, setLoadingProgress] = useState(0)
  const debounceTimer = useRef<NodeJS.Timeout | null>(null)
  const [timeLeft, setTimeLeft] = useState(5 * 60)

  // Hook para Facebook Tracking - envia dados enriquecidos ao dataLayer
  const { trackEvent, trackInitiateCheckout } = useFacebookTracking()

  // Estados para armazenar os resultados sorteados
  const [randomizedResults, setRandomizedResults] = useState<
    Array<{ username: string; image: string; type: "like" | "message" }>
  >([])
  const [interceptedImages, setInterceptedImages] = useState<Array<{ image: string; comment: string }>>([])

  // Estado para el popup de conversación
  const [chatPopup, setChatPopup] = useState<{
    isOpen: boolean;
    username: string;
    image: string;
    messages: Array<{ text: string; isTarget: boolean; isLocked: boolean }>;
  } | null>(null)

  // Conversaciones interceptadas (simuladas)
  const INTERCEPTED_CONVERSATIONS_MALE = [
    [
      { text: "Hola guapo, ¿qué haces? 😏", isTarget: false, isLocked: false },
      { text: "Aquí pensando en ti...", isTarget: true, isLocked: true },
      { text: "¿Quieres que nos veamos hoy?", isTarget: false, isLocked: true },
      { text: "Claro, pero sin que se entere nadie 🤫", isTarget: true, isLocked: true },
      { text: "Perfecto, te mando ubicación", isTarget: false, isLocked: true },
    ],
    [
      { text: "¿Cuándo vuelves a escribirme? Te extraño 💕", isTarget: false, isLocked: false },
      { text: "Pronto amor, pero tengo que ser discreto", isTarget: true, isLocked: true },
      { text: "Entiendo... pero ya quiero verte", isTarget: false, isLocked: true },
      { text: "Este fin de semana, lo prometo", isTarget: true, isLocked: true },
    ],
    [
      { text: "¿Sigues con ella?", isTarget: false, isLocked: false },
      { text: "Es complicado, pero tú eres especial", isTarget: true, isLocked: true },
      { text: "Eso me dijiste la última vez 😢", isTarget: false, isLocked: true },
      { text: "Esta vez es diferente, confía en mí", isTarget: true, isLocked: true },
    ],
  ]

  const INTERCEPTED_CONVERSATIONS_FEMALE = [
    [
      { text: "Hola preciosa, ¿cómo estás? 😍", isTarget: false, isLocked: false },
      { text: "Bien, aquí aburrida en casa...", isTarget: true, isLocked: true },
      { text: "¿Quieres que pase a verte?", isTarget: false, isLocked: true },
      { text: "Sí pero que no se entere nadie", isTarget: true, isLocked: true },
      { text: "Tranquila, seré discreto 🤫", isTarget: false, isLocked: true },
    ],
    [
      { text: "No puedo dejar de pensar en ti 💕", isTarget: false, isLocked: false },
      { text: "Yo también pienso mucho en ti", isTarget: true, isLocked: true },
      { text: "¿Cuándo podemos vernos a solas?", isTarget: false, isLocked: true },
      { text: "Cuando él salga de viaje", isTarget: true, isLocked: true },
    ],
    [
      { text: "¿Ya le dijiste que terminaron?", isTarget: false, isLocked: false },
      { text: "Aún no, es difícil...", isTarget: true, isLocked: true },
      { text: "Entiendo, pero te espero", isTarget: false, isLocked: true },
      { text: "Gracias por ser paciente conmigo ❤️", isTarget: true, isLocked: true },
    ],
  ]

  // State for Instagram posts grid
  const [instagramPosts, setInstagramPosts] = useState<any[]>([])
  const [visiblePosts, setVisiblePosts] = useState<number>(0)

  // Função para embaralhar e pegar N itens de um array
  const shuffleAndPick = (arr: any[], num: number) => {
    return [...arr].sort(() => 0.5 - Math.random()).slice(0, num)
  }

  // Lógica para sortear os perfis e imagens quando chegar no passo 3
  useEffect(() => {
    if (step === 3) {
      // 1. Sorteia perfis de interação
      let profilesToUse = FEMALE_PROFILES
      let imagesToUse = FEMALE_IMAGES
      if (selectedGender === "female") {
        profilesToUse = MALE_PROFILES
        imagesToUse = MALE_IMAGES
      }
      const randomUsernames = shuffleAndPick(profilesToUse, 5)
      const randomImages = shuffleAndPick(imagesToUse, 5)
      const results = randomUsernames.map((username, index) => ({
        username,
        image: randomImages[index % randomImages.length],
        type: (Math.random() > 0.5 ? "like" : "message") as "like" | "message",
      }))
      setRandomizedResults(results)

      // 2. Sorteia 4 imagens "interceptadas" e 4 comentários
      let allLikedImages = LIKED_BY_MALE_PHOTOS.concat(LIKED_BY_MALE_STORIES)
      if (selectedGender === "female") {
        allLikedImages = LIKED_BY_FEMALE_PHOTOS.concat(LIKED_BY_FEMALE_STORIES)
      }

      const randomLikedImages = shuffleAndPick(allLikedImages, 4)
      // Selecciona comentarios según el género del objetivo
      const commentsToUse = selectedGender === "female" ? INTERCEPTED_COMMENTS_FEMALE_TARGET : INTERCEPTED_COMMENTS_MALE_TARGET
      const randomComments = shuffleAndPick(commentsToUse, 4)

      const newInterceptedData = randomLikedImages.map((img, index) => ({
        image: img,
        comment: randomComments[index % randomComments.length],
      }))

      setInterceptedImages(newInterceptedData)
    }
  }, [step, selectedGender])

  useEffect(() => {
    if (step === 3 && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [step, timeLeft])

  const formatTime = (seconds: number) => {
    if (seconds <= 0) return "00:00"
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const handleInstagramChange = (value: string) => {
    setInstagramHandle(value)
    const sanitizedUser = sanitizeUsername(value)
    if (debounceTimer.current) clearTimeout(debounceTimer.current)
    setError("")
    setProfileData(null)
    setProfileImageUrl(null)

    if (sanitizedUser.length < 3) {
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    debounceTimer.current = setTimeout(async () => {
      // 1. Checa Cache
      const cachedProfile = getProfileFromCache(sanitizedUser)
      if (cachedProfile) {
        setProfileData(cachedProfile)
        // CORREÇÃO AQUI: Usar a URL direto, pois ela já vem com o proxy do backend
        setProfileImageUrl(cachedProfile.profile_pic_url)
        setIsLoading(false)
        return
      }

      // 2. Busca API
      try {
        const response = await fetch("/api/instagram/profile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: sanitizedUser }),
        })
        const result = await response.json()

        if (!response.ok || !result.success) {
          throw new Error(result.error || "Perfil não encontrado ou privado.")
        }

        const profile = result.profile
        setProfileData(profile)
        setProfileLocalCache(sanitizedUser, profile)

        // CORREÇÃO AQUI: Não adicionar /api/instagram/image de novo
        setProfileImageUrl(profile.profile_pic_url)
      } catch (err: any) {
        setError(err.message)
        setProfileData(null)
      } finally {
        setIsLoading(false)
      }
    }, 1200)
  }

  const handleContinueClick = () => {
    console.log("[v0] Continue button clicked, fetching posts...")

    const fetchPosts = async () => {
      try {
        const cleanUsername = sanitizeUsername(instagramHandle)
        console.log("[v0] Fetching posts for username:", cleanUsername)

        const response = await fetch("/api/instagram/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: cleanUsername }),
        })

        console.log("[v0] Posts fetch response status:", response.status)

        if (response.ok) {
          const data = await response.json()
          console.log("[v0] Posts data received:", data)

          if (data.success && data.posts && data.posts.length > 0) {
            const postsToShow = data.posts
            console.log("[v0] Setting", postsToShow.length, "posts to display")
            setInstagramPosts(postsToShow)

            // Calculate interval to show all posts within ~20 seconds, capping speed
            // If there are many posts, show them faster.
            const totalPosts = postsToShow.length;
            const animationDuration = 20000; // 20 seconds target
            const intervalTime = Math.max(200, Math.floor(animationDuration / totalPosts));

            const postsInterval = setInterval(() => {
              setVisiblePosts((prev) => {
                if (prev >= totalPosts) {
                  clearInterval(postsInterval)
                  return totalPosts
                }
                // console.log("[v0] Showing post number:", prev + 1)
                return prev + 1
              })
            }, intervalTime)
          } else {
            console.log("[v0] No posts found in response")
          }
        } else {
          console.error("[v0] Failed to fetch posts, status:", response.status)
        }
      } catch (error) {
        console.error("[v0] Error fetching Instagram posts:", error)
      }
    }

    fetchPosts()

    // Facebook Tracking: Envia evento com gênero do usuário (inverso do alvo) e dados enriquecidos
    // Se o alvo é masculino, o usuário provavelmente é feminino e vice-versa
    const userGender = selectedGender === 'male' ? 'female' : selectedGender === 'female' ? 'male' : undefined;
    trackEvent('ViewContent', { gender: userGender }, {
      content_name: 'Instagram Analysis Started',
      content_category: 'Engagement',
      target_gender: selectedGender,
    });

    setStep(2)
    setLoadingProgress(0)
    setVisiblePosts(0)

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval)
          return prev
        }
        return prev + Math.random() * 20
      })
    }, 400)

    setTimeout(() => {
      setLoadingProgress(100)
      setTimeout(() => {
        setStep(3)
      }, 1000)
    }, 25000) // Changed from 4000 to 25000 (25 seconds)
  }

  // Función para abrir el popup de conversación
  const openChatPopup = (username: string, image: string, conversationIndex: number) => {
    const conversations = selectedGender === "female"
      ? INTERCEPTED_CONVERSATIONS_FEMALE
      : INTERCEPTED_CONVERSATIONS_MALE
    const messages = conversations[conversationIndex % conversations.length]
    setChatPopup({ isOpen: true, username, image, messages })
  }

  // Componente del popup de conversación
  const ChatPopupModal = () => {
    if (!chatPopup || !chatPopup.isOpen) return null

    return (
      <div
        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
        onClick={() => setChatPopup(null)}
      >
        <div
          className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden animate-fade-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex items-center gap-3">
            <img
              src={chatPopup.image}
              alt={chatPopup.username}
              className="w-10 h-10 rounded-full object-cover border-2 border-white"
            />
            <div className="flex-1">
              <p className="font-bold text-white">{chatPopup.username}</p>
              <p className="text-blue-100 text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span> En línea
              </p>
            </div>
            <button
              onClick={() => setChatPopup(null)}
              className="text-white hover:bg-white/20 rounded-full p-1"
              title="Cerrar"
              aria-label="Cerrar conversación"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-3 max-h-72 overflow-y-auto bg-gray-50">
            {chatPopup.messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isTarget ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl relative ${msg.isTarget
                    ? "bg-blue-500 text-white rounded-br-sm"
                    : "bg-white text-gray-800 rounded-bl-sm shadow-sm border"
                    } ${msg.isLocked ? "select-none" : ""}`}
                >
                  {msg.isLocked ? (
                    <div className="flex items-center gap-2">
                      <span className="blur-sm">{msg.text}</span>
                      <Lock size={14} className={msg.isTarget ? "text-white/70" : "text-gray-400"} />
                    </div>
                  ) : (
                    <span>{msg.text}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer - Locked */}
          <div className="p-4 border-t bg-white">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-gray-400">
              <Lock size={16} />
              <span className="text-sm">Responder...</span>
            </div>
            <p className="text-center text-xs text-gray-500 mt-3">
              🔒 Desbloquea el informe completo para ver todos los mensajes
            </p>
          </div>
        </div>
      </div>
    )
  }

  useEffect(
    () => () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current)
    },
    [],
  )

  const renderProfileCard = (profile: any) => (
    <div
      className="p-4 rounded-lg border-2 border-green-500/50 text-white animate-fade-in relative overflow-hidden"
      style={{
        backgroundColor: "rgba(26, 44, 36, 0.9)",
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "15px 15px",
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4 text-left">
          {profileImageUrl ? (
            <img
              src={profileImageUrl || "/placeholder.svg"}
              alt="profile"
              className="w-14 h-14 rounded-full object-cover filter grayscale"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-gray-700 animate-pulse"></div>
          )}
          <div>
            <p className="text-green-400 font-bold text-sm">Perfil de Instagram Detectado</p>
            <p className="font-bold text-lg text-white">@{profile.username}</p>
            <p className="text-gray-400 text-sm">
              {profile.media_count} posts • {profile.follower_count} followers
            </p>
          </div>
        </div>
        <div className="w-7 h-7 rounded-full border-2 border-green-400 flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {profile.biography && (
        <div className="border-t border-green-500/20 mt-3 pt-3 text-left">
          <p className="text-gray-300 text-sm">{profile.biography}</p>
        </div>
      )}
    </div>
  )

  const renderInitialStep = () => (
    <>
      <div className="w-full text-left space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">¿Cuál es su género?</h3>
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => setSelectedGender("male")}
            className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center space-y-2 transition-all duration-200 transform hover:scale-105 ${selectedGender === "male" ? "border-indigo-500 bg-indigo-50 shadow-md" : "border-gray-200 bg-white hover:border-gray-300"}`}
          >
            <span className="text-3xl">👱‍♂️</span>
            <span className="font-medium text-sm text-gray-700">Hombre</span>
          </button>
          <button
            onClick={() => setSelectedGender("female")}
            className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center space-y-2 transition-all duration-200 transform hover:scale-105 ${selectedGender === "female" ? "border-indigo-500 bg-indigo-50 shadow-md" : "border-gray-200 bg-white hover:border-gray-300"}`}
          >
            <span className="text-3xl">👱‍♀️</span>
            <span className="font-medium text-sm text-gray-700">Mujer</span>
          </button>
          <button
            onClick={() => setSelectedGender("non-binary")}
            className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center space-y-2 transition-all duration-200 transform hover:scale-105 ${selectedGender === "non-binary" ? "border-indigo-500 bg-indigo-50 shadow-md" : "border-gray-200 bg-white hover:border-gray-300"}`}
          >
            <span className="text-3xl">👱</span>
            <span className="font-medium text-sm text-gray-700">No binario</span>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-pink-500"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
        <h1 className="text-2xl font-bold text-black tracking-wide">IDENTIFICACIÓN DEL OBJETIVO</h1>
      </div>
      <p className="text-gray-600 !-mt-4 pt-6">Ingresa el usuario de @Instagram abajo y realiza una búsqueda rápida.</p>
      <div className="relative w-full">
        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <Input
          type="text"
          placeholder="nombre de usuario"
          autoComplete="off"
          className="w-full bg-white border-2 border-black/20 text-black pl-12 h-14 text-base rounded-lg focus:border-pink-500 focus:ring-pink-500/50 shadow-inner"
          value={instagramHandle}
          onChange={(e) => handleInstagramChange(e.target.value)}
        />
      </div>

      <div className="w-full min-h-[140px] bg-muted">
        {isLoading && (
          <div className="p-4 bg-pink-50 rounded-lg border-2 border-pink-400 animate-pulse">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-pink-200"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-pink-200 rounded w-3/4"></div>
                <div className="h-3 bg-pink-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        )}
        {!isLoading && error && <p className="text-red-600 font-semibold">{error}</p>}
        {!isLoading && profileData && renderProfileCard(profileData)}
      </div>
      <button
        onClick={() => {
          handleContinueClick()
        }}
        disabled={!profileData || isLoading}
        className="w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
      >
        🔍 Continuar Análisis
      </button>
    </>
  )

  const renderLoadingStep = () => (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-black">Analizando Perfil...</h2>
      {profileData && renderProfileCard(profileData)}
      <div className="w-full space-y-3">
        <p className="font-mono text-sm text-gray-700">
          [ESCANEANDO] Cruzando bases de datos... ({Math.floor(loadingProgress)}%)
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-pink-500 to-purple-600 h-2.5 rounded-full"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
      </div>

      {instagramPosts.length > 0 && visiblePosts > 0 && (
        <div className="w-full space-y-3 animate-fade-in">
          <p className="font-mono text-xs text-yellow-600 text-center">[ESTADO] Buscando cuentas conectadas...</p>
          <div className="grid grid-cols-3 gap-2">
            {instagramPosts.slice(0, visiblePosts).map((post, index) => {
              // Use proxy to avoid CORS/403 issues with Instagram/CDN images
              const originalUrl = post.imageUrl || ""
              const imageUrl = originalUrl ? `/api/proxy-image?url=${encodeURIComponent(originalUrl)}` : "/placeholder.svg?height=200&width=200"

              console.log("[v0] Rendering post", index, "original:", originalUrl)

              return (
                <div
                  key={post.id || post.pk || index}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-200 animate-fade-in"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <img
                    src={imageUrl || "/placeholder.svg"}
                    alt={`Post ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error("[v0] Failed to load image for post", index, "URL:", imageUrl)
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                  />
                </div>
              )
            })}
            {/* Placeholder boxes for posts not yet revealed */}
            {Array.from({ length: Math.max(0, instagramPosts.length - visiblePosts) }).map((_, index) => (
              <div key={`placeholder-${index}`} className="aspect-square rounded-lg bg-gray-300 animate-pulse" />
            ))}
          </div>
        </div>
      )}
      {/* Show a message if no posts were fetched */}
      {instagramPosts.length === 0 && visiblePosts > 0 && (
        <div className="w-full text-center">
          <p className="font-mono text-xs text-gray-500">[INFO] Cargando publicaciones de Instagram...</p>
        </div>
      )}
      {/* </CHANGE> */}
    </div>
  )

  const renderResultsStep = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-center gap-2 text-green-600 font-bold text-xl">
        <CheckCircle size={24} /> Análisis Completo
      </div>
      {profileData && renderProfileCard(profileData)}
      {randomizedResults.length > 0 && (
        <div className="p-3 bg-gray-100 border border-gray-300 rounded-lg font-mono text-sm text-left">
          <p>
            <span className="text-green-600 font-bold">[LOG_SISTEMA]</span> Nueva actividad detectada:
          </p>
          <p className="ml-4">
            <span className="text-blue-600">[INSTAGRAM]</span> {randomizedResults[0].username} le dio like a tu foto.
          </p>
          <p className="ml-4">
            <span className="text-blue-600">[INSTAGRAM]</span> Nuevo mensaje de{" "}
            {randomizedResults[1]?.username || randomizedResults[0].username}.
          </p>
        </div>
      )}
      <div className="space-y-3 text-left">
        {randomizedResults.length >= 3 && (
          <>
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                <img
                  src={randomizedResults[i].image || "/placeholder.svg"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1 text-sm">
                  <p className="text-gray-800">
                    <span className="font-semibold">{randomizedResults[i].username}</span>{" "}
                    {i < 2 ? "le dio like a tu foto" : "te envió un mensaje"}
                  </p>
                  <p className="text-gray-500 text-xs">hace {[1, 2, 5][i]} minutos</p>
                </div>
                {i < 2 ? (
                  <Heart className="text-pink-500" size={20} />
                ) : (
                  <MessageCircle className="text-blue-500" size={20} />
                )}
              </div>
            ))}
          </>
        )}
        <div
          className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all"
          onClick={() => openChatPopup(
            randomizedResults[3]?.username || "@sofia_luna22",
            randomizedResults[3]?.image || randomizedResults[0]?.image || "/images/male/perfil/4.jpg",
            0
          )}
        >
          <img src={randomizedResults[3]?.image || randomizedResults[0]?.image || "/images/male/perfil/4.jpg"} alt="User Avatar" className="w-10 h-10 rounded-full object-cover" />
          <div className="flex-1 text-sm">
            <p className="text-gray-800">
              <span className="font-semibold">{randomizedResults[3]?.username || "@sofia_luna22"}</span> te envió un mensaje
            </p>
            <p className="text-blue-500 text-xs flex items-center gap-1">
              <span>Haz clic para leer historial...</span>
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            </p>
          </div>
          <span className="text-red-500 text-xs font-medium">Sospechoso</span>
        </div>
        <div
          className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all"
          onClick={() => openChatPopup(
            randomizedResults[4]?.username || "@carolina_sweet",
            randomizedResults[4]?.image || randomizedResults[1]?.image || "/images/male/perfil/5.jpg",
            1
          )}
        >
          <img src={randomizedResults[4]?.image || randomizedResults[1]?.image || "/images/male/perfil/5.jpg"} alt="User Avatar" className="w-10 h-10 rounded-full object-cover" />
          <div className="flex-1 text-sm">
            <p className="text-gray-800">
              <span className="font-semibold">{randomizedResults[4]?.username || "@carolina_sweet"}</span> te envió un mensaje
            </p>
            <p className="text-blue-500 text-xs flex items-center gap-1">
              <span>Haz clic para leer historial...</span>
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            </p>
          </div>
          <span className="text-red-500 text-xs font-medium">Sospechoso</span>
        </div>
      </div>
      <div className="space-y-5 text-left">
        <h2 className="text-xl font-bold text-black text-center">
          <span className="text-red-600">INTERCEPTADO:</span> Likes Sospechosos de {instagramHandle}
        </h2>
        {interceptedImages.map((item, index) => (
          <div key={index} className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="relative w-full h-56 rounded-md overflow-hidden">
              <img
                src={item.image || "/placeholder.svg"}
                alt={`Liked content ${index + 1}`}
                className="w-full h-full object-cover filter blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <Lock size={40} className="text-white" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Heart size={16} className="text-pink-500" />
              <span className="text-sm text-gray-600">{index % 2 === 0 ? "1.2K" : "876"} likes</span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <img src={profileImageUrl || ""} alt="User" className="w-8 h-8 rounded-full object-cover" />
              <p className="text-sm text-gray-800">
                <b>{instagramHandle}</b> {item.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-5 rounded-lg shadow-xl text-center mt-8">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-cyan-500 flex items-center justify-center mb-4">
          <LockOpen className="text-white" size={40} />
        </div>
        <h2 className="text-xl font-bold text-gray-800">
          <span className="text-yellow-600">🔓</span> DESBLOQUEAR INFORME COMPLETO
        </h2>
        <p className="text-gray-600 mt-1 mb-6">
          Obtén acceso instantáneo al informe completo con fotos sin censura e historial de conversaciones completo.
        </p>
        <div className="bg-red-100 border-2 border-red-500 text-red-800 p-4 rounded-lg mt-5">
          <div className="flex items-center justify-center gap-2">
            <AlertTriangle className="text-red-600" />
            <h3 className="font-bold">EL INFORME SE ELIMINARÁ EN:</h3>
          </div>
          <p className="text-4xl font-mono font-bold my-1 text-red-600">{formatTime(timeLeft)}</p>
          <p className="text-xs text-red-700">
            Después de que expire el tiempo, este informe se eliminará permanentemente por razones de privacidad. Esta oferta no se puede
            recuperar en una fecha posterior.
          </p>
        </div>

        {/* --- MAIN BUTTON AND PRICE --- */}
        <a
          href="https://pay.mycheckoutt.com/0198c1be-98b4-7315-a3bc-8c0fa9120e5c?ref="
          onClick={() => {
            // Facebook Tracking: Envia evento InitiateCheckout con datos enriquecidos
            const userGender = selectedGender === 'male' ? 'female' : selectedGender === 'female' ? 'male' : undefined;
            trackInitiateCheckout(27, 'USD', { gender: userGender });
          }}
          className="mt-6 block w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
        >
          🔓 SÍ, QUIERO EL INFORME COMPLETO
        </a>
        <div className="mt-4 text-center">
          <p className="text-gray-500">
            De <span className="line-through">$79</span> por solo
          </p>
          <p className="text-4xl font-bold text-green-600">$27</p>
          <p className="text-xs text-gray-400 mt-1">(Pago Único)</p>
        </div>

        {/* --- TRUST & GUARANTEE AREA (All Translated) --- */}
        <div className="mt-8 border-t pt-6">
          {/* 1. Social Proof */}
          <div className="flex items-center justify-center gap-2 text-yellow-500">
            <span>★★★★★</span>
            <span className="text-gray-600 font-medium text-sm">4.9/5.0</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Basado en 15,783 clientes satisfechos.</p>

          {/* 2. Guarantee */}
          <div className="mt-6 flex items-center justify-center gap-3 bg-gray-50 p-3 rounded-lg">
            <img src="/images/design-mode/guarantee.png" alt="Sello de Garantía" className="h-12 w-12 opacity-70" />
            <div>
              <h4 className="font-bold text-gray-800 text-left">Garantía de 7 Días</h4>
              <p className="text-xs text-gray-600 text-left">
                Tu satisfacción o tu dinero de vuelta. Cero riesgo para ti.
              </p>
            </div>
          </div>

          {/* 3. Security Seals */}
          <div className="mt-4">
            <p className="text-xs text-gray-400 mb-2">Pago 100% Seguro</p>
            <img
              src="/images/secure-payment-badge2.png"
              alt="Insignias de Pago Seguro"
              className="mx-auto h-6 opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-[#171717]">
      <PageHeader />
      <main className="w-full max-w-md bg-white p-6 md:p-8 rounded-2xl shadow-xl">
        <div className="text-center space-y-8">
          {step === 1 && renderInitialStep()}
          {step === 2 && renderLoadingStep()}
          {step === 3 && renderResultsStep()}
        </div>
      </main>
      <footer className="py-4 mt-4">
        <p className="text-xs text-white">© 2024. Todos los derechos reservados.</p>
      </footer>

      {/* Popup de conversación interceptada */}
      <ChatPopupModal />
    </div>
  )
}
