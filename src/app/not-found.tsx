"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#d7af58]" />

            <div className="max-w-3xl w-full text-center relative">

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Search className="text-[#d7af58] mb-6 mx-auto" size={60} />
                        <h2 className="text-3xl md:text-5xl font-black text-[#022249] uppercase mb-4">
                            ¡Ups! Página no encontrada
                        </h2>
                        <p className="text-gray-500 text-lg md:text-xl mb-10 max-w-md mx-auto">
                            Lo sentimos, la ruta que buscas no existe o ha sido movida temporalmente.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/"
                                className="flex items-center gap-2 bg-[#022249] text-white px-8 py-4 rounded-full font-bold hover:bg-[#d7af58] transition-all shadow-lg group"
                            >
                                <Home size={20} />
                                Volver al Inicio
                            </Link>

                            <button
                                onClick={() => window.history.back()}
                                className="flex items-center gap-2 text-[#022249] font-bold hover:underline"
                            >
                                <ArrowLeft size={20} />
                                Regresar atrás
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 w-full h-2 bg-[#022249]" />
        </main>
    );
}