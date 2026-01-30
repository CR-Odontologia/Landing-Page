"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
    const consultas = [
        "¿Cuáles son las modalidades de ingreso?",
        "¿Cuáles son los requisitos para matricularme?",
        "¿Puedo pagar con tarjetas de crédito?",
    ];

    return (
        <section className="text-[#022249] py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    <div className="w-full md:w-1/2">
                        <div className="relative w-full h-[400px] md:h-[550px]">
                            <Image
                                src="/images/tienes-una-consulta.png"
                                alt="Contacto"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/1 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-black text-brand-dark leading-tight">
                            ¿Tienes alguna consulta?
                        </h2>

                        <p className="text-lg text-gray-700">
                            También puedes {" "}
                            <Link
                                href="/contacto"
                                className="text-[#d7af58] font-bold underline decoration-2 underline-offset-4"
                            >
                                escribirnos
                            </Link>
                            {" "} para orientarte personalmente.
                        </p>

                        <div className="space-y-4 pt-4">
                            {consultas.map((pregunta, index) => (
                                <p
                                    key={index}
                                    className="text-xl md:text-2xl text-gray-800 font-normal leading-snug"
                                >
                                    {pregunta}
                                </p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;