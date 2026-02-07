import { LegalFooter } from "@/components/legal-footer"

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl">
                <h1 className="text-3xl font-bold mb-8 text-slate-900">Términos de Uso</h1>

                <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                    <h2 className="text-xl font-semibold text-slate-800 mt-6">1. Términos</h2>
                    <p>
                        Al acceder al sitio web <span className="font-semibold">Infidelity Find</span>, aceptas estar sujeto a estos términos de servicio, todas las leyes y regulaciones aplicables, y aceptas que eres responsable del cumplimiento de las leyes locales aplicables. Si no estás de acuerdo con alguno de estos términos, tienes prohibido usar o acceder a este sitio. Los materiales contenidos en este sitio web están protegidos por las leyes de derechos de autor y marcas comerciales aplicables.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">2. Licencia de Uso</h2>
                    <p>
                        Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de Infidelity Find solo para visualización transitoria personal y no comercial. Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia no puedes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>modificar o copiar los materiales;</li>
                        <li>usar los materiales para cualquier propósito comercial, o para cualquier exhibición pública (comercial o no comercial);</li>
                        <li>intentar descompilar o realizar ingeniería inversa de cualquier software contenido en el sitio web de Infidelity Find;</li>
                        <li>eliminar cualquier derecho de autor u otras notaciones de propiedad de los materiales; o</li>
                        <li>transferir los materiales a otra persona o "duplicar" los materiales en cualquier otro servidor.</li>
                    </ul>
                    <p>
                        Esta licencia se terminará automáticamente si violas cualquiera de estas restricciones y puede ser terminada por Infidelity Find en cualquier momento. Al terminar tu visualización de estos materiales o al terminar esta licencia, debes destruir cualquier material descargado en tu posesión, ya sea en formato electrónico o impreso.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">3. Descargo de Responsabilidad</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Los materiales en el sitio web de Infidelity Find se proporcionan "tal cual". Infidelity Find no ofrece garantías, expresas o implícitas, y por la presente niega y rechaza todas las demás garantías, incluyendo, sin limitación, garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular, o no infracción de propiedad intelectual u otra violación de derechos.</li>
                        <li>Además, Infidelity Find no garantiza ni hace ninguna representación con respecto a la precisión, los resultados probables o la confiabilidad del uso de los materiales en su sitio web o de otra manera relacionados con dichos materiales o en cualquier sitio vinculado a este sitio.</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">4. Limitaciones</h2>
                    <p>
                        En ningún caso Infidelity Find o sus proveedores serán responsables de ningún daño (incluyendo, sin limitación, daños por pérdida de datos o ganancias, o debido a interrupción del negocio) que surja del uso o la imposibilidad de usar los materiales en Infidelity Find, incluso si Infidelity Find o un representante autorizado de Infidelity Find ha sido notificado oralmente o por escrito de la posibilidad de tal daño. Debido a que algunas jurisdicciones no permiten limitaciones en garantías implícitas, o limitaciones de responsabilidad por daños consecuentes o incidentales, estas limitaciones pueden no aplicarse a ti.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">5. Precisión de los materiales</h2>
                    <p>
                        Los materiales que aparecen en el sitio web de Infidelity Find podrían incluir errores técnicos, tipográficos o fotográficos. Infidelity Find no garantiza que ninguno de los materiales en su sitio web sea preciso, completo o actual. Infidelity Find puede realizar cambios a los materiales contenidos en su sitio web en cualquier momento sin previo aviso. Sin embargo, Infidelity Find no se compromete a actualizar los materiales.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">6. Enlaces</h2>
                    <p>
                        Infidelity Find no ha revisado todos los sitios vinculados a su sitio web y no es responsable del contenido de ningún sitio vinculado. La inclusión de cualquier enlace no implica respaldo por parte de Infidelity Find del sitio. El uso de cualquier sitio web vinculado es bajo el propio riesgo del usuario.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">Modificaciones</h2>
                    <p>
                        Infidelity Find puede revisar estos términos de servicio para su sitio web en cualquier momento sin previo aviso. Al usar este sitio web, aceptas estar sujeto a la versión actual de estos términos de servicio.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">Ley Aplicable</h2>
                    <p>
                        Estos términos y condiciones se rigen y se interpretan de acuerdo con las leyes de Infidelity Find y te sometes irrevocablemente a la jurisdicción exclusiva de los tribunales en ese Estado o ubicación.
                    </p>
                </div>
            </main>
            <LegalFooter />
        </div>
    )
}
