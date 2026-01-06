"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight } from "lucide-react";

import cursosData from "@/data/cursos";

const Hero = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    // Usamos directamente cursosData para obtener el slide actual
    const currentSlide = cursosData[selectedIndex];

    return (
        <section className="relative w-full bg-white pb-20 md:pb-32">
            <div className="relative h-[500px] md:h-[650px] w-full overflow-hidden" ref={emblaRef}>
                <div className="flex h-full">
                    {cursosData.map((curso) => (
                        <div className="relative flex-[0_0_100%] min-w-0 h-full" key={curso.id}>
                            <Image
                                src={`/images/placeholder.webp`}
                                alt={curso.titulo}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-black/10" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-[320px] md:top-[380px] left-0 w-full z-40 pointer-events-none">
                <div className="max-w-7xl mx-auto px-4 md:px-12">
                    <div className="pointer-events-auto max-w-sm md:max-w-md bg-white p-8 md:p-10 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

                        <span className="text-[#d7af58] font-bold text-xs uppercase tracking-[0.2em] block mb-4 border-l-4 border-[#d7af58] pl-3">
                            {currentSlide.tag}
                        </span>

                        <h2 className="text-[#d7af58] text-2xl md:text-3xl font-black leading-tight mb-5 italic uppercase tracking-tighter">
                            {currentSlide.titulo}
                        </h2>

                        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 line-clamp-3">
                            Especialízate en este programa intensivo de {currentSlide.infoGeneral.duracion} con doble certificación internacional.
                        </p>

                        <Link
                            href={`/cursos/${currentSlide.slug}`}
                            className="flex items-center w-full bg-[#022249] group rounded-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="bg-[#d7af58] p-4 md:p-5 group-hover:brightness-110 transition-all">
                                <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
                            </div>

                            <div className="flex-1 text-center pr-6 md:pr-10">
                                <span className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">
                                    ¡Conoce más a detalle!
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-12 flex justify-end gap-3">
                {cursosData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        aria-label={`Ir al slide ${index + 1}`}
                        className={`h-2.5 transition-all duration-500 rounded-full cursor-pointer outline-none ${
                            index === selectedIndex
                                ? "bg-[#022249] w-14 shadow-md"
                                : "bg-[#022249]/30 w-3 hover:bg-[#022249]/60"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;