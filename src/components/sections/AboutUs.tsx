"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Award } from "lucide-react";

const AboutUs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-[#022249] font-black tracking-[0.3em] uppercase text-xs mb-4 border-l-4 border-[#d7af58] pl-4">
                                Conócenos
                            </h3>
                            <h2 className="text-4xl md:text-6xl font-black text-[#022249] leading-tight tracking-tighter uppercase italic">
                                Pasión por la salud <br />y la <span className="text-[#d7af58]">enseñanza</span>
                            </h2>
                            <p className="mt-8 text-lg text-gray-500 leading-relaxed font-medium">
                                Somos una institución dedicada a la capacitación y actualización profesional en el área de la salud, con especial énfasis en odontología y disciplinas afines.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-8 bg-gray-50 rounded-[30px] border-b-4 border-[#022249] shadow-sm hover:shadow-md transition-shadow">
                                <Target className="text-[#022249] mb-4" size={35} />
                                <h4 className="text-xl font-black text-[#022249] mb-2 uppercase italic">Misión</h4>
                                <p className="text-sm text-gray-500 leading-snug">Brindar programas internacionales de formación especializada en el área de la salud, con énfasis en odontología.</p>
                            </div>
                            <div className="p-8 bg-gray-50 rounded-[30px] border-b-4 border-[#d7af58] shadow-sm hover:shadow-md transition-shadow">
                                <Eye className="text-[#d7af58] mb-4" size={35} />
                                <h4 className="text-xl font-black text-[#022249] mb-2 uppercase italic">Visión</h4>
                                <p className="text-sm text-gray-500 leading-snug">Ser una institución líder en formación especializada en salud a nivel nacional e internacional.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-10 pt-6 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#022249]/10 flex items-center justify-center">
                                    <ShieldCheck className="text-[#022249]" size={22} />
                                </div>
                                <span className="font-black text-[#022249] text-xs uppercase tracking-widest">Ética</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#d7af58]/10 flex items-center justify-center">
                                    <Award className="text-[#d7af58]" size={22} />
                                </div>
                                <span className="font-black text-[#022249] text-xs uppercase tracking-widest">Excelencia</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[550px]"
                    >
                        <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#d7af58] rounded-[40px] -z-10 translate-x-4 translate-y-4" />

                        <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/placeholder.webp"
                                alt="Nuestro equipo de trabajo"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[#022249]/5" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;