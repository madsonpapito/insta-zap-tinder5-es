"use client"

import { CheckCircle, ShieldCheck, Heart, MessageSquare, ArrowRight, Mic, FileText, Brain, Zap, X, Volume2 } from "lucide-react";
import { FacebookTracker } from "@/components/FacebookTracker";

export default function InitPage2() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Facebook Tracking */}
            <FacebookTracker
                eventName="ViewContent"
                contentName="Upsell Page 2 - Emotional Shielding Protocol"
                contentCategory="Upsell"
                customData={{ value: 17, currency: "BRL" }}
            />

            {/* Warning Header Strip */}
            <div className="bg-red-600 text-white py-3 px-4 text-center">
                <p className="text-sm md:text-base font-bold uppercase tracking-wide animate-pulse">
                    ⚠️ ¡ÚLTIMA OPORTUNIDAD! OFERTA ESPECIAL ANTES DE ACCEDER A TU MATERIAL ⚠️
                </p>
            </div>

            {/* Hero Section */}
            <section className="bg-white pt-12 pb-16 px-4 md:px-8 shadow-sm">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Encontrar la Verdad Es Solo la Mitad de la Batalla. <br className="hidden md:block" />
                        <span className="text-purple-600">¿Qué Harás Cuando la Confrontación Llegue?</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                        Manipularán. Mentirán. Tratarán de hacerte dudar de ti misma. El <strong className="text-slate-900">Protocolo de Escudo Emocional</strong> te mantiene tranquila, enfocada y en control.
                    </p>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-16 px-4 md:px-8 bg-slate-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10">¿Qué Pasa Cuando Llegas con Pruebas?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4 items-start">
                            <X className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg">Negación Total</h3>
                                <p className="text-slate-600 text-sm">&quot;¡Eso no es lo que parece! Estás malinterpretando todo.&quot;</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4 items-start">
                            <Zap className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg">Ira y Agresión</h3>
                                <p className="text-slate-600 text-sm">&quot;¿Cómo te atreves a revisar mi teléfono? ¡ESTÁS violando MI privacidad!&quot;</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4 items-start">
                            <Brain className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg">Darle la Vuelta</h3>
                                <p className="text-slate-600 text-sm">&quot;Esto no hubiera pasado si TÚ no fueras tan fría e insegura.&quot;</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4 items-start">
                            <Heart className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg">Súplicas y Falsas Promesas</h3>
                                <p className="text-slate-600 text-sm">&quot;Te lo juro, cambiaré. Por favor, solo dame UNA oportunidad más.&quot;</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-slate-700 mt-10 text-lg">
                        Sin preparación, la manipulación <strong className="text-slate-900">te derrumbará</strong> y perderás el control de la situación.
                    </p>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 uppercase">
                        Tu Armadura Emocional
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">El Protocolo de Escudo Emocional</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                        Una guía de audio compacta + guiones de confrontación diseñados para mantenerte tranquila, lúcida y en control cuando llegue el momento de la verdad.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 flex gap-4 items-start">
                            <Volume2 className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold mb-1">Guía de Audio de 15 Minutos</h3>
                                <p className="text-slate-600 text-sm">Escucha antes de cualquier confrontación para calmar tu mente y anclar tus emociones.</p>
                            </div>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 flex gap-4 items-start">
                            <FileText className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold mb-1">Guiones de Confrontación</h3>
                                <p className="text-slate-600 text-sm">Palabras exactas a usar para cada táctica de manipulación—negación, ira, lágrimas, culpa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="py-12 px-4 bg-slate-800 text-white">
                <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-center">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-green-400" />
                        <span className="font-semibold">Diseñado por Consejeros de Relaciones</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mic className="h-5 w-5 text-green-400" />
                        <span className="font-semibold">Audio Profesional</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-green-400" />
                        <span className="font-semibold">Guiones Listos para Usar</span>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-100 to-slate-200">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-sm text-red-600 font-bold uppercase mb-4">Oferta Exclusiva Por Única Vez</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Agrega el Protocolo de Escudo Emocional por Solo R$17</h2>
                    <p className="text-lg text-slate-600 mb-6">
                        Esto no estará disponible más tarde. Prepárate emocionalmente y toma control de la conversación.
                    </p>
                    <div className="space-y-4 mb-8">
                        <a href="https://pay.hotmart.com/H99128669T?checkoutMode=10&bid=1739356515168" className="inline-flex items-center justify-center gap-2 w-full max-w-md bg-purple-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-purple-700 transition-colors shadow-lg">
                            <CheckCircle className="h-5 w-5" /> SÍ, AGREGAR A MI PEDIDO <ArrowRight className="h-5 w-5" />
                        </a>
                        <a href="/tk.html" className="block text-slate-500 hover:text-slate-700 text-sm underline">
                            No gracias, solo accederé a mi material sin esto.
                        </a>
                    </div>
                    <p className="text-xs text-slate-400">Pago seguro. Descarga instantánea. Sin suscripción.</p>
                </div>
            </section>

        </div>
    );
}
