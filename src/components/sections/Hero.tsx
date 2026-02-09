"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight } from "lucide-react";

import cursosData from "@/data/cursos";

const Hero = () => {
    const cursosParaSlider = cursosData.filter(curso => curso.id !== 999);

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

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const currentSlide = cursosParaSlider[selectedIndex] || cursosParaSlider[0];

    return (
        <section className="relative w-full bg-white pt-[70px] md:pt-[80px] pb-32 md:pb-48">
            <div
                className={`relative w-full ${isMobile ? 'aspect-[1000/600]' : 'aspect-[1920/800]'}`}
            >
                <div className="overflow-hidden h-full w-full" ref={emblaRef}>
                    <div className="flex h-full">
                        {cursosParaSlider.map((curso) => (
                            <div className="relative flex-[0_0_100%] min-w-0 h-full bg-gray-50" key={curso.id}>
                                <Image
                                    src={isMobile ? `/images/courses/${curso.slug}-movil.jpg` : `/images/courses/${curso.slug}.jpg`}
                                    alt={curso.titulo}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                                <div className="absolute inset-0 bg-black/5" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute top-[75%] md:top-[70%] left-0 w-full z-40 pointer-events-none">
                    <div className="max-w-7xl mx-auto px-4 md:px-12">
                        <div className="pointer-events-auto max-w-sm md:max-w-md bg-white p-8 md:p-10 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500">

                            <span className="text-[#d7af58] font-bold text-xs uppercase tracking-[0.2em] block mb-4 border-l-4 border-[#d7af58] pl-3">
                                {currentSlide.tag}
                            </span>

                            <h2 className="text-[#022249] text-2xl md:text-3xl font-black leading-tight mb-5 italic uppercase tracking-tighter">
                                {currentSlide.titulo}
                            </h2>

                            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 line-clamp-3 font-medium">
                                Especialízate en este programa intensivo con doble certificación internacional.
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
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-32 md:mt-44 flex justify-end gap-3">
                {cursosParaSlider.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
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