"use client"

import { CheckCircle, Eye, Shield, Book, Users, LogOut, ArrowRight } from "lucide-react";
import { FacebookTracker } from "@/components/FacebookTracker";

export default function InitPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Facebook Tracking - envia evento ViewContent com dados enriquecidos */}
            <FacebookTracker
                eventName="ViewContent"
                contentName="Sales Page - Reading Signs"
                contentCategory="Offer"
                customData={{ value: 37, currency: "BRL" }}
            />

            {/* Hero Section */}
            <section className="bg-white pt-20 pb-16 px-4 md:px-8 shadow-sm">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
                        Descubre la Verdad
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        ¿Tu Pareja Está Ocultando Algo? <br className="hidden md:block" />
                        <span className="text-blue-600">Aprende a Leer las Señales.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                        Tu intuición te dice que algo está mal. Ahora, aprende a ver lo que intentan ocultar—desde el lenguaje corporal sutil hasta las huellas digitales que no pueden borrar.
                    </p>
                    <a href="https://pay.hotmart.com/L99128570N?checkoutMode=10&bid=1739354809098" className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-700 transition-colors shadow-lg">
                        QUIERO DESCUBRIR LA VERDAD <ArrowRight className="h-5 w-5" />
                    </a>
                    <p className="text-sm text-slate-500">Acceso digital instantáneo. Descarga inmediata.</p>
                </div>
            </section>

            {/* Problem Agitation Section */}
            <section className="py-16 px-4 md:px-8 bg-slate-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">¿Por Qué No Puedes Dejar de Pensar en Ello?</h2>
                    <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                        <p>
                            Te despierta a las 3 de la mañana. La extraña distancia en sus ojos. Las &quot;noches de trabajo&quot; que no tienen sentido. Su teléfono siempre boca abajo, con una nueva contraseña.
                        </p>
                        <p>
                            Le preguntaste directamente, y te hicieron sentir loca. &quot;Solo estás siendo paranoica,&quot; dijeron. La duda te consume porque <strong className="text-slate-900">algo ha cambiado,</strong> y ambos lo saben.
                        </p>
                        <p className="text-slate-900 font-semibold text-xl pt-4">
                            Lo peor no es la posible traición. Es el <span className="text-red-600">no saber.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Solution Intro Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Tu Intuición Es Correcta. Ahora Necesitas los Hechos.</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        El método <strong>&quot;Leyendo las Señales&quot;</strong> te da el conocimiento para ver más allá de las mentiras. Combina el análisis del lenguaje corporal con técnicas de investigación digital usadas por expertos para detectar comportamientos ocultos.
                    </p>
                </div>
            </section>

            {/* What's Inside Section */}
            <section className="py-16 px-4 md:px-8 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Lo Que Aprenderás</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
                            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full h-fit">
                                <Eye className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Descodificando el Lenguaje Corporal</h3>
                                <p className="text-slate-600 text-sm">Las 7 micro-expresiones que revelan mentiras, sin importar cuán buenos crean que son mintiendo.</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
                            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full h-fit">
                                <Shield className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Señales de Alerta de Distancia Emocional</h3>
                                <p className="text-slate-600 text-sm">Reconoce los cambios sutiles en el comportamiento que señalan que su mente está en otra persona.</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
                            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full h-fit">
                                <Book className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Patrones Detectivos en Conversaciones</h3>
                                <p className="text-slate-600 text-sm">Cómo hacer preguntas que hacen que los mentirosos se tropiecen con sus propias historias.</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
                            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full h-fit">
                                <Users className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">El Marco de Observación de Amigos</h3>
                                <p className="text-slate-600 text-sm">Sus amigos a menudo saben. Aprende a leer sus reacciones incómodas cuando surge el tema.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Credibility / Trust Bar */}
            <section className="py-12 px-4 bg-slate-800 text-white">
                <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-center">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="font-semibold">Más de 12,000 Lectores</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="font-semibold">Basado en Estudios de Comportamiento</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="font-semibold">Descarga Digital Instantánea</span>
                    </div>
                </div>
            </section>

            {/* Transformation Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Deja de Sentirte Impotente. Empieza a Ver Claramente.</h2>
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
                            <h3 className="font-bold text-red-700 mb-3 flex items-center gap-2"><LogOut className="h-5 w-5" /> Antes</h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li>• Ansiedad constante y noches sin dormir.</li>
                                <li>• Sintiendo que te estás volviendo &quot;loca.&quot;</li>
                                <li>• Sin idea de qué buscar.</li>
                                <li>• Preguntando directamente y sin obtener nada.</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
                            <h3 className="font-bold text-green-700 mb-3 flex items-center gap-2"><CheckCircle className="h-5 w-5" /> Después</h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li>• Claridad y control sobre la situación.</li>
                                <li>• Sabiendo exactamente qué señales buscar.</li>
                                <li>• Confianza para confrontar con hechos, no sospechas.</li>
                                <li>• Paz mental—sea cual sea el resultado.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-100 to-slate-200">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">La Verdad Te Liberará.</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Termina con la incertidumbre. Obtén el marco que necesitas para ver la realidad de tu relación.
                    </p>
                    <a href="https://pay.hotmart.com/L99128570N?checkoutMode=10&bid=1739354809098" className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-blue-700 transition-colors shadow-xl">
                        ACCEDER A &quot;LEYENDO LAS SEÑALES&quot; AHORA <ArrowRight className="h-6 w-6" />
                    </a>
                    <p className="text-sm text-slate-500 mt-4">Pago seguro y único. Acceso de por vida.</p>
                </div>
            </section>

        </div>
    );
}
