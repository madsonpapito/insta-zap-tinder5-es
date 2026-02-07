"use client"

import { Search, Activity, Instagram, MapPin, Eye, ShieldCheck, Heart, Camera, MessageSquare, Check, CheckCircle, Star, FolderArchive, Users, Smartphone, ScanFace } from 'lucide-react'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { FacebookTracker } from '@/components/FacebookTracker'

// Componente auxiliar para as estrelas
const StarRating = ({ rating = 5 }: { rating?: number }) => (
    <div className="flex text-yellow-400">
        {Array.from({ length: rating }).map((_, index) => (
            <Star key={index} className="w-5 h-5 fill-current" />
        ))}
    </div>
);

export default function Step1Unisex() {
    const router = useRouter();

    const handleNavigate = () => {
        router.push('/step-2');
    };

    return (
        <div className="bg-white text-gray-800 font-sans">
            {/* Facebook Tracking */}
            <FacebookTracker
                eventName="Lead"
                contentName="Step 1 - Unisex Landing Page"
                contentCategory="Sales Funnel"
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#0A1128] via-[#1d1d3a] to-[#2D1B69] text-white py-16 px-4 overflow-hidden">
                <div className="container mx-auto max-w-3xl text-center flex flex-col items-center">

                    <div className="inline-flex items-center gap-3 bg-white/10 p-4 rounded-2xl shadow-lg mb-6">
                        <Instagram className="h-8 w-8 text-pink-400" />
                        <Smartphone className="h-8 w-8 text-green-400" />
                        <ScanFace className="h-8 w-8 text-cyan-400" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                        No Eres <span className="text-red-500">Paranoico/a</span> —<br />
                        Estás <span className="text-cyan-400">Investigando</span>
                    </h1>

                    <p className="text-lg text-gray-300 mb-4 max-w-xl">
                        ¿Ese presentimiento? Existe por una razón. Cada minuto que esperas es otro minuto
                        de dudas que destruyen tu paz.
                    </p>

                    <p className="text-lg text-white font-bold mb-8 max-w-xl">
                        Escanea su huella digital. Encuentra perfiles de citas ocultos. Obtén la verdad en menos de 2 minutos.
                    </p>

                    <div className="inline-flex items-center bg-cyan-900/50 text-cyan-300 border border-cyan-700 rounded-full px-4 py-1.5 text-sm mb-8">
                        <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>Algoritmo de Detección Avanzado - Actualizado Febrero 2026</span>
                    </div>

                    <div className="w-full max-w-lg space-y-4 text-left mb-8">
                        {/* Instagram Scanner */}
                        <div className="bg-white/10 p-4 rounded-lg flex items-start gap-4 border-l-[6px] border-pink-500 shadow-md">
                            <div className="text-3xl mt-1">📸</div>
                            <div className="text-sm text-gray-200 leading-relaxed">
                                <span className="font-bold text-white text-base block mb-1">Escáner de Perfil de Instagram</span>
                                Descubre seguidores ocultos, likes sospechosos a las 2 AM y perfiles que visita repetidamente — incluso los privados.
                            </div>
                        </div>

                        {/* WhatsApp Scanner */}
                        <div className="bg-white/10 p-4 rounded-lg flex items-start gap-4 border-l-[6px] border-green-500 shadow-md">
                            <div className="text-3xl mt-1">💬</div>
                            <div className="text-sm text-gray-200 leading-relaxed">
                                <span className="font-bold text-white text-base block mb-1">Rastreador de Actividad de WhatsApp</span>
                                Los mensajes &quot;eliminados&quot; dejan rastros digitales. Ve con quién habla todo el día — y luego borra antes de que despiertes.
                            </div>
                        </div>

                        {/* Dating App Detector */}
                        <div className="bg-white/10 p-4 rounded-lg flex items-start gap-4 border-l-[6px] border-orange-500 shadow-md">
                            <div className="text-3xl mt-1">🔥</div>
                            <div className="text-sm text-gray-200 leading-relaxed">
                                <span className="font-bold text-white text-base block mb-1">Buscador de Perfiles en Apps de Citas</span>
                                Usa su foto para escanear Tinder, Bumble, Hinge y más de 50 apps de citas. Perfiles ocultos expuestos al instante.
                            </div>
                        </div>

                        {/* Photo Recognition */}
                        <div className="bg-white/10 p-4 rounded-lg flex items-start gap-4 border-l-[6px] border-cyan-500 shadow-md">
                            <div className="text-3xl mt-1">🔍</div>
                            <div className="text-sm text-gray-200 leading-relaxed">
                                <span className="font-bold text-white text-base block mb-1">Escaneo de Reconocimiento Facial</span>
                                Sube una foto. Nuestra IA escaneará millones de perfiles para encontrar coincidencias en plataformas de citas.
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleNavigate}
                        className="w-full max-w-lg bg-gradient-to-r from-red-500 to-orange-500 hover:opacity-90 text-white font-bold py-4 px-6 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105"
                    >
                        🔍 INICIAR INVESTIGACIÓN ANÓNIMA
                    </button>
                    <p className="text-xs text-gray-400 mt-2">100% anónimo. Nunca sabrán que verificaste.</p>
                </div>
            </section>

            {/* Signs Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Las Señales Que Conoces
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
                        Demasiado Bien
                    </h3>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-6">
                        Confiar en tu instinto no es paranoia — es instinto de supervivencia.
                        Si estás leyendo esto, algo ya se siente mal.
                    </p>
                    <p className="text-lg text-black font-bold mb-12 max-w-xl mx-auto">
                        Mereces claridad. Mereces pruebas. Mereces saber.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div className="inline-block bg-red-100 p-4 rounded-xl mb-4">
                                <Smartphone className="h-8 w-8 text-red-500" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">TELÉFONO EN &quot;NO MOLESTAR&quot;</h4>
                            <p className="text-gray-500 text-sm">Su teléfono solía estar sobre la mesa. Ahora está boca abajo, en silencio, o va al baño con él/ella.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div className="inline-block bg-purple-100 p-4 rounded-xl mb-4">
                                <Eye className="h-8 w-8 text-purple-500" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">CAMBIOS DE CONTRASEÑA</h4>
                            <p className="text-gray-500 text-sm">Nuevas contraseñas, nuevos códigos PIN, Face ID activado de repente. ¿Qué están protegiendo?</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div className="inline-block bg-orange-100 p-4 rounded-xl mb-4">
                                <Activity className="h-8 w-8 text-orange-500" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">&quot;HORAS EXTRAS&quot; REPENTINAS</h4>
                            <p className="text-gray-500 text-sm">Noches trabajando hasta tarde, &quot;salidas con amigos&quot; repentinas, historias que no cuadran. Pero la ubicación siempre está desactivada.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div className="inline-block bg-pink-100 p-4 rounded-xl mb-4">
                                <Heart className="h-8 w-8 text-pink-500" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">LA INTIMIDAD DESAPARECIÓ</h4>
                            <p className="text-gray-500 text-sm">Cambio repentino en el afecto. Distante, frío/a, o sobrecompensando con muestras de amor excesivas. Algo cambió.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Scan Section */}
            <section className="bg-gradient-to-br from-[#0A1128] to-[#1d1d3a] py-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Análisis Completo de <span className="text-cyan-400">Huella Digital</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                        Nuestro algoritmo avanzado escanea múltiples plataformas para encontrar actividad oculta, perfiles secretos y rastros digitales que creían eliminados.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-white/10 p-6 rounded-xl text-center">
                            <div className="text-4xl mb-3">📱</div>
                            <p className="text-white font-bold text-sm">Instagram</p>
                            <p className="text-gray-400 text-xs">Actividad oculta</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl text-center">
                            <div className="text-4xl mb-3">💬</div>
                            <p className="text-white font-bold text-sm">WhatsApp</p>
                            <p className="text-gray-400 text-xs">Chats eliminados</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl text-center">
                            <div className="text-4xl mb-3">🔥</div>
                            <p className="text-white font-bold text-sm">Tinder</p>
                            <p className="text-gray-400 text-xs">Perfiles ocultos</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl text-center">
                            <div className="text-4xl mb-3">💛</div>
                            <p className="text-white font-bold text-sm">Bumble</p>
                            <p className="text-gray-400 text-xs">Cuentas activas</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl text-center">
                            <div className="text-4xl mb-3">💜</div>
                            <p className="text-white font-bold text-sm">Hinge</p>
                            <p className="text-gray-400 text-xs">Perfiles coincidentes</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl text-center">
                            <div className="text-4xl mb-3">✈️</div>
                            <p className="text-white font-bold text-sm">Telegram</p>
                            <p className="text-gray-400 text-xs">Chats secretos</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl text-center">
                            <div className="text-4xl mb-3">📍</div>
                            <p className="text-white font-bold text-sm">Ubicación</p>
                            <p className="text-gray-400 text-xs">Historial GPS</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl text-center">
                            <div className="text-4xl mb-3">➕</div>
                            <p className="text-white font-bold text-sm">+50 Apps</p>
                            <p className="text-gray-400 text-xs">Escaneo completo</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gray-50 py-20 px-4">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">
                        Más de <span className="text-red-500">127,000 personas</span> encontraron la verdad
                    </h2>
                    <div className="space-y-8">
                        {/* Testimonial 1 - Female */}
                        <div className="bg-white p-6 rounded-xl shadow-lg text-left">
                            <div className="flex items-center mb-4">
                                <Image src="/images/83.jpg" alt="María" width={48} height={48} className="rounded-full mr-4" />
                                <div>
                                    <p className="font-bold">María, 38</p>
                                    <p className="text-sm text-green-600 flex items-center"><Check className="h-4 w-4 mr-1" />Usuario Verificado</p>
                                </div>
                            </div>
                            <blockquote className="text-gray-600 italic mb-4">
                                &quot;Durante 8 meses me llamó loca y paranoica. El escaneo encontró su perfil de Tinder — todavía activo — y conversaciones con su &apos;amiga del trabajo&apos; que lo aclararon todo. No estoy loca. Tenía razón.&quot;
                            </blockquote>
                            <StarRating />
                        </div>

                        {/* Testimonial 2 - Male */}
                        <div className="bg-white p-6 rounded-xl shadow-lg text-left">
                            <div className="flex items-center mb-4">
                                <Image src="/images/p1.jpg" alt="Carlos" width={48} height={48} className="rounded-full mr-4" />
                                <div>
                                    <p className="font-bold">Carlos, 41</p>
                                    <p className="text-sm text-gray-500">Investigación completada en Enero 2026</p>
                                </div>
                            </div>
                            <blockquote className="text-gray-600 italic mb-4">
                                &quot;Ella decía que era paranoico y controlador. Su teléfono siempre estaba boca abajo, la intimidad desapareció. El escaneo de fotos encontró su perfil de Bumble creado hace 3 meses. Sin pruebas, habría seguido manipulándome.&quot;
                            </blockquote>
                            <StarRating />
                        </div>

                        {/* Testimonial 3 - Female */}
                        <div className="bg-white p-6 rounded-xl shadow-lg text-left">
                            <div className="flex items-center mb-4">
                                <Image src="/images/87.jpg" alt="Jessica" width={48} height={48} className="rounded-full mr-4" />
                                <div>
                                    <p className="font-bold">Jessica, 29</p>
                                    <p className="text-sm text-green-600 flex items-center"><Check className="h-4 w-4 mr-1" />Usuario Verificado</p>
                                </div>
                            </div>
                            <blockquote className="text-gray-600 italic mb-4">
                                &quot;¿Honestamente? Esperaba demostrarme equivocada. El escaneo salió limpio. Sin perfiles ocultos. Sin apps de citas. Ahora puedo confiar en él sin esa voz en mi cabeza. Los mejores $47 que he gastado.&quot;
                            </blockquote>
                            <StarRating />
                        </div>
                    </div>
                </div>
            </section>

            {/* You&apos;re Not Crazy Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        &quot;Sin Pruebas, Te Harán <span className="text-red-500">Parecer Loco/a</span>&quot;
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        La manipulación psicológica es real. Cuando confrontas sin evidencia, lo voltean contra ti.
                        &quot;Eres paranoico/a.&quot; &quot;Eres controlador/a.&quot; &quot;Necesitas terapia.&quot;
                    </p>
                    <p className="text-lg text-black font-bold mb-8 max-w-xl mx-auto">
                        La evidencia técnica detiene la manipulación en seco. Los datos no mienten.
                    </p>
                    <div className="bg-gradient-to-r from-cyan-50 to-purple-50 p-8 rounded-2xl max-w-xl mx-auto">
                        <p className="text-gray-700 mb-4">
                            <span className="font-bold text-cyan-600">Investigador privado:</span> $2,000 - $5,000
                        </p>
                        <p className="text-gray-700 mb-4">
                            <span className="font-bold text-purple-600">Semanas de dudas tortuosas:</span> Sufrimiento incalculable
                        </p>
                        <p className="text-gray-700">
                            <span className="font-bold text-green-600">Escaneo completo de InfidelityFind:</span> 1 Crédito de Prueba Gratis
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-gradient-to-br from-[#0A1128] via-[#1d1d3a] to-[#2D1B69] py-16 px-4">
                <div className="container mx-auto max-w-2xl text-center">

                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight drop-shadow-md">
                        La Duda No Desaparecerá<br className="hidden md:block" />
                        Hasta Que <span className="text-cyan-400">Sepas</span>
                    </h2>

                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Puedes seguir preguntándote. Seguir perdiendo el sueño. Seguir revisando su teléfono cuando no mira.
                        O puedes obtener respuestas en los próximos 2 minutos.
                    </p>

                    <button
                        onClick={handleNavigate}
                        className="w-full max-w-lg bg-gradient-to-r from-red-500 to-orange-500 hover:opacity-90 text-white font-extrabold py-5 px-6 rounded-full text-lg md:text-xl shadow-[0_10px_40px_-10px_rgba(255,100,50,0.6)] transition-all transform hover:scale-105 flex items-center justify-center gap-3 mx-auto"
                    >
                        <span className="text-2xl">🔍</span> EJECUTAR ESCANEO ANÓNIMO AHORA
                    </button>

                    <div className="mt-6 space-y-2">
                        <p className="text-sm text-gray-300">
                            100% anónimo. Tu investigación permanece completamente privada.
                        </p>
                        <p className="text-sm text-gray-400">
                            Más de 127,000 personas confían en nosotros en todo el mundo.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    )
}
