"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactoPage() {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        celular: "",
        consulta: ""
    });

    // --- NUEVOS ESTADOS ---
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                // Limpiamos el formulario después de 2 segundos
                setTimeout(() => {
                    setFormData({ nombre: "", apellido: "", email: "", celular: "", consulta: "" });
                    setStatus("idle");
                }, 3000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <main className="pt-28 pb-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-[#022249] uppercase italic tracking-tighter">
                        Contacto
                    </h1>
                    <p className="text-gray-500 mt-4 text-lg">Estamos aquí para resolver todas tus dudas académicas y clínicas.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl relative overflow-hidden">

                        {/* Overlay de Éxito */}
                        {status === "success" && (
                            <div className="absolute inset-0 bg-white/90 z-10 flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-500">
                                <CheckCircle size={80} className="text-green-500 mb-4" />
                                <h3 className="text-2xl font-black text-[#022249] uppercase">¡Mensaje Enviado!</h3>
                                <p className="text-gray-600 mt-2">Gracias por contactarnos, te responderemos a la brevedad.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-[#022249] uppercase tracking-widest">Nombre</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.nombre}
                                        placeholder="Tu nombre"
                                        className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#d7af58]"
                                        onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-[#022249] uppercase tracking-widest">Apellido</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.apellido}
                                        placeholder="Tu apellido"
                                        className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#d7af58]"
                                        onChange={(e) => setFormData({...formData, apellido: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-[#022249] uppercase tracking-widest">Correo Electrónico</label>
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    placeholder="ejemplo@correo.com"
                                    className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#d7af58]"
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-[#022249] uppercase tracking-widest">Número de Celular</label>
                                <input
                                    required
                                    type="tel"
                                    value={formData.celular}
                                    placeholder="987 654 321"
                                    className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#d7af58]"
                                    onChange={(e) => setFormData({...formData, celular: e.target.value})}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-[#022249] uppercase tracking-widest">Tu Consulta</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.consulta}
                                    placeholder="¿En qué podemos ayudarte?"
                                    className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#d7af58]"
                                    onChange={(e) => setFormData({...formData, consulta: e.target.value})}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full bg-[#022249] text-white py-5 rounded-full font-black text-xl uppercase tracking-tighter hover:bg-[#d7af58] transition-all flex items-center justify-center gap-3 disabled:bg-gray-400"
                            >
                                <Send size={24} />
                                {status === "loading" ? "Enviando..." : "Enviar mensaje"}
                            </button>

                            {status === "error" && (
                                <p className="text-red-500 text-sm font-bold text-center">Hubo un error al enviar. Inténtalo de nuevo.</p>
                            )}
                        </form>
                    </div>

                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-[#022249] p-6 rounded-3xl text-white">
                                <Phone className="text-[#d7af58] mb-4" size={28} />
                                <h4 className="font-bold">Llámanos</h4>
                                <p className="text-sm opacity-80">+51 982 897 557</p>
                            </div>
                            <div className="bg-white p-6 rounded-3xl shadow-md border-b-4 border-[#d7af58]">
                                <Clock className="text-[#022249] mb-4" size={28} />
                                <h4 className="font-bold text-[#022249]">Horario</h4>
                                <p className="text-sm text-gray-500">Lun - Sáb: 9am - 7pm</p>
                            </div>
                        </div>

                        <div className="w-full h-[400px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d687.8395613481033!2d-76.98458336967126!3d-12.120428981589704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2spe!4v1770475964820!5m2!1ses-419!2spe"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}