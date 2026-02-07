"use client"

import { Search, Shield, ShieldCheck, Heart, MessageSquare, Check, CheckCircle, Star, Users, AlertTriangle } from 'lucide-react'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { FacebookTracker } from '@/components/FacebookTracker'


const StarRating = ({ rating = 5 }) => (
    <div className="flex text-yellow-400">
        {Array.from({ length: rating }).map((_, index) => (
            <Star key={index} className="w-5 h-5 fill-current" />
        ))}
    </div>
);

export default function Step1V2() {
    const router = useRouter();

    const handleNavigate = () => {
        router.push('/step-2');
    };

    return (
        <div className="bg-white text-gray-800 font-sans">
            {/* Facebook Tracking - envia dados enriquecidos para o dataLayer */}
            <FacebookTracker
                eventName="Lead"
                contentName="Step 1 V2 - Landing Page"
                contentCategory="Sales Funnel"
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#1d1d3a] via-[#2a2a4b] to-[#3a2c6b] text-white py-16 px-4 overflow-hidden">
                <div className="container mx-auto max-w-3xl text-center flex flex-col items-center">

                    <div className="inline-block bg-red-500/20 p-4 rounded-2xl shadow-lg mb-6 border border-red-500/30">
                        <Shield className="h-10 w-10 text-red-400" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                        ¿Te Llamó <span className="text-red-500">&quot;Loca&quot;</span> <br className="hidden md:block" />
                        Cuando Preguntaste?
                    </h1>

                    <p className="text-lg text-gray-300 mb-4 max-w-xl">
                        El manipulador usa tu duda en tu contra.
                    </p>

                    <p className="text-xl text-white font-bold mb-8 max-w-xl">
                        Obtén la prueba. Termina con los juegos mentales. <span className="text-red-400">Hoy.</span>
                    </p>

                    <div className="inline-flex items-center bg-green-900/50 text-green-300 border border-green-700 rounded-full px-4 py-1.5 text-sm mb-8">
                        <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>Análisis de Huella Digital - Actualizado Enero 2026</span>
                    </div>

                    {/* VOC-Based Trigger Bullets */}
                    <div className="w-full max-w-lg space-y-4 text-left mb-8">

                        <div className="bg-white/10 p-4 rounded-lg flex items-start gap-4 border-l-[6px] border-red-500 shadow-md">
                            <div className="text-3xl mt-1">🚿</div>
                            <div className="text-sm text-gray-200 leading-relaxed">
                                <span className="font-bold text-white text-base block mb-1">¿Lleva Su Teléfono a la Ducha?</span>
                                ¿Quién hace eso a menos que esté esperando algo que no puede dejarte ver?
                            </div>
                        </div>

                        <div className="bg-white/10 p-4 rounded-lg flex items-start gap-4 border-l-[6px] border-blue-400 shadow-md">
                            <div className="text-3xl mt-1">🌙</div>
                            <div className="text-sm text-gray-200 leading-relaxed">
                                <span className="font-bold text-white text-base block mb-1">¿Te Despierta la Luz Azul a las 2 AM?</span>
                                Lo ves sonriendo a la pantalla. Él cree que estás dormida. <span className="text-blue-300 font-semibold">No lo estás.</span>
                            </div>
                        </div>

                        <div className="bg-white/10 p-4 rounded-lg flex items-start gap-4 border-l-[6px] border-yellow-400 shadow-md">
                            <div className="text-3xl mt-1">🔐</div>
                            <div className="text-sm text-gray-200 leading-relaxed">
                                <span className="font-bold text-white text-base block mb-1">¿Cambió Su Contraseña De Repente Ayer?</span>
                                Tus manos temblaban cuando intentaste revisar. Te entendemos.
                            </div>
                        </div>

                        <div className="bg-white/10 p-4 rounded-lg flex items-start gap-4 border-l-[6px] border-purple-400 shadow-md">
                            <div className="text-3xl mt-1">📱</div>
                            <div className="text-sm text-gray-200 leading-relaxed">
                                <span className="font-bold text-white text-base block mb-1">¿Por Qué un Hombre Casado Necesita Telegram o Signal?</span>
                                Apps ocultas. Notificaciones ocultas. <span className="text-purple-300 font-semibold">¿Qué te está ocultando?</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleNavigate}
                        className="w-full max-w-lg bg-gradient-to-r from-red-500 to-pink-600 hover:opacity-90 text-white font-bold py-4 px-6 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105"
                    >
                        🛡️ DEJA DE SUFRIR. DESCÚBRELO HOY.
                    </button>
                    <p className="text-xs text-gray-400 mt-2">Investigación 100% anónima. Él nunca sabrá que lo revisaste.</p>
                </div>
            </section>

            {/* Validation Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        No Estás Loca.
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
                        Solo No Tenías Pruebas... <span className="text-slate-800">Todavía.</span>
                    </h3>

                    <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
                        La ansiedad que te despierta a las 3 AM no es paranoia — <strong className="text-slate-800">es intuición.</strong>
                    </p>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-left max-w-xl mx-auto mb-10">
                        <h4 className="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5 text-amber-500" />
                            Señales de Manipulación:
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✗</span>
                                <span className="text-gray-700">Te llama <strong>&quot;celosa&quot;</strong> cuando haces preguntas.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✗</span>
                                <span className="text-gray-700">Dice que estás <strong>&quot;imaginando cosas&quot;</strong> cuando notas cambios.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✗</span>
                                <span className="text-gray-700">Te hace sentir culpable a <strong>TI</strong> por notar <strong>SU</strong> comportamiento.</span>
                            </li>
                        </ul>
                        <div className="mt-6 pt-4 border-t border-slate-200">
                            <p className="text-red-600 font-bold text-lg">Esto es manipulación. Y termina hoy.</p>
                        </div>
                    </div>

                    <p className="text-lg text-black font-bold max-w-xl mx-auto">
                        Mereces claridad. Mereces la verdad.
                    </p>
                </div>
            </section>

            {/* False Solutions Section */}
            <section className="py-20 px-4 bg-slate-900 text-white">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        El Enemigo No Eres Tú.
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-bold text-red-400 mb-10">
                        Es La Duda.
                    </h3>

                    <div className="text-left max-w-xl mx-auto mb-10">
                        <p className="text-slate-300 mb-6 text-lg">Ya intentaste:</p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
                                <span className="text-red-400 text-xl">❌</span>
                                <div>
                                    <p className="font-semibold text-white">Adivinar su contraseña</p>
                                    <p className="text-slate-400 text-sm">Frustrante. Y la cambió de todos modos.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
                                <span className="text-red-400 text-xl">❌</span>
                                <div>
                                    <p className="font-semibold text-white">Crear un perfil falso para probarlo</p>
                                    <p className="text-slate-400 text-sm">No cayó. O peor, sí cayó.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
                                <span className="text-red-400 text-xl">❌</span>
                                <div>
                                    <p className="font-semibold text-white">Preguntarle directamente</p>
                                    <p className="text-slate-400 text-sm">Negó todo y te hizo sentir loca.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
                                <span className="text-red-400 text-xl">❌</span>
                                <div>
                                    <p className="font-semibold text-white">Ignorar las señales</p>
                                    <p className="text-slate-400 text-sm">La ansiedad empeoró cada día.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 rounded-2xl border border-green-500/30 max-w-xl mx-auto">
                        <p className="text-lg text-slate-200 mb-2">
                            <strong className="text-white">Nada funcionó.</strong> Porque él sabe cómo esconder.
                        </p>
                        <p className="text-xl text-green-400 font-bold">
                            Pero las huellas digitales no mienten.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Qué Revela Nuestro Sistema
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12">
                        Técnicas avanzadas que descubren lo que intentaron ocultar.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-slate-100 hover:shadow-xl transition-shadow">
                            <div className="inline-block bg-pink-100 p-4 rounded-xl mb-4">
                                <Search className="h-8 w-8 text-pink-500" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">PERFILES EN APPS DE CITAS</h4>
                            <p className="text-gray-500 text-sm">Perfiles ocultos de Tinder, Bumble, Hinge vinculados a su número o email.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-slate-100 hover:shadow-xl transition-shadow">
                            <div className="inline-block bg-purple-100 p-4 rounded-xl mb-4">
                                <Users className="h-8 w-8 text-purple-500" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">INTERACCIONES SOSPECHOSAS</h4>
                            <p className="text-gray-500 text-sm">Perfiles visitados repetidamente. Likes de madrugada. Comentarios que eliminó.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-slate-100 hover:shadow-xl transition-shadow">
                            <div className="inline-block bg-red-100 p-4 rounded-xl mb-4">
                                <Heart className="h-8 w-8 text-red-500" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">SEGUIMIENTOS SECRETOS</h4>
                            <p className="text-gray-500 text-sm">Nuevos perfiles privados que empezó a seguir. La &quot;amiga del trabajo&quot;. La ex.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-slate-100 hover:shadow-xl transition-shadow">
                            <div className="inline-block bg-orange-100 p-4 rounded-xl mb-4">
                                <MessageSquare className="h-8 w-8 text-orange-500" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">HUELLA DIGITAL</h4>
                            <p className="text-gray-500 text-sm">Rastros de actividad que permanecen incluso después de &quot;eliminar&quot; conversaciones.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gray-50 py-20 px-4">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">
                        Más de <span className="text-red-500">127,000 personas</span> ya descubrieron la verdad.
                    </h2>
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg text-left">
                            <div className="flex items-center mb-4">
                                <Image src="/images/83.jpg" alt="Sara" width={48} height={48} className="rounded-full mr-4" />
                                <div>
                                    <p className="font-bold">Sara, 42</p>
                                    <p className="text-sm text-green-600 flex items-center"><Check className="h-4 w-4 mr-1" />Usuario Verificado</p>
                                </div>
                            </div>
                            <blockquote className="text-gray-600 italic mb-3">
                                &quot;Durante 8 meses sentí que algo andaba mal. Él negaba todo. Me llamaba paranoica. La herramienta me mostró conversaciones con su &apos;mejor amiga&apos; que me hicieron llorar por días.&quot;
                            </blockquote>
                            <p className="text-red-600 font-bold text-sm">No estaba loca. Tenía razón.</p>
                            <div className="mt-3">
                                <StarRating />
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg text-left">
                            <div className="flex items-center mb-4">
                                <Image src="/images/86.jpg" alt="Jennifer" width={48} height={48} className="rounded-full mr-4" />
                                <div>
                                    <p className="font-bold">Jennifer, 33</p>
                                    <p className="text-sm text-gray-500">Investigación completada Enero 2026</p>
                                </div>
                            </div>
                            <blockquote className="text-gray-600 italic mb-3">
                                &quot;Mi prometido estaba intercambiando mensajes íntimos con 3 mujeres diferentes. Cancelé la boda 2 semanas antes. Dolió, pero me salvó de una mentira.&quot;
                            </blockquote>
                            <p className="text-red-600 font-bold text-sm">Mi intuición tenía razón todo el tiempo.</p>
                            <div className="mt-3">
                                <StarRating />
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg text-left">
                            <div className="flex items-center mb-4">
                                <Image src="/images/87.jpg" alt="Michelle" width={48} height={48} className="rounded-full mr-4" />
                                <div>
                                    <p className="font-bold">Michelle, 35</p>
                                    <p className="text-sm text-green-600 flex items-center"><Check className="h-4 w-4 mr-1" />Usuario Verificado</p>
                                </div>
                            </div>
                            <blockquote className="text-gray-600 italic mb-3">
                                &quot;Mi esposo juraba que estaba loca, que ella era &apos;solo una amiga del trabajo.&apos; La herramienta mostró fotos provocativas que él le daba like a las 2 AM. Ahora sigo adelante sin dudas.&quot;
                            </blockquote>
                            <p className="text-red-600 font-bold text-sm">No estaba loca. Estaba despierta.</p>
                            <div className="mt-3">
                                <StarRating />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-[#1d1d3a] py-16 px-4">
                <div className="container mx-auto max-w-2xl text-center">

                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight drop-shadow-md">
                        Mereces La Verdad.
                    </h2>
                    <p className="text-xl text-slate-300 mb-8">
                        De una forma u otra, <strong className="text-white">duerme en paz esta noche.</strong>
                    </p>

                    <button
                        onClick={handleNavigate}
                        className="w-full max-w-lg bg-[#FF4081] hover:bg-[#f53677] text-white font-extrabold py-5 px-6 rounded-full text-lg md:text-xl shadow-[0_10px_40px_-10px_rgba(255,64,129,0.6)] transition-all transform hover:scale-105 flex items-center justify-center gap-3 mx-auto"
                    >
                        <span className="text-2xl">🛡️</span> MEREZCO LA VERDAD. COMENZAR AHORA.
                    </button>

                    <div className="mt-6 space-y-2">
                        <p className="text-sm text-gray-300">
                            100% anónimo. Tu investigación permanecerá completamente privada.
                        </p>
                        <p className="text-sm text-gray-400">
                            Más de 127,000 personas ya descubrieron la verdad.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    )
}
