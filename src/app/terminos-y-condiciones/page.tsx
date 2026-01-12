"use client";

import React from "react";
import Link from "next/link";

const TerminosCondiciones = () => {
    return (
        <main className="pt-32 pb-20 bg-white min-h-screen">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                {/* ENCABEZADO INSTITUCIONAL */}
                <header className="mb-16 border-b-2 border-[#022249] pb-10">
                    <h1 className="text-3xl md:text-5xl font-black text-[#022249] uppercase tracking-tighter mb-4">
                        Términos y Condiciones de Uso
                    </h1>
                    <p className="text-gray-500 font-bold text-xs uppercase tracking-[0.2em]">
                        Reglamento de Servicios Académicos Digitales • CR Formación Especializada
                    </p>
                </header>

                <div className="space-y-12 text-justify text-gray-700 leading-relaxed text-sm md:text-base">

                    <p className="italic text-gray-500">
                        El presente reglamento rige el acceso y uso de los servicios educativos, plataformas digitales y contenidos académicos provistos por <strong> CR Imagenologia Maxilofacial SAC </strong>. La matriculación en cualquiera de nuestros programas implica la aceptación total y sin reservas de las cláusulas aquí expuestas.
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-lg font-black text-[#022249] uppercase border-l-4 border-[#d7af58] pl-4">
                            1. Propiedad Intelectual y Regulación de Contenidos
                        </h2>
                        <div className="space-y-4">
                            <p>
                                <strong>1.1. Contenido Institucional:</strong> La estructura de los cursos, diseños, logotipos, videos producidos por la institución y guías de estudio son propiedad intelectual exclusiva de <strong>CR Imagenologia Maxilofacial SAC</strong>. Queda prohibida su reproducción, descarga no autorizada o comercialización.
                            </p>
                            <p>
                                <strong>1.2. Material Docente y de Terceros:</strong> El alumno reconoce que ciertos materiales bibliográficos, artículos científicos, presentaciones de autoría docente o recursos de acceso público facilitados en el Aula Virtual, pertenecen a sus respectivos autores o se rigen bajo sus propias licencias de uso. Su inclusión en el programa tiene una finalidad estrictamente pedagógica y de referencia académica.
                            </p>
                            <p>
                                <strong>1.3. Restricciones:</strong> Independientemente de la titularidad del contenido, el alumno se compromete a no distribuir ni difundir el material alojado en la plataforma fuera del ámbito estrictamente personal y educativo del curso. El uso indebido de estos activos facultará a la Institución a tomar las acciones legales correspondientes bajo las leyes de derecho de autor vigentes.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4 bg-gray-50 p-8 border border-gray-200">
                        <h2 className="text-lg font-black text-[#022249] uppercase">
                            2. Acceso al Aula Virtual (iSpring LMS)
                        </h2>
                        <p>
                            El acceso al entorno virtual de aprendizaje se realiza a través de la infraestructura tecnológica de <strong>iSpring LMS</strong>. El usuario es responsable exclusivo de la confidencialidad de sus credenciales de acceso. La cuenta de alumno es personal e intransferible. El sistema cuenta con mecanismos de detección de accesos simultáneos o sospechosos, los cuales podrán derivar en el bloqueo automático de la cuenta.
                        </p>
                    </section>

                    {/* CLÁUSULA 3 */}
                    <section className="space-y-4">
                        <h2 className="text-lg font-black text-[#022249] uppercase border-l-4 border-[#d7af58] pl-4">
                            3. Proceso de Doble Certificación Internacional
                        </h2>
                        <p>
                            Para ser acreedor a la certificación emitida por CR Formación Especializada y la <strong>Faculdade do Centro Oeste Paulista (FACOP)</strong>, el alumno deberá: (i) Haber completado satisfactoriamente el 100% de los módulos del programa; (ii) Aprobar las evaluaciones académicas con la nota mínima requerida; y (iii) No presentar saldos pendientes de pago. Los tiempos de emisión de los certificados internacionales están sujetos a los procesos administrativos internos de ambas instituciones y a la normativa educativa internacional vigente.
                        </p>
                    </section>

                    {/* CLÁUSULA 4 */}
                    <section className="space-y-4">
                        <h2 className="text-lg font-black text-[#022249] uppercase border-l-4 border-[#d7af58] pl-4">
                            4. Política de Pagos y Retiros
                        </h2>
                        <p>
                            La matrícula se considera confirmada una vez que el pago ha sido validado. Dada la naturaleza de los servicios educativos digitales y el acceso inmediato a la propiedad intelectual del curso, no se admiten devoluciones económicas una vez otorgadas las credenciales de acceso al Aula Virtual. En casos excepcionales de fuerza mayor, el alumno podrá solicitar la reserva de su matrícula para la siguiente edición del programa, previa evaluación del comité académico.
                        </p>
                    </section>

                    {/* CLÁUSULA 5 */}
                    <section className="space-y-4">
                        <h2 className="text-lg font-black text-[#022249] uppercase border-l-4 border-[#d7af58] pl-4">
                            5. Jurisdicción y Ley Aplicable
                        </h2>
                        <p>
                            Cualquier controversia derivada de la interpretación o ejecución de los presentes términos será resuelta bajo las leyes de la República del Perú, sometiéndose las partes a la jurisdicción de los jueces y tribunales del Distrito Judicial de Lima.
                        </p>
                    </section>
            </div>
        </div>
</main>
);
};

export default TerminosCondiciones;