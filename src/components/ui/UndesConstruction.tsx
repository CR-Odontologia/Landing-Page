"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Timer, ArrowLeft, Bell } from "lucide-react";

interface Props {
    sectionName: string;
    availableDate?: string;
}

const UnderConstruction = ({ sectionName, availableDate }: Props) => {
    return (
        <section className="min-h-[90vh] flex items-center justify-center bg-white px-4">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
            <div className="max-w-3xl w-full text-center">

                <motion.div
                    initial={{ rotate: -10, scale: 0.9 }}
                    animate={{ rotate: 10, scale: 1.1 }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                    className="inline-block mb-8 text-[#d7af58]"
                >
                    <Timer size={80} strokeWidth={1.5} />
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-black text-[#022249] uppercase leading-tight mb-6">
                    {sectionName} <br />
                    <span className="text-[#d7af58]">Disponible próximamente</span>
                </h1>

                <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto mb-10">
                    Estamos trabajando para ofrecerte la mejor experiencia académica.
                    {availableDate && (
                        <span className="block mt-2 font-bold text-[#022249]">
                            Lanzamiento estimado: {availableDate}
                        </span>
                    )}
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <Link
                        href="/"
                        className="flex items-center gap-2 bg-[#022249] text-white px-10 py-4 rounded-full font-bold hover:bg-[#d7af58] transition-all shadow-xl active:scale-95"
                    >
                        <ArrowLeft size={20} />
                        Volver al inicio
                    </Link>

                    <Link
                        href="/contacto"
                        className="flex items-center gap-2 border-2 border-[#022249] text-[#022249] px-10 py-4 rounded-full font-bold hover:bg-[#022249] hover:text-white transition-all"
                    >
                        <Bell size={20} />
                        Solicitar información
                    </Link>
                </div>
            </div>
                </motion.div>
        </section>
    );
};

export default UnderConstruction;