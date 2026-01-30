"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Award } from "lucide-react";

const InstitucionPage = () => {
    return (
        <main className="pt-24 bg-white">
            <section className="relative h-[40vh] md:h-[50vh] bg-[#022249] flex items-center overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <Image
                        src="/images/nuestra-institucion.jpg"
                        alt="Nuestra Institución"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter"
                    >
                        Nuestra <br /> <span className="text-[#d7af58]">Institución</span>
                    </motion.h1>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-black text-[#022249] mb-8 leading-tight">
                                Líderes en formación <br /> odontológica
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    En <strong> CR Formación Especializada </strong> operamos bajo un modelo de educación continua en salud, estructurada en áreas académicas, administrativas y tecnológicas que trabajan de manera integrada. Nuestro modelo educativo se basa en la virtualidad, permitiendo el acceso a profesionales de diferentes regiones, y en la participación de especialistas con amplia experiencia clínica y docente.
                                </p>
                                <p>
                                    Promovemos una gestión moderna, orientada a la calidad educativa, la innovación y la mejora continua, con una clara orientación al estudiante y a los resultados profesionales que este puede alcanzar tras culminar los programas.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/courses/imagenologia-clinica-endodoncia-thumbnail.jpg"
                                alt="Instalaciones"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#022249] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase italic">Nuestros Valores</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: ShieldCheck, text: "Ética Profesional" },
                            { icon: Award, text: "Excelencia Académica" },
                            { icon: Target, text: "Innovación Técnica" },
                            { icon: Eye, text: "Compromiso Humano" }
                        ].map((valor, i) => (
                            <div key={i} className="flex flex-col items-center gap-4">
                                <div className="w-20 h-20 border border-[#d7af58] rounded-full flex items-center justify-center text-[#d7af58]">
                                    <valor.icon size={35} />
                                </div>
                                <span className="font-bold tracking-widest text-sm uppercase">{valor.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Misión */}
                        <div className="bg-white p-12 rounded-[40px] shadow-sm border-t-8 border-[#d7af58]">
                            <div className="bg-[#d7af58]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <Target className="text-[#d7af58]" size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-[#022249] mb-4 uppercase">Nuestra Misión</h3>
                            <p className="text-gray-600 text-lg">
                                Brindar programas de formación especializada en el área de la salud, con énfasis en odontología, mediante una educación virtual de alta calidad, basada en evidencia científica, enfoque teórico–práctico y acompañamiento académico permanente, contribuyendo al fortalecimiento de las competencias clínicas, éticas y profesionales de nuestros estudiantes.
                            </p>
                        </div>

                        {/* Visión */}
                        <div className="bg-white p-12 rounded-[40px] shadow-sm border-t-8 border-[#022249]">
                            <div className="bg-[#022249]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="text-[#022249]" size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-[#022249] mb-4 uppercase">Nuestra Visión</h3>
                            <p className="text-gray-600 text-lg">
                                Ser una institución líder en formación especializada en salud a nivel nacional e internacional, reconocida por la excelencia académica, la innovación educativa y la contribución al desarrollo profesional y humano de los profesionales de la salud.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default InstitucionPage;