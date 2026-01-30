"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import docentesData from "@/data/docentes";

const StaffPage = () => {
    return (
        <main className="pt-32 pb-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <header className="mb-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-[#022249] uppercase italic tracking-tighter">
                        Nuestro <span className="text-[#d7af58]">Staff Docente</span>
                    </h1>
                    <p className="text-gray-500 mt-6 text-lg max-w-3xl mx-auto font-medium leading-relaxed">
                        Contamos con especialistas de trayectoria internacional, comprometidos con la excelencia académica y la formación clínica de vanguardia.
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {docentesData.map((docente, index) => (
                        <motion.div
                            key={docente.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={`/staff/${docente.slug}`}
                                className="group block relative bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                            >
                                <div className="relative h-[400px] w-full overflow-hidden">
                                    <Image
                                        src={`/images/staff/${docente.slug}.jpg`}
                                        alt={docente.nombre}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#022249]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                                        <span className="bg-[#d7af58] text-[#022249] px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">
                                            Ver Trayectoria
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 text-center bg-white relative">
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#d7af58] rounded-full group-hover:w-24 transition-all duration-500" />

                                    <h3 className="text-xl md:text-2xl font-black text-[#022249] uppercase italic tracking-tight leading-tight group-hover:text-[#d7af58] transition-colors">
                                        {docente.nombre}
                                    </h3>

                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">
                                        {docente.especialidad}
                                    </p>

                                    <p className="text-[#d7af58] text-[10px] font-bold uppercase tracking-[0.2em] mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                                        COP: {docente.cop} <span className="mx-2 text-gray-300">|</span> RNE: {docente.rne}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default StaffPage;