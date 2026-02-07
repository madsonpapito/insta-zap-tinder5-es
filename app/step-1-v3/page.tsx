"use client"

import { Search, Shield, ShieldCheck, Heart, MessageSquare, Check, CheckCircle, Star, Users, AlertTriangle, Target, Eye } from 'lucide-react'
import Image from "next/image"
import { useRouter } from 'next/navigation'

const StarRating = ({ rating = 5 }) => (
    <div className="flex text-yellow-400">
        {Array.from({ length: rating }).map((_, index) => (
            <Star key={index} className="w-5 h-5 fill-current" />
        ))}
    </div>
);

export default function Step1V3() {
    const router = useRouter();

    const handleNavigate = () => {
        router.push('/step-2');
    };

    return (
        <div className="bg-white text-gray-800 font-sans">

            {/* Hero Section - Deep Navy with Cyan accents */}
            <section className="bg-gradient-to-br from-[#0A1128] via-[#1a2744] to-[#0d1a30] text-white py-16 px-4 overflow-hidden">
                <div className="container mx-auto max-w-3xl text-center flex flex-col items-center">

                    <div className="inline-block bg-[#FF6B35]/20 p-4 rounded-2xl shadow-lg mb-6 border border-[#FF6B35]/30">
                        <Target className="h-10 w-10 text-[#FF6B35]" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                        Sin Pruebas, <span className="text-[#FF6B35]">Ella Te Hará</span> <br className="hidden md:block" />
                        Parecer Loco.
                    </h1>

                    <p className="text-lg text-gray-300 mb-4 max-w-xl">
                        Los datos no mienten. La evidencia técnica detiene la manipulación en seco.
                    </p>

                    <p className="text-xl text-white font-bold mb-8 max-w-xl">
                        Obtén pruebas concretas. Termina con la duda. <span className="text-[#00D9FF]">Recupera el control.</span>
                    </p>

                    <div className="inline-flex items-center bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/40 rounded-full px-4 py-1.5 text-sm mb-8">
                        <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>Análisis de Rastro Digital - Actualizado Enero 2026</span>
                    </div>

                    {/* VOC-Based Trigger Bullets - Male Focused */}
                    <div className="w-full max-w-lg space-y-4 text-left mb-8">

                        <div className="bg-white/10 p-4 rounded-lg flex items-start gap-4 border-l-[6px] border-[#FF6B35] shadow-md">
                            <div className="text-3xl mt-1">🚿</div>
                            <div className="text-sm text-gray-200 leading-relaxed">
                                <span className="font-bold text-white text-base block mb-1">¿Lleva Su Teléfono al Baño?</span>
                                ¿Quién hace eso a menos que esté esperando algo que no puede dejarte ver?
                            </div>
                        </div>

                        <div className="bg-white/10 p-4 rounded-lg flex items-start gap-4 border-l-[6px] border-[#00D9FF] shadow-md">
                            <div className="text-3xl mt-1">🛏️</div>
                            <div className="text-sm text-gray-200 leading-relaxed">
                                <span className="font-bold text-white text-base block mb-1">¿Tu Vida Sexual Ha Desaparecido?</span>
                                Cuando pasa, sientes vacilación. Casi <span className="text-[#00D9FF] font-semibold">repulsión.</span> Algo cambió.
                            </div>
                        </div>

                        <div className="bg-white/10 p-4 rounded-lg flex items-start gap-4 border-l-[6px] border-yellow-400 shadow-md">
                            <div className="text-3xl mt-1">💪</div>
                            <div className="text-sm text-gray-200 leading-relaxed">
                                <span className="font-bold text-white text-base block mb-1">¿Empezó el Gimnasio De Repente?</span>
                                Lencería nueva. Maquillaje nuevo. Pero tú nunca lo ves. <span className="text-yellow-300 font-semibold">¿Para quién es?</span>
                            </div>
                        </div>

                        <div className="bg-white/10 p-4 rounded-lg flex items-start gap-4 border-l-[6px] border-purple-400 shadow-md">
                            <div className="text-3xl mt-1">👤</div>
                            <div className="text-sm text-gray-200 leading-relaxed">
                                <span className="font-bold text-white text-base block mb-1">¿Quién es &quot;Juan del Trabajo&quot;?</span>
                                Menciones frecuentes. Respuestas tardías. <span className="text-purple-300 font-semibold">Historias que no cuadran.</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleNavigate}
                        className="w-full max-w-lg bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] hover:opacity-90 text-white font-bold py-4 px-6 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105"
                    >
                        🎯 OBTÉN PRUEBAS CONCRETAS AHORA
                    </button>
                    <p className="text-xs text-gray-400 mt-2">Investigación 100% anónima. Ella nunca sabrá que revisaste.</p>
                </div>
            </section>

            {/* Validation Section - Male Focused */}
            <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        No Estás Paranoico.
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#FF6B35] mb-6">
                        Solo No Tenías Pruebas... <span className="text-slate-800">Todavía.</span>
                    </h3>

                    <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
                        Ese nudo en el estómago cada vez que ella está en su teléfono no es inseguridad — <strong className="text-slate-800">es tu instinto diciéndote que algo está mal.</strong>
                    </p>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-left max-w-xl mx-auto mb-10">
                        <h4 className="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5 text-amber-500" />
                            Señales de Que Te Está Manipulando:
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✗</span>
                                <span className="text-gray-700">Te llama <strong>&quot;controlador&quot;</strong> cuando haces preguntas.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✗</span>
                                <span className="text-gray-700">Dice que eres <strong>&quot;inseguro&quot;</strong> cuando notas sus cambios.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✗</span>
                                <span className="text-gray-700">Te hace sentir culpable a <strong>TI</strong> por notar <strong>SU</strong> comportamiento.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✗</span>
                                <span className="text-gray-700">Sugiere que &quot;necesitas terapia&quot; cuando expresas preocupación.</span>
                            </li>
                        </ul>
                        <div className="mt-6 pt-4 border-t border-slate-200">
                            <p className="text-[#FF6B35] font-bold text-lg">Esto es manipulación. Y termina hoy.</p>
                        </div>
                    </div>

                    <p className="text-lg text-black font-bold max-w-xl mx-auto">
                        Mereces claridad. Mereces la verdad. Mereces recuperar tu paz mental.
                    </p>
                </div>
            </section>

            {/* False Solutions Section - Male Focused */}
            <section className="py-20 px-4 bg-[#0A1128] text-white">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        El Enemigo No Eres Tú.
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#FF6B35] mb-10">
                        Es La Duda Que Te Consume.
                    </h3>

                    <div className="text-left max-w-xl mx-auto mb-10">
                        <p className="text-slate-300 mb-6 text-lg">Ya intentaste:</p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
                                <span className="text-red-400 text-xl">❌</span>
                                <div>
                                    <p className="font-semibold text-white">Intentar adivinar su contraseña</p>
                                    <p className="text-slate-400 text-sm">Frustrante. Y la cambió de todos modos.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
                                <span className="text-red-400 text-xl">❌</span>
                                <div>
                                    <p className="font-semibold text-white">Preguntarle directamente</p>
                                    <p className="text-slate-400 text-sm">Negó todo y te llamó &quot;controlador.&quot;</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
                                <span className="text-red-400 text-xl">❌</span>
                                <div>
                                    <p className="font-semibold text-white">Pedir conocer a &quot;ese amigo&quot;</p>
                                    <p className="text-slate-400 text-sm">Acepta pero de alguna manera nunca pasa.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
                                <span className="text-red-400 text-xl">❌</span>
                                <div>
                                    <p className="font-semibold text-white">Ignorar las señales</p>
                                    <p className="text-slate-400 text-sm">La ansiedad y sensación de humillación solo empeoraron.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
                                <span className="text-red-400 text-xl">❌</span>
                                <div>
                                    <p className="font-semibold text-white">Buscar validación en otro lado</p>
                                    <p className="text-slate-400 text-sm">Una solución temporal que no resuelve el problema principal.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#00D9FF]/20 to-cyan-500/20 p-6 rounded-2xl border border-[#00D9FF]/30 max-w-xl mx-auto">
                        <p className="text-lg text-slate-200 mb-2">
                            <strong className="text-white">Nada funcionó.</strong> Porque ella sabe cómo esconder.
                        </p>
                        <p className="text-xl text-[#00D9FF] font-bold">
                            Pero los rastros digitales no mienten.
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
                        Análisis técnico que descubre lo que ella intentó ocultar.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-slate-100 hover:shadow-xl transition-shadow">
                            <div className="inline-block bg-[#FF6B35]/10 p-4 rounded-xl mb-4">
                                <Search className="h-8 w-8 text-[#FF6B35]" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">PERFILES EN APPS DE CITAS</h4>
                            <p className="text-gray-500 text-sm">Perfiles ocultos de Tinder, Bumble, Hinge vinculados a su número o email.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-slate-100 hover:shadow-xl transition-shadow">
                            <div className="inline-block bg-purple-100 p-4 rounded-xl mb-4">
                                <Users className="h-8 w-8 text-purple-500" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">CONTACTOS SOSPECHOSOS</h4>
                            <p className="text-gray-500 text-sm">Perfiles con los que interactúa frecuentemente. Actividad nocturna. Conversaciones ocultas.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-slate-100 hover:shadow-xl transition-shadow">
                            <div className="inline-block bg-[#00D9FF]/10 p-4 rounded-xl mb-4">
                                <Eye className="h-8 w-8 text-[#00D9FF]" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">SEGUIMIENTOS SECRETOS</h4>
                            <p className="text-gray-500 text-sm">Nuevos perfiles que empezó a seguir. El &quot;colega del trabajo.&quot; El ex.</p>
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

            {/* Testimonials Section - Male Testimonials */}
            <section className="bg-gray-50 py-20 px-4">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">
                        Más de <span className="text-[#FF6B35]">127,000 hombres</span> ya descubrieron la verdad.
                    </h2>
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg text-left">
                            <div className="flex items-center mb-4">
                                <Image src="/images/female/p1.jpg" alt="Miguel" width={48} height={48} className="rounded-full mr-4" />
                                <div>
                                    <p className="font-bold">Miguel, 38</p>
                                    <p className="text-sm text-green-600 flex items-center"><Check className="h-4 w-4 mr-1" />Usuario Verificado</p>
                                </div>
                            </div>
                            <blockquote className="text-gray-600 italic mb-3">
                                &quot;Durante 6 meses sentí que algo andaba mal. Ella decía que yo era &apos;inseguro&apos; y que necesitaba terapia. La herramienta me mostró conversaciones con su &apos;compañero del gym&apos; que confirmaron todo.&quot;
                            </blockquote>
                            <p className="text-[#FF6B35] font-bold text-sm">No estaba paranoico. Tenía razón.</p>
                            <div className="mt-3">
                                <StarRating />
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg text-left">
                            <div className="flex items-center mb-4">
                                <Image src="/images/female/p2.jpg" alt="David" width={48} height={48} className="rounded-full mr-4" />
                                <div>
                                    <p className="font-bold">David, 45</p>
                                    <p className="text-sm text-gray-500">Investigación completada Enero 2026</p>
                                </div>
                            </div>
                            <blockquote className="text-gray-600 italic mb-3">
                                &quot;Mi esposa estaba intercambiando mensajes con 2 tipos diferentes de su &apos;equipo de trabajo.&apos; La confronté con pruebas. Sin más manipulación. Sin más juegos.&quot;
                            </blockquote>
                            <p className="text-[#FF6B35] font-bold text-sm">Finalmente tuve la evidencia que necesitaba.</p>
                            <div className="mt-3">
                                <StarRating />
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg text-left">
                            <div className="flex items-center mb-4">
                                <Image src="/images/female/p3.jpg" alt="Jaime" width={48} height={48} className="rounded-full mr-4" />
                                <div>
                                    <p className="font-bold">Jaime, 32</p>
                                    <p className="text-sm text-green-600 flex items-center"><Check className="h-4 w-4 mr-1" />Usuario Verificado</p>
                                </div>
                            </div>
                            <blockquote className="text-gray-600 italic mb-3">
                                &quot;Ella empezó a ir al gimnasio, comprar ropa nueva, pero nuestra intimidad estaba muerta. Yo sabía que algo estaba mal pero no podía probarlo. Ahora puedo seguir adelante.&quot;
                            </blockquote>
                            <p className="text-[#FF6B35] font-bold text-sm">Recuperé mi control.</p>
                            <div className="mt-3">
                                <StarRating />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-[#0A1128] py-16 px-4">
                <div className="container mx-auto max-w-2xl text-center">

                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight drop-shadow-md">
                        Mereces La Verdad.
                    </h2>
                    <p className="text-xl text-slate-300 mb-4">
                        Termina con la tortura mental. <strong className="text-white">Recupera tu paz mental.</strong>
                    </p>
                    <p className="text-lg text-[#00D9FF] mb-8">
                        No estás paranoico. Solo no tenías pruebas.
                    </p>

                    <button
                        onClick={handleNavigate}
                        className="w-full max-w-lg bg-[#FF6B35] hover:bg-[#ff8c5a] text-white font-extrabold py-5 px-6 rounded-full text-lg md:text-xl shadow-[0_10px_40px_-10px_rgba(255,107,53,0.6)] transition-all transform hover:scale-105 flex items-center justify-center gap-3 mx-auto"
                    >
                        <span className="text-2xl">🎯</span> OBTÉN PRUEBAS CONCRETAS AHORA
                    </button>

                    <div className="mt-6 space-y-2">
                        <p className="text-sm text-gray-300">
                            100% anónimo. Tu investigación permanecerá completamente privada.
                        </p>
                        <p className="text-sm text-gray-400">
                            Más de 127,000 hombres ya descubrieron la verdad.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    )
}
