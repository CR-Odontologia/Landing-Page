"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar, Clock, Laptop, BookOpen,
    CheckCircle2, ChevronDown, ChevronUp, Award, Info, Lock
} from "lucide-react";

import cursosData from "@/data/cursos";
import Image from "next/image";

const CursoIndividual = () => {
    const params = useParams();
    const router = useRouter();

    const [openModulos, setOpenModulos] = useState<number[]>([0]);
    const [loading, setLoading] = useState(false);

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

    const handleMatricula = async () => {
        if (curso.status === "CLOSE") return;

        setLoading(true);
        try {
            const amount = incluyeFacop
                ? curso.infoGeneral.precio.ofertaFacop
                : curso.infoGeneral.precio.ofertaBase;

            const res = await fetch('/api/pay', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: amount,
                    cursoNombre: curso.titulo
                })
            });

            if (!res.ok) throw new Error("Error al obtener la firma de pago");

            const data = await res.json();
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = 'https://secure.micuentaweb.pe/vads-payment/';

            Object.keys(data).forEach(key => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = data[key];
                form.appendChild(input);
            });

            document.body.appendChild(form);
            form.submit();

        } catch (error) {
            console.error("Error en el proceso de matrícula:", error);
            alert("Hubo un problema al conectar con la pasarela de pagos.");
        } finally {
            setLoading(false);
        }
    };

    const [incluyeFacop, setIncluyeFacop] = useState(false);
    const precioAMostrar = incluyeFacop
        ? curso.infoGeneral.precio.ofertaFacop
        : curso.infoGeneral.precio.ofertaBase;

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <main className="pt-24 bg-white min-h-screen">
            {/* Header del Curso */}
            <section className="relative py-16 md:py-24 text-white overflow-hidden bg-[#022249]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={isMobile ? `/images/courses/${curso.slug}-movil.jpg` : `/images/courses/${curso.slug}.jpg`}
                        alt={curso.titulo}
                        fill
                        className="object-fill opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#022249] via-[#022249]/20 to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className={`inline-block px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 ${curso.status === 'OPEN' ? 'bg-[#d7af58] text-[#022249]' : 'bg-red-600 text-white'}`}>
                            {curso.status === 'OPEN' ? curso.tag : "Inscripciones Finalizadas"}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8 uppercase italic tracking-tighter">
                            {curso.titulo}
                        </h1>
                        {/* Badge de certificación solo si está abierto o es relevante */}
                        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 inline-flex">
                            <Award className="text-[#d7af58]" size={32} />
                            <div>
                                <p className="text-xs font-bold uppercase tracking-tight text-[#d7af58]">Doble Certificación</p>
                                <p className="text-sm font-medium">CR Formación Especializada & FACOP (Brasil)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Contenido Izquierdo: Info y Plan de Estudios */}
                        <div className="w-full lg:w-2/3 space-y-16">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {/* ... (Misma información de Calendar, Clock, Laptop, Horario) */}
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
                                    <div className="flex items-center gap-2 font-bold text-[#022249] text-xs leading-tight">
                                        {curso.infoGeneral.horario}
                                    </div>
                                </div>
                            </div>

                            {/* Plan de estudios (Se mantiene igual) */}
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
                                                            className="overflow-hidden bg-white p-8 space-y-4 border-t border-gray-100"
                                                        >
                                                            {m.temas.map((tema, i) => (
                                                                <div key={i} className="flex items-start gap-3 text-gray-600 text-sm md:text-base leading-snug">
                                                                    <CheckCircle2 className="text-[#d7af58] shrink-0 mt-1" size={16} />
                                                                    {tema}
                                                                </div>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* SIDEBAR DE MATRÍCULA (AQUÍ ESTÁ EL CAMBIO) */}
                        <div className="w-full lg:w-1/3">
                            <div className={`sticky top-32 bg-white border border-gray-100 rounded-[40px] p-8 shadow-2xl space-y-8 ${curso.status === 'CLOSE' ? 'opacity-90' : ''}`}>

                                {curso.status === "OPEN" ? (
                                    <>
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Inversión (Pago Único)</p>
                                            <div className="flex items-baseline gap-3">
                                                <p className="text-xl font-bold text-gray-300 line-through">${curso.infoGeneral.precio.original}</p>
                                                <p className="text-5xl font-black text-[#022249]">
                                                    <span className="text-2xl font-bold mr-1">$</span>
                                                    {precioAMostrar}
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className={`p-4 rounded-3xl border-2 transition-all cursor-pointer ${incluyeFacop ? "border-[#d7af58] bg-[#d7af58]/5" : "border-gray-100 bg-gray-50"}`}
                                            onClick={() => setIncluyeFacop(!incluyeFacop)}
                                        >
                                            <div className="flex items-center gap-3">
                                                <input type="checkbox" checked={incluyeFacop} readOnly className="w-5 h-5 rounded border-gray-300 text-[#022249]" />
                                                <div>
                                                    <p className="text-[11px] font-black text-[#022249] uppercase leading-tight">Incluir Certificación FACOP</p>
                                                    <p className="text-[10px] text-gray-500 font-medium">Doble certificación internacional (Brasil)</p>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={handleMatricula}
                                            disabled={loading}
                                            className="w-full bg-[#022249] text-white py-5 rounded-full font-black text-lg uppercase tracking-tighter hover:bg-[#d7af58] transition-all active:scale-95 shadow-xl disabled:opacity-50 flex items-center justify-center gap-2"
                                        >
                                            {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : "Matricularse ahora"}
                                        </button>
                                    </>
                                ) : (
                                    <div className="text-center py-6 space-y-6">
                                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                                            <Lock size={40} className="text-gray-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-[#022249] uppercase italic tracking-tighter">Inscripciones Cerradas</h3>
                                            <p className="text-gray-500 text-sm mt-2 font-medium">
                                                Este curso ya no acepta nuevas matrículas. Mantente atento a nuestras redes para la próxima apertura.
                                            </p>
                                        </div>
                                        <button
                                            disabled
                                            className="w-full bg-gray-200 text-gray-400 py-5 rounded-full font-black text-lg uppercase cursor-not-allowed"
                                        >
                                            Cerrado
                                        </button>
                                    </div>
                                )}

                                <div className="space-y-4 pt-6 border-t border-gray-100">
                                    <p className="font-bold text-[#022249] text-sm uppercase">El curso incluye:</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                                            <CheckCircle2 className="text-green-500" size={16} /> Acceso total a grabaciones e iSpring LMS
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