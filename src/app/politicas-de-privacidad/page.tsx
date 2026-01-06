"use client";

import React from "react";

const PoliticasPrivacidad = () => {
    return (
        <main className="pt-32 pb-20 bg-white min-h-screen">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                <header className="mb-16 border-b-2 border-[#022249] pb-10">
                    <h1 className="text-3xl md:text-5xl font-black text-[#022249] uppercase tracking-tighter mb-4">
                        Políticas de Privacidad
                    </h1>
                    <p className="text-gray-500 font-bold text-xs uppercase tracking-[0.2em]">
                        Documento Normativo Interno • CR Odontología
                    </p>
                </header>

                <div className="space-y-12 text-justify text-gray-700 leading-relaxed text-sm md:text-base">

                    <p className="italic text-gray-500">
                        El presente documento establece los términos en que <strong> CR Odontología </strong> trata la información personal de sus usuarios, en estricto cumplimiento de la Ley N° 29733, Ley de Protección de Datos Personales en Perú y su Reglamento.
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-lg font-black text-[#022249] uppercase border-l-4 border-[#d7af58] pl-4">
                            1. Titularidad y Consentimiento
                        </h2>
                        <p>
                            CR Odontología, con domicilio legal en Lima, informa que los datos personales facilitados a través de sus plataformas digitales serán incorporados a sus bancos de datos de titularidad institucional. Al completar nuestros formularios, el usuario otorga su consentimiento previo, informado, expreso e inequívoco para el tratamiento de su información.
                        </p>
                    </section>

                    <section className="space-y-4 bg-gray-50 p-8 border border-gray-200">
                        <h2 className="text-lg font-black text-[#022249] uppercase">
                            2. Tratamiento mediante Terceros y Aula Virtual (iSpring LMS)
                        </h2>
                        <p>
                            Para la prestación de sus servicios educativos bajo la modalidad no presencial, la Institución hace uso de la plataforma tecnológica <strong> iSpring LMS</strong>. Se hace de conocimiento del alumno que el tratamiento de sus datos personales, incluyendo su registro de actividad académica, calificaciones y logs de acceso, se rige de manera complementaria por las políticas de privacidad del proveedor iSpring.
                        </p>
                        <p className="font-bold">
                            La aceptación de los presentes términos implica la conformidad del usuario con el flujo transfronterizo de datos necesario para el funcionamiento de dicha plataforma educativa.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-lg font-black text-[#022249] uppercase border-l-4 border-[#d7af58] pl-4">
                            3. Transferencia de Datos y Certificación Internacional
                        </h2>
                        <p>
                            En el marco de los convenios de cooperación académica, CR Odontología queda facultada para transferir los datos estrictamente necesarios a la <strong>Faculdade do Centro Oeste Paulista (FACOP)</strong> de Brasil. Dicha transferencia tiene como finalidad exclusiva la validación académica, registro y emisión de la doble certificación internacional ofertada en nuestros programas.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-lg font-black text-[#022249] uppercase border-l-4 border-[#d7af58] pl-4">
                            4. Finalidad del Tratamiento
                        </h2>
                        <p>
                            La información será utilizada para: (i) Gestión administrativa y académica de matrículas; (ii) Ejecución de procesos de evaluación; (iii) Remisión de comunicaciones institucionales vinculadas al programa de estudio; y (iv) Cumplimiento de obligaciones legales ante autoridades competentes.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-lg font-black text-[#022249] uppercase border-l-4 border-[#d7af58] pl-4">
                            5. Ejercicio de Derechos ARCO
                        </h2>
                        <p>
                            Los titulares de los datos podrán ejercer sus derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO) de conformidad con la normativa vigente. Para tal efecto, deberá dirigir una solicitud formal al correo electrónico: <span className="font-black text-[#022249]">informes@crodontologia.com</span>, adjuntando una copia legible de su documento de identidad.
                        </p>
                    </section>
            </div>
        </div>
</main>
);
};

export default PoliticasPrivacidad;