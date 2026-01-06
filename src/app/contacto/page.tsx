"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactoPage() {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        celular: "",
        consulta: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const numeroWA = "51982897557";
        const texto = `*Nueva Consulta Web*%0A*Nombre:* ${formData.nombre} ${formData.apellido}%0A*Correo:* ${formData.email}%0A*Celular:* ${formData.celular}%0A*Consulta:* ${formData.consulta}`;
        window.open(`https://wa.me/${numeroWA}?text=${texto}`, "_blank");
    };

    return (
        <main className="pt-28 pb-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-[#022249] uppercase">Contacto</h1>
                    <p className="text-gray-500 mt-4 text-lg">Estamos aquí para resolver todas tus dudas académicas y clínicas.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-[#022249] uppercase tracking-widest">Nombre</label>
                                    <input required type="text" placeholder="Tu nombre" className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#d7af58]"
                                           onChange={(e) => setFormData({...formData, nombre: e.target.value})}/>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-[#022249] uppercase tracking-widest">Apellido</label>
                                    <input required type="text" placeholder="Tu apellido" className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#d7af58]"
                                           onChange={(e) => setFormData({...formData, apellido: e.target.value})}/>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-[#022249] uppercase tracking-widest">Correo Electrónico</label>
                                <input required type="email" placeholder="ejemplo@correo.com" className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#d7af58]"
                                       onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-[#022249] uppercase tracking-widest">Número de Celular</label>
                                <input required type="tel" placeholder="987 654 321" className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#d7af58]"
                                       onChange={(e) => setFormData({...formData, celular: e.target.value})}/>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-[#022249] uppercase tracking-widest">Tu Consulta</label>
                                <textarea required rows={4} placeholder="¿En qué podemos ayudarte?" className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#d7af58]"
                                          onChange={(e) => setFormData({...formData, consulta: e.target.value})}></textarea>
                            </div>

                            <button type="submit" className="w-full bg-[#022249] text-white py-5 rounded-full font-black text-xl uppercase tracking-tighter hover:bg-[#d7af58] transition-all flex items-center justify-center gap-3">
                                <Send size={24} />
                                Enviar por WhatsApp
                            </button>
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
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243.94028401437578!2d-76.9889402!3d-11.9714179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c524a18b6a35%3A0x1fd4d55b47b572c6!2sLos%20Sociologos!5e0!3m2!1ses-419!2spe!4v1767664248362!5m2!1ses-419!2spe"
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