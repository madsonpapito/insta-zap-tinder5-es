"use client"

import { CheckCircle, ShieldCheck, Eye, Smartphone, MessageSquare, ArrowRight, Lock, Search, HardDrive, Trash2, X, Database } from "lucide-react";
import { FacebookTracker } from "@/components/FacebookTracker";

export default function InitPage1() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Facebook Tracking */}
            <FacebookTracker
                eventName="ViewContent"
                contentName="Upsell Page - Digital Audit Kit"
                contentCategory="Upsell"
                customData={{ value: 27, currency: "BRL" }}
            />

            {/* Warning Header Strip */}
            <div className="bg-red-600 text-white py-3 px-4 text-center">
                <p className="text-sm md:text-base font-bold uppercase tracking-wide animate-pulse">
                    ⚠️ ¡ESPERA! TU PEDIDO AÚN NO ESTÁ COMPLETO. NO CIERRES ESTA PÁGINA. ⚠️
                </p>
            </div>

            {/* Hero Section */}
            <section className="bg-white pt-12 pb-16 px-4 md:px-8 shadow-sm">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        El Lenguaje Corporal Te Dice Si Están Mintiendo. <br className="hidden md:block" />
                        <span className="text-blue-600">Este Kit Te Dice Qué Están Ocultando.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                        Las señales solo te llevan hasta cierto punto. Para conocer la verdad completa, necesitas ver lo que intentaron borrar.
                        <strong className="text-slate-900"> Presenta el Kit de Auditoría Digital.</strong>
                    </p>
                </div>
            </section>

            {/* The Problem Section */}
            <section className="py-16 px-4 md:px-8 bg-slate-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10">Los Tramposos Conocedores de Tecnología Borran Sus Rastros. Tú Puedes Desenterrarlos.</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4 items-start">
                            <Trash2 className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg">Historial de Chat Borrado</h3>
                                <p className="text-slate-600 text-sm">Borran conversaciones antes de que puedas verlas. Pero siempre queda un rastro.</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4 items-start">
                            <Lock className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg">Apps de Mensajería Secretas</h3>
                                <p className="text-slate-600 text-sm">Telegram, Signal, apps de calculadora disfrazadas—ellos piensan que están escondidos. No lo están.</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4 items-start">
                            <HardDrive className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg">Carpetas de Fotos Ocultas</h3>
                                <p className="text-slate-600 text-sm">Imágenes almacenadas en la nube, carpetas archivadas, y más—todo se puede encontrar.</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4 items-start">
                            <X className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg">Historial de Navegación Borrado</h3>
                                <p className="text-slate-600 text-sm">Piensan que limpiar el historial es suficiente. No saben dónde buscar más.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 uppercase">
                        Complemento Exclusivo
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">El Kit de Auditoría Digital</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                        Una guía paso a paso para investigar su huella digital como un profesional.
                        Esto no es hacking. Es trabajo de detective—para personas comunes.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <Search className="h-8 w-8 text-blue-600 mb-4" />
                            <h3 className="font-bold mb-2">Guías de Recuperación de Datos</h3>
                            <p className="text-slate-600 text-sm">Cómo encontrar fotos y mensajes &quot;eliminados&quot; en iPhones y Androids.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <Smartphone className="h-8 w-8 text-blue-600 mb-4" />
                            <h3 className="font-bold mb-2">Listas de Apps Secretas</h3>
                            <p className="text-slate-600 text-sm">Una lista exhaustiva de &quot;apps trampa&quot; conocidas que usan los tramposos.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <Database className="h-8 w-8 text-blue-600 mb-4" />
                            <h3 className="font-bold mb-2">Tutoriales de Almacenamiento en la Nube</h3>
                            <p className="text-slate-600 text-sm">Cómo revisar carpetas y copias de seguridad ocultas en iCloud, Google Drive, Dropbox.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why This Matters */}
            <section className="py-16 px-4 md:px-8 bg-slate-800 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">¿Por Qué Necesitas Esto Ahora?</h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
                        Cuanto más esperes, más evidencia desaparece. Las fotos se mueven. Los chats se borran. Las apps son desinstaladas. Si el instinto te dice que actúes, <strong className="text-white">ahora es el momento.</strong>
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-full">
                            <ShieldCheck className="h-5 w-5 text-green-400" />
                            <span>100% Legal & Ético</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-full">
                            <Eye className="h-5 w-5 text-green-400" />
                            <span>Solo revisa dispositivos a los que tengas acceso</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-100 to-slate-200">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-sm text-red-600 font-bold uppercase mb-4">Oferta Exclusiva Por Única Vez</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Agrega el Kit de Auditoría Digital por Solo R$27</h2>
                    <p className="text-lg text-slate-600 mb-6">
                        Esto normalmente se vende por R$97. Obtén acceso instantáneo ahora y convierte tus sospechas en certeza.
                    </p>
                    <div className="space-y-4 mb-8">
                        <a href="https://pay.hotmart.com/C99128625F?checkoutMode=10&bid=1739356199099" className="inline-flex items-center justify-center gap-2 w-full max-w-md bg-green-500 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-green-600 transition-colors shadow-lg">
                            <CheckCircle className="h-5 w-5" /> ¡SÍ! AGREGAR A MI PEDIDO <ArrowRight className="h-5 w-5" />
                        </a>
                        <a href="https://pay.hotmart.com/L99128570N?checkoutMode=10&bid=1739354809098" className="block text-slate-500 hover:text-slate-700 text-sm underline">
                            No gracias, continuaré sin el Kit de Auditoría Digital.
                        </a>
                    </div>
                    <p className="text-xs text-slate-400">Pago seguro. Descarga instantánea. No se requiere suscripción.</p>
                </div>
            </section>

        </div>
    );
}
