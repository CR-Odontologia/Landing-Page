"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion"; // Importamos para la animación
import {
    Calendar, Clock, Laptop, BookOpen,
    CheckCircle2, ChevronDown, ChevronUp, Award
} from "lucide-react";

import cursosData from "@/data/cursos";

const CursoIndividual = () => {
    const params = useParams();
    const router = useRouter();

    const [openModulos, setOpenModulos] = useState<number[]>([0]);

    const curso = cursosData.find((c) => c.slug === params.slug);

    if (!curso) {
        return router.push("/404");
    }

    const toggleModulo = (id: number) => {
        if (openModulos.includes(id)) {
            setOpenModulos(openModulos.filter(moduloId => moduloId !== id));
        } else {
            setOpenModulos([...openModulos, id]);
        }
    };

    const handleMatricula = () => {
        console.log("Iniciando proceso de pago con Culqi para:", curso.titulo);
        alert("El sistema de pagos Culqi se activará próximamente.");
    };

    return (
        <main className="pt-24 bg-white min-h-screen">
            <section className="bg-[#022249] py-16 md:py-24 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-block bg-[#d7af58] text-[#022249] px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                            {curso.tag}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8 uppercase italic tracking-tighter">
                            {curso.titulo}
                        </h1>
                        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 inline-flex">
                            <Award className="text-[#d7af58]" size={32} />
                            <div>
                                <p className="text-xs font-bold uppercase tracking-tight text-[#d7af58]">Doble Certificación</p>
                                <p className="text-sm font-medium">CR Odontología & FACOP (Brasil)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#d7af58] opacity-10 skew-x-12 translate-x-20" />
            </section>

            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="w-full lg:w-2/3 space-y-16">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-[#d7af58] uppercase tracking-widest">Inicio</p>
                                    <div className="flex items-center gap-2 font-bold text-[#022249]">
                                        <Calendar size={18} /> {curso.infoGeneral.inicio}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-[#d7af58] uppercase tracking-widest">Duración</p>
                                    <div className="flex items-center gap-2 font-bold text-[#022249]">
                                        <Clock size={18} /> {curso.infoGeneral.duracion}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-[#d7af58] uppercase tracking-widest">Modalidad</p>
                                    <div className="flex items-center gap-2 font-bold text-[#022249]">
                                        <Laptop size={18} /> {curso.infoGeneral.modalidad}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-[#d7af58] uppercase tracking-widest">Horario</p>
                                    <div className="flex items-center gap-2 font-bold text-[#022249] text-xs">
                                        {curso.infoGeneral.horario}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl font-black text-[#022249] mb-8 flex items-center gap-4 uppercase italic">
                                    <BookOpen className="text-[#d7af58]" />
                                    Plan de Estudios
                                </h3>
                                <div className="space-y-4">
                                    {curso.planEstudios.map((m) => {
                                        const isOpen = openModulos.includes(m.modulo);
                                        return (
                                            <div key={m.modulo} className="border border-gray-100 rounded-[25px] overflow-hidden shadow-sm">
                                                <button
                                                    onClick={() => toggleModulo(m.modulo)}
                                                    className={`w-full flex items-center justify-between p-6 transition-colors ${isOpen ? 'bg-gray-100' : 'bg-gray-50 hover:bg-gray-100'}`}
                                                >
                                                    <span className="font-black text-[#022249] text-left uppercase text-sm md:text-base">
                                                        MÓDULO {m.modulo}: {m.titulo}
                                                    </span>
                                                    {isOpen ? <ChevronUp className="text-[#d7af58]" /> : <ChevronDown />}
                                                </button>

                                                <AnimatePresence>
                                                    {isOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="p-8 bg-white space-y-4 border-t border-gray-100">
                                                                {m.temas.map((tema, i) => (
                                                                    <div key={i} className="flex items-start gap-3 text-gray-600 text-sm md:text-base leading-snug">
                                                                        <CheckCircle2 className="text-[#d7af58] shrink-0 mt-1" size={16} />
                                                                        {tema}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/3">
                            <div className="sticky top-32 bg-white border border-gray-100 rounded-[40px] p-8 shadow-2xl space-y-8">
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Inversión (Pago Único)</p>
                                    <p className="text-5xl font-black text-[#022249]">
                                        <span className="text-2xl font-bold mr-1">$</span>
                                        {curso.infoGeneral.precio}
                                    </p>
                                </div>

                                <button
                                    onClick={handleMatricula}
                                    className="w-full bg-[#022249] text-white py-5 rounded-full font-black text-lg uppercase tracking-tighter hover:bg-[#d7af58] transition-all active:scale-95 shadow-xl"
                                >
                                    Matricularse ahora
                                </button>

                                <div className="space-y-4 pt-6 border-t border-gray-100">
                                    <p className="font-bold text-[#022249] text-sm uppercase">El curso incluye:</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                                            <CheckCircle2 className="text-green-500" size={16} /> Acceso total a grabaciones
                                        </li>
                                        <li className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                                            <CheckCircle2 className="text-green-500" size={16} /> Doble certificación oficial
                                        </li>
                                        <li className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                                            <CheckCircle2 className="text-green-500" size={16} /> Material de estudio digital
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CursoIndividual;