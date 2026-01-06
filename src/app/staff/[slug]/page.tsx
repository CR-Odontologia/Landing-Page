"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Award, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

import docentesData from "@/data/docentes";

const DocenteDetailPage = () => {
    const params = useParams();
    const router = useRouter();

    const docente = docentesData.find((d) => d.slug === params.slug);

    if (!docente) {
        return (
            <div className="h-screen flex items-center justify-center">
                <p className="text-[#022249] font-black uppercase tracking-tighter">Docente no encontrado</p>
            </div>
        );
    }

    return (
        <main className="pt-32 pb-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <Link
                    href="/staff"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-[#022249] font-black uppercase text-xs tracking-widest transition-colors mb-12 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Volver al Staff
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-5 lg:sticky lg:top-32"
                    >
                        <div className="relative h-[500px] md:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-50">
                            <Image
                                src={docente.foto}
                                alt={docente.nombre}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="bg-gray-100 p-6 rounded-3xl text-center border-b-4 border-[#d7af58]">
                                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Especialidad</p>
                                <p className="text-[#022249] font-black text-xl tracking-tighter">COP {docente.cop}</p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-3xl text-center border-b-4 border-[#d7af58]">
                                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Especialidad</p>
                                <p className="text-[#022249] font-black text-xl tracking-tighter">RNE {docente.rne}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <header className="mb-12">
                            <h1 className="text-4xl md:text-6xl font-black text-[#022249] uppercase italic tracking-tighter leading-none mb-6">
                                {docente.nombre}
                            </h1>
                            <div className="inline-block bg-[#d7af58] text-[#022249] px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">
                                {docente.especialidad}
                            </div>
                        </header>

                        <section className="space-y-10">
                            <div>
                                <h2 className="flex items-center gap-3 text-2xl font-black text-[#022249] uppercase italic mb-8 border-b border-gray-100 pb-4">
                                    <GraduationCap className="text-[#d7af58]" size={32} />
                                    Trascendencia Académica
                                </h2>

                                <div className="space-y-6">
                                    {docente.trascendencia.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + (index * 0.1) }}
                                            className="flex gap-4 group"
                                        >
                                            <div className="mt-2 h-2 w-2 rounded-full bg-[#d7af58] shrink-0 group-hover:scale-150 transition-transform" />
                                            <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                                {item}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </motion.div>

                </div>
            </div>
        </main>
    );
};

export default DocenteDetailPage;