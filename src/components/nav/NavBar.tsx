"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Instagram, Facebook, MessageCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { title: "CURSOS", href: "/cursos" },
        { title: "ESPECIALIZACIONES", href: "/especializaciones" },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white border-b border-gray-200 py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src="/images/logo.jpg"
                            alt="Logo Centro Odontológico"
                            width={150}
                            height={50}
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* 2. LINKS TO THE CENTER (Desktop) */}
                    <div className="hidden lg:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                className="text-brand-dark hover:text-brand-gold font-bold text-sm tracking-wider flex items-center gap-1 transition-all duration-300"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>

                    {/* 3. REDES Y BOTÓN A LA DERECHA (Escritorio) */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {/*  }
                        <div className="flex items-center space-x-2">
                            <Link href="#" className="p-1.5 bg-[#59a8a1] text-white rounded-sm hover:opacity-80 transition-opacity">
                                <Instagram size={18} />
                            </Link>
                            <Link href="#" className="p-1.5 bg-[#59a8a1] text-white rounded-sm hover:opacity-80 transition-opacity">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" className="p-1.5 bg-[#59a8a1] text-white rounded-sm hover:opacity-80 transition-opacity">
                                <MessageCircle size={18} />
                            </Link>
                        </div>

                        { Virtual Classroom button with GOLD */}
                        <Link
                            href="https://crodontologia.ispring.eu/"
                            className="bg-brand-gold hover:bg-[#d7af58] text-blue px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-md active:scale-95"
                        >
                            Aula Virtual
                        </Link>
                    </div>

                    {/* MOBILE MENU (Hamburger) */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark">
                            {isOpen ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE FOLDABLE DESIGN */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="lg:hidden bg-white absolute w-full left-0 border-b border-gray-200 shadow-xl"
                    >
                        <div className="px-6 py-8 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-lg font-bold text-brand-dark border-b border-gray-100 pb-2"
                                >
                                    {link.title}
                                </Link>
                            ))}
                            <Link
                                href="https://crodontologia.ispring.eu/"
                                className="bg-brand-gold hover:bg-[#d7af58] text-blue px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-md active:scale-95"
                            >
                                Acceder Aula Virtual
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;