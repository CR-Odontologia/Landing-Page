"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const pastCourses = [
    { id: 1, title: "CURSO IMPLANTES ABRIL", src: "/images/placeholder.webp" },
    { id: 2, title: "CURSO IMPLANTES MAYO", src: "/images/placeholder.webp" },
    { id: 3, title: "CURSO ESTÉTICA JUNIO", src: "/images/placeholder.webp" },
    { id: 4, title: "CURSO ENDODONCIA JULIO", src: "/images/placeholder.webp" },
    { id: 5, title: "CURSO CIRUGÍA AGOSTO", src: "/images/placeholder.webp" },
    { id: 6, title: "CURSO PRÓTESIS SEPTIEMBRE", src: "/images/placeholder.webp" },
];

const PastEditions = () => {
    // Configuramos Embla para que deslice de a 2 en pantallas grandes
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        slidesToScroll: 2,
        loop: false
    });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Título de la sección */}
                <h2 className="text-[#022249] text-3xl md:text-5xl font-black text-brand-dark mb-12 tracking-tight">
                    Nuestras Ediciones Pasadas:
                </h2>

                {/* Contenedor del Carrusel */}
                <div className="overflow-hidden mb-10" ref={emblaRef}>
                    <div className="flex gap-6">
                        {pastCourses.map((course) => (
                            <div
                                key={course.id}
                                // flex-[0_0_100%] en móvil, flex-[0_0_calc(50%-12px)] en escritorio para ver 2
                                className="relative flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] min-w-0 h-[350px] md:h-[450px] group cursor-pointer"
                            >
                                <div className="relative w-full h-full rounded-sm overflow-hidden bg-gray-900">
                                    <Image
                                        src={course.src}
                                        alt={course.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Texto inferior centrado
                                    <div className="absolute inset-x-0 bottom-10 flex justify-center">
                                        <h3 className="text-white text-xl md:text-3xl font-bold uppercase tracking-wide text-center px-4">
                                            {course.title}
                                        </h3>
                                    </div>
                                    */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Indicadores (Dots) de navegación */}
                <div className="flex justify-center gap-3">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={`h-3 transition-all duration-300 rounded-full ${
                                index === selectedIndex
                                    ? "bg-[#022249] w-14 shadow-md"
                                    : "bg-[#022249]/60 w-3 hover:bg-brand-blue/40"
                            }`}
                            aria-label={`Ver grupo de ediciones ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PastEditions;