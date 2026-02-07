import { LegalFooter } from "@/components/legal-footer"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl">
                <h1 className="text-3xl font-bold mb-8 text-slate-900">Política de Privacidad</h1>

                <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                    <p>
                        Tu privacidad es importante para nosotros. Es política de Infidelity Find respetar tu privacidad con respecto a cualquier información que podamos recopilar de ti a través de nuestro sitio web, Infidelity Find, y otros sitios que poseemos y operamos.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">Información que recopilamos</h2>
                    <p>
                        Solo solicitamos información personal cuando realmente la necesitamos para proporcionarte un servicio. La recopilamos por medios justos y legales, con tu conocimiento y consentimiento. También te informamos por qué la estamos recopilando y cómo se utilizará.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">Uso de datos</h2>
                    <p>
                        Solo conservamos la información recopilada durante el tiempo necesario para proporcionarte el servicio solicitado. Los datos que almacenamos los protegeremos con medios comercialmente aceptables para prevenir pérdidas y robos, así como acceso no autorizado, divulgación, copia, uso o modificación.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">Compartir datos</h2>
                    <p>
                        No compartimos ninguna información de identificación personal públicamente o con terceros, excepto cuando lo requiera la ley.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">Cookies</h2>
                    <p>
                        Nuestro sitio web puede enlazar a sitios externos que no son operados por nosotros. Ten en cuenta que no tenemos control sobre el contenido y las prácticas de estos sitios, y no podemos aceptar responsabilidad por sus respectivas políticas de privacidad.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">Compromiso del Usuario</h2>
                    <p>
                        El usuario se compromete a hacer un uso adecuado de los contenidos e información que Infidelity Find ofrece en el sitio y con carácter enunciativo, pero no limitativo:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>A) No participar en actividades que sean ilegales o contrarias a la buena fe y al orden público;</li>
                        <li>B) No difundir propaganda o contenido de naturaleza racista, xenófoba, o de juegos de azar, cualquier tipo de pornografía ilegal, apología del terrorismo o contra los derechos humanos;</li>
                        <li>C) No causar daños a los sistemas físicos (hardware) y lógicos (software) de Infidelity Find, sus proveedores o terceros, introducir o diseminar virus informáticos o cualquier otro sistema de hardware o software que sea capaz de causar los daños mencionados.</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">Más información</h2>
                    <p>
                        Esperamos que esto haya aclarado las cosas para ti y, como se mencionó anteriormente, si hay algo de lo que no estás seguro si necesitas o no, generalmente es más seguro dejar las cookies habilitadas en caso de que interactúen con una de las funciones que usas en nuestro sitio.
                    </p>

                    <p className="mt-8 text-sm">Esta política es efectiva a partir de {new Date().getFullYear()}.</p>
                </div>
            </main>
            <LegalFooter />
        </div>
    )
}
