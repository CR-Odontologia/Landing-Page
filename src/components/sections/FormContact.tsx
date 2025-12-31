"use client";

import React, { useState } from "react";
import Image from "next/image";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombres: "",
        email: "",
        dni: "",
        celular: "",
        programa: "ESPECIALIDADES",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const numeroWhatsApp = "51964419415"; // Tu número aquí
        const mensaje = `*Nuevo Registro - Landing Page*%0A*Nombres:* ${formData.nombres}%0A*DNI:* ${formData.dni}%0A*Email:* ${formData.email}%0A*Celular:* ${formData.celular}%0A*Programa:* ${formData.programa}`;
        window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, "_blank");
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    <div className="w-full lg:w-1/2 relative h-[500px] rounded-sm overflow-hidden shadow-sm">
                        <Image
                            src="/images/placeholder.webp"
                            alt="Alumnos certificados"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* COLUMNA DERECHA: El Formulario */}
                    <div className="w-full lg:w-1/2">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-black text-brand-dark leading-tight">
                                Tu futuro empieza aquí
                            </h2>
                            <p className="text-brand-blue font-bold text-xl uppercase tracking-tight">
                                te asesoramos
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Nombres */}
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-brand-dark uppercase tracking-wider">Nombres y Apellidos*</label>
                                    <input
                                        required
                                        name="nombres"
                                        placeholder="Nombres y apellidos"
                                        onChange={handleChange}
                                        className="w-full p-3 bg-white border border-brand-blue/30 rounded-xl focus:border-brand-blue outline-none text-sm"
                                    />
                                </div>
                                {/* Correo */}
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-brand-dark uppercase tracking-wider">Correo Electrónico*</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        placeholder="Ingresa correo"
                                        onChange={handleChange}
                                        className="w-full p-3 bg-white border border-brand-blue/30 rounded-xl focus:border-brand-blue outline-none text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* DNI */}
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-brand-dark uppercase tracking-wider">N° de Documento*</label>
                                    <input
                                        required
                                        name="dni"
                                        placeholder="Ingresa tu D.N.I o C.E"
                                        onChange={handleChange}
                                        className="w-full p-3 bg-white border border-brand-blue/30 rounded-xl focus:border-brand-blue outline-none text-sm"
                                    />
                                </div>
                                {/* Celular */}
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-brand-dark uppercase tracking-wider">Celular*</label>
                                    <input
                                        required
                                        name="celular"
                                        placeholder="Ingresa celular"
                                        onChange={handleChange}
                                        className="w-full p-3 bg-white border border-brand-blue/30 rounded-xl focus:border-brand-blue outline-none text-sm"
                                    />
                                </div>
                            </div>

                            {/* Selector de Programas */}
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-brand-dark uppercase tracking-wider">Programas Académicos*</label>
                                <select
                                    name="programa"
                                    onChange={handleChange}
                                    className="w-full p-3 bg-white border border-brand-blue/30 rounded-xl focus:border-brand-blue outline-none text-sm appearance-none font-bold text-gray-500 uppercase tracking-widest"
                                >
                                    <option value="ESPECIALIDADES">ESPECIALIDADES</option>
                                    <option value="CURSOS">CURSOS</option>
                                </select>
                            </div>

                            {/* Checkbox de Políticas */}
                            <div className="flex items-start gap-3 py-2">
                                <input type="checkbox" required className="mt-1 accent-brand-dark" />
                                <p className="text-[9px] text-gray-600 leading-tight">
                                    Autorizo el tratamiento de mis datos personales para finalidades informativas y comerciales, conforme al enlace. Sin mi autorización, no podrán comunicarse conmigo.
                                </p>
                            </div>

                            {/* Botón ENVIAR (Azul Texto 022249) */}
                            <button
                                type="submit"
                                className="w-full bg-brand-gold hover:bg-[#d7af58] text-blue px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-md active:scale-95"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;