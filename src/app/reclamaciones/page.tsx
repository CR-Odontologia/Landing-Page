"use client";

import React, { useState } from "react";
import { FileText, Send, ShieldCheck } from "lucide-react";

const LibroReclamaciones = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    // Estado para capturar todos los campos del formulario
    const [formData, setFormData] = useState({
        nombres: '',
        apellidoP: '',
        apellidoM: '',
        dni: '',
        email: '',
        departamento: '',
        provincia: '',
        distrito: '',
        direccion: '',
        tipoBien: '',
        descripcionBien: '',
        tipoIncidencia: 'reclamo',
        detalle: '',
        pedido: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch('/api/claim', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
                alert("Hubo un error al procesar el reclamo. Por favor, intente de nuevo.");
            }
        } catch (error) {
            setStatus("error");
            console.error("Error:", error);
        }
    };

    if (status === "success") {
        return (
            <main className="pt-40 pb-20 bg-white min-h-screen flex items-center justify-center">
                <div className="text-center max-w-2xl px-6">
                    <ShieldCheck className="text-[#022249] mx-auto mb-6" size={80} />
                    <h2 className="text-3xl font-black text-[#022249] uppercase tracking-tighter mb-4">Registro de Reclamación Finalizado</h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        Se ha procedido con el registro formal de su Hoja de Reclamación. Conforme a la normativa vigente, CR Odontología emitirá una respuesta oficial en un plazo no mayor a quince (15) días hábiles. Se ha remitido una copia de seguridad a su dirección de correo electrónico consignada.
                    </p>
                    <button onClick={() => window.location.href = '/'} className="bg-[#022249] text-white px-12 py-4 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-[#d7af58] transition-all">
                        Cerrar sesión de reclamo
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="pt-28 pb-20 bg-white min-h-screen">
            <header className="bg-gray-50 py-16 px-6 border-b border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-6">
                        <FileText className="text-[#022249]" size={32} />
                        <h1 className="text-3xl md:text-5xl font-black text-[#022249] uppercase tracking-tighter">
                            Libro de Reclamaciones Virtual
                        </h1>
                    </div>
                    <div className="space-y-2 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                        <p>Razón Social: CR Imagenologia Maxilofacial SAC</p>
                        <p>RUC: 20614291886</p>
                        <p>Establecimiento: JR. LOS SOCIOLOGOS MZA. E LOTE. 11 LIMA - LIMA - SAN JUAN DE LURIGANCHO</p>
                    </div>
                </div>
            </header>

            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-6 py-16 space-y-20">

                {/* SECCIÓN 1: DATOS PERSONALES */}
                <section className="space-y-8">
                    <div className="border-b-2 border-[#022249] pb-2">
                        <h2 className="text-lg font-black text-[#022249] uppercase tracking-widest">1. Identificación del Consumidor Reclamante</h2>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-gray-400">Nombres Completos</label>
                            <input name="nombres" value={formData.nombres} onChange={handleChange} required type="text" className="w-full p-4 bg-gray-50 border-b-2 border-transparent focus:border-[#d7af58] focus:bg-white outline-none text-sm transition-all" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-gray-400">Apellido Paterno</label>
                                <input name="apellidoP" value={formData.apellidoP} onChange={handleChange} required type="text" className="w-full p-4 bg-gray-50 border-b-2 border-transparent focus:border-[#d7af58] focus:bg-white outline-none text-sm transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-gray-400">Apellido Materno</label>
                                <input name="apellidoM" value={formData.apellidoM} onChange={handleChange} required type="text" className="w-full p-4 bg-gray-50 border-b-2 border-transparent focus:border-[#d7af58] focus:bg-white outline-none text-sm transition-all" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-gray-400">Documento de Identidad (DNI/CE/PAS)</label>
                                <input name="dni" value={formData.dni} onChange={handleChange} required type="text" className="w-full p-4 bg-gray-50 border-b-2 border-transparent focus:border-[#d7af58] focus:bg-white outline-none text-sm transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-gray-400">Correo Electrónico</label>
                                <input name="email" value={formData.email} onChange={handleChange} required type="email" className="w-full p-4 bg-gray-50 border-b-2 border-transparent focus:border-[#d7af58] focus:bg-white outline-none text-sm transition-all" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-gray-400">Departamento</label>
                                <input name="departamento" value={formData.departamento} onChange={handleChange} required type="text" className="w-full p-4 bg-gray-50 border-b-2 border-transparent focus:border-[#d7af58] focus:bg-white outline-none text-sm transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-gray-400">Provincia</label>
                                <input name="provincia" value={formData.provincia} onChange={handleChange} required type="text" className="w-full p-4 bg-gray-50 border-b-2 border-transparent focus:border-[#d7af58] focus:bg-white outline-none text-sm transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-gray-400">Distrito</label>
                                <input name="distrito" value={formData.distrito} onChange={handleChange} required type="text" className="w-full p-4 bg-gray-50 border-b-2 border-transparent focus:border-[#d7af58] focus:bg-white outline-none text-sm transition-all" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-gray-400">Dirección Domiciliaria</label>
                            <input name="direccion" value={formData.direccion} onChange={handleChange} required type="text" className="w-full p-4 bg-gray-50 border-b-2 border-transparent focus:border-[#d7af58] focus:bg-white outline-none text-sm transition-all" />
                        </div>
                    </div>
                </section>

                {/* SECCIÓN 2: BIEN CONTRATADO */}
                <section className="space-y-8">
                    <div className="border-b-2 border-[#022249] pb-2">
                        <h2 className="text-lg font-black text-[#022249] uppercase tracking-widest">2. Identificación del Bien o Servicio Contratado</h2>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase text-gray-400">Tipo de Bien</label>
                            <div className="flex gap-12 p-4 bg-gray-50 rounded-2xl">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input name="tipoBien" onChange={handleChange} checked={formData.tipoBien === "producto"} required type="radio" value="producto" className="w-4 h-4 accent-[#022249]" />
                                    <span className="text-xs font-black uppercase text-[#022249]">Producto</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input name="tipoBien" onChange={handleChange} checked={formData.tipoBien === "servicio"} required type="radio" value="servicio" className="w-4 h-4 accent-[#022249]" />
                                    <span className="text-xs font-black uppercase text-[#022249]">Servicio</span>
                                </label>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-gray-400">Descripción del Bien o Servicio</label>
                            <input name="descripcionBien" value={formData.descripcionBien} onChange={handleChange} required type="text" className="w-full p-4 bg-gray-50 border-b-2 border-transparent focus:border-[#d7af58] focus:bg-white outline-none text-sm transition-all" />
                        </div>
                    </div>
                </section>

                {/* SECCIÓN 3: DETALLE DE RECLAMACIÓN */}
                <section className="space-y-8">
                    <div className="border-b-2 border-[#022249] pb-2">
                        <h2 className="text-lg font-black text-[#022249] uppercase tracking-widest">3. Detalle de la Reclamación y Pedido</h2>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-12 p-4 bg-gray-50 rounded-2xl">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input name="tipoIncidencia" onChange={handleChange} checked={formData.tipoIncidencia === "reclamo"} type="radio" value="reclamo" className="w-4 h-4 accent-[#022249]" />
                                <span className="text-xs font-black uppercase text-[#022249]">Reclamo</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input name="tipoIncidencia" onChange={handleChange} checked={formData.tipoIncidencia === "queja"} type="radio" value="queja" className="w-4 h-4 accent-[#022249]" />
                                <span className="text-xs font-black uppercase text-[#022249]">Queja</span>
                            </label>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-gray-400">Detalle de la reclamación o queja</label>
                            <textarea name="detalle" value={formData.detalle} onChange={handleChange} required rows={5} className="w-full p-4 bg-gray-50 border-b-2 border-transparent focus:border-[#d7af58] focus:bg-white outline-none text-sm transition-all resize-none" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-gray-400">Pedido concreto del consumidor</label>
                            <textarea name="pedido" value={formData.pedido} onChange={handleChange} required rows={4} className="w-full p-4 bg-gray-50 border-b-2 border-transparent focus:border-[#d7af58] focus:bg-white outline-none text-sm transition-all resize-none" />
                        </div>
                    </div>
                </section>

                {/* CIERRE LEGAL */}
                <section className="pt-10 space-y-8">
                    <div className="p-6 bg-gray-50 rounded-3xl space-y-4">
                        <label className="flex gap-4 cursor-pointer">
                            <input required type="checkbox" className="mt-1 w-5 h-5 accent-[#022249]" />
                            <p className="text-[10px] text-gray-500 font-bold uppercase leading-relaxed">
                                Declaro bajo juramento que los datos expuestos en el presente formulario son verídicos. Asimismo, acepto la recepción de la respuesta a mi reclamación a través del correo electrónico consignado en la sección de datos personales.
                            </p>
                        </label>
                    </div>
                    <button disabled={status === "loading"} className="w-full bg-[#022249] text-white py-6 rounded-full font-black text-lg uppercase tracking-[0.2em] hover:bg-[#d7af58] transition-all shadow-2xl disabled:opacity-50">
                        {status === "loading" ? "Procesando Registro..." : "Registrar Hoja de Reclamación"}
                    </button>
                    <p className="text-center text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                        CR Formación Especializada - Gestión de Calidad Académica e Institucional
                    </p>
                </section>
            </form>
        </main>
    );
};

export default LibroReclamaciones;