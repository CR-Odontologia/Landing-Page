"use client";

import React from "react";
import Link from "next/link"; // Usaremos el Link de Next directamente
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, ChevronRight } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        // Forzamos el color hexadecimal para asegurar que no se vea blanco
        <footer style={{ backgroundColor: '#022249' }} className="text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* 1. LOGO Y REDES */}
                    <div className="space-y-6">
                        <div className="inline-block bg-white p-2 rounded-lg">
                            <img
                                src="/images/logo.jpg"
                                alt="Logo"
                                className="h-10 w-auto object-contain"
                            />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Excelencia en servicios odontológicos y formación académica especializada.
                        </p>
                        <div className="flex items-center space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=61585492244061" className="w-9 h-9 rounded-full bg-[#2261a8] flex items-center justify-center hover:bg-[#d7af58] transition-colors" target="_blank">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.instagram.com/crformacion/" className="w-9 h-9 rounded-full bg-[#2261a8] flex items-center justify-center hover:bg-[#d7af58] transition-colors" target="_blank">
                                <Instagram size={18} />
                            </a>
                            <a href="https://wa.me/+51982897557" className="w-9 h-9 rounded-full bg-[#2261a8] flex items-center justify-center hover:bg-[#d7af58] transition-colors" target="_blank">
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>

                    {/* 2. NAVEGACIÓN */}



                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#d7af58]">Enlaces</h4>
                        <ul className="space-y-3">
                            {["Institucion", "Cursos", "Diplomados", "Asesorias"].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase()}`} className="text-gray-300 hover:text-white text-sm flex items-center gap-2">
                                        <ChevronRight size={14} />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. CONTACTO */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#d7af58]">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-300">
                                <MapPin size={18} className="text-[#d7af58] shrink-0" />
                                <span>JR. LOS SOCIOLOGOS MZA. E LOTE. 11 LIMA - LIMA - SAN JUAN DE LURIGANCHO</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <Phone size={18} className="text-[#d7af58]" />
                                <span>+51 982 897 557</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <Mail size={18} className="text-[#d7af58]" />
                                <span>informes@crodontologia.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* 4. LEGAL Y LIBRO */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#d7af58]">Legal</h4>
                        <div className="space-y-4">
                            <Link href="/politicas-de-privacidad" className="block text-sm text-gray-300 hover:text-white">Politicas de privacidad</Link>
                            <Link href="/terminos-y-condiciones" className="block text-sm text-gray-300 hover:text-white">Términos y condiciones</Link>
                            <Link href="/reclamaciones" className="block text-sm text-gray-300 hover:text-white">Libro de reclamaciones</Link>

                            {/* Libro de Reclamaciones con fondo blanco para que resalte
                            <div className="bg-white p-3 rounded-xl flex items-center gap-3 mt-4">
                                <img src="images/libro.png" alt="Libro" className="h-6" />
                                <span className="text-[#022249] text-[9px] font-black uppercase leading-tight">Libro de<br/>Reclamaciones</span>
                            </div>
                            */}
                        </div>
                    </div>

                </div>

                {/* COPYRIGHT */}
                <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
                    <p>© {currentYear} CR Formación Especializada. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;