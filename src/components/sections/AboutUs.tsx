"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Award } from "lucide-react";

const AboutUs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* CONTENEDOR PRINCIPAL: Grid de 2 columnas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* COLUMNA IZQUIERDA: Imagen del Equipo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/images/placeholder.webp" // Asegúrate de tener esta foto en public/images/
                            alt="Nuestro equipo de trabajo"
                            fill
                            className="object-cover"
                        />
                        {/* Decoración: Un borde dorado sutil que sobresale */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-8 border-r-8 border-brand-gold -z-10" />
                    </motion.div>

                    {/* COLUMNA DERECHA: Texto y Valores */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-2">Conócenos</h3>
                            <h2 className="text-4xl md:text-5xl font-black text-brand-dark leading-tight">
                                Pasión por la salud <br />y la <span className="text-brand-gold">enseñanza</span>
                            </h2>
                            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                Somos un centro odontológico integral que combina la atención clínica de vanguardia con un compromiso inquebrantable hacia la formación de futuros especialistas.
                            </p>
                        </div>

                        {/* Misión y Visión */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-brand-blue">
                                <Target className="text-brand-blue mb-3" size={32} />
                                <h4 className="text-xl font-bold text-brand-dark mb-2">Misión</h4>
                                <p className="text-sm text-gray-600">Proveer salud dental de calidad y capacitar alumnos con estándares internacionales.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-brand-gold">
                                <Eye className="text-brand-gold mb-3" size={32} />
                                <h4 className="text-xl font-bold text-brand-dark mb-2">Visión</h4>
                                <p className="text-sm text-gray-600">Ser la institución líder en el Perú que une la práctica clínica con la excelencia académica.</p>
                            </div>
                        </div>

                        {/* Valores Rápidos */}
                        <div className="flex items-center gap-8 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="text-brand-blue" size={24} />
                                <span className="font-bold text-brand-dark text-sm uppercase">Ética</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="text-brand-gold" size={24} />
                                <span className="font-bold text-brand-dark text-sm uppercase">Excelencia</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;