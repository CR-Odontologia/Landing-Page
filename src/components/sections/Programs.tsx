"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Programs = () => {
    const categories = [
        {
            title: "CURSOS",
            subtitle: "CONOCE NUESTROS",
            image: "/images/placeholder.webp",
            href: "/cursos",
            description: "Actualización continua para el profesional moderno."
        },
        {
            title: "DIPLOMADOS",
            subtitle: "CONOCE NUESTRAS",
            image: "/images/placeholder.webp",
            href: "/diplomados",
            description: "Formación de especialidades con certificación internacional."
        }
    ];

    return (
        <section className="py-24 bg-[#f8f9fa]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tight">
                        Nuestros Programas <span className="text-brand-blue">Académicos</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-brand-gold mx-auto mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative h-[450px] overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                        >
                            <Link href={category.href}>
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <span className="text-brand-gold font-bold tracking-[0.3em] text-sm mb-2">
                    {category.subtitle}
                  </span>
                                    <h3 className="text-4xl font-black italic mb-4">
                                        {category.title}
                                    </h3>
                                    <p className="text-white/80 max-w-xs mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {category.description}
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-300">
                                            <ArrowUpRight size={24} />
                                        </div>
                                        <span className="font-bold text-sm tracking-widest uppercase">Ver más</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;