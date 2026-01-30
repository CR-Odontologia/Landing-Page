"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

import  cursosData  from "@/data/cursos";

const CursosPage = () => {
    return (
        <main className="pt-28 pb-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-[#022249] uppercase tracking-tighter">
                        Nuestros <span className="text-[#d7af58]">Cursos</span>
                    </h1>
                    <p className="text-gray-500 mt-4 text-lg max-w-2xl font-medium">
                        Especialízate con formación de alto nivel. Programas intensivos diseñados para la práctica clínica real.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cursosData.map((curso) => (
                        <Link
                            key={curso.id}
                            href={`/cursos/${curso.slug}`}
                            className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100"
                        >
                            <div className="relative h-60 w-full overflow-hidden">
                                <Image
                                    src={`/images/courses/${curso.slug}-thumbnail.jpg`}
                                    alt={curso.titulo}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute top-5 left-5 bg-[#022249] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                                    Matrículas Abiertas
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-xl md:text-2xl font-black text-[#022249] mb-6 leading-tight min-h-[80px]">
                                    {curso.titulo}
                                </h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-gray-600 text-sm font-semibold">
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <Clock size={16} className="text-[#d7af58]" />
                                        </div>
                                        <span>Duración: {curso.infoGeneral.duracion}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600 text-sm font-semibold">
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <Calendar size={16} className="text-[#d7af58]" />
                                        </div>
                                        <span>{curso.infoGeneral.inicio} - {curso.infoGeneral.fin}</span>
                                    </div>
                                </div>

                                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Desde</p>
                                        <div className="flex items-baseline gap-2">

                                            <p className="text-sm font-bold text-gray-400 line-through">
                                                ${curso.infoGeneral.precio.original}
                                            </p>

                                            <p className="text-4xl font-black text-[#d7af58]">
                                                <span className="text-lg font-bold mr-1">$</span>
                                                {curso.infoGeneral.precio.ofertaBase}
                                            </p>
                                        </div>
                                        <p className="text-[9px] text-[#022249] font-bold uppercase tracking-tighter mt-1 opacity-70">
                                            *Precio sin certificación FACOP
                                        </p>
                                    </div>

                                    <div className="w-14 h-14 bg-[#022249] rounded-2xl flex items-center justify-center text-white group-hover:bg-[#d7af58] transition-all duration-500 shadow-lg">
                                        <ArrowRight size={28} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default CursosPage;