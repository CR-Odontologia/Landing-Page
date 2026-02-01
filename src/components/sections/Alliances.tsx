"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const pastCourses = [
    { id: 1, title: "FACOP", src: "/images/alliances/facop.webp" },
    { id: 2, title: "PLUS DENTAL CARE", src: "/images/alliances/plus-dental-care.jpg" }
];

const Alliances = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "center", // Centramos para que si hay pocos se vean bien
        slidesToScroll: isMobile ? 1 : 2,
        loop: false,
        containScroll: "trimSnaps"
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
        emblaApi.on("reInit", onSelect);
        onSelect();
    }, [emblaApi, onSelect, isMobile]);

    return (
        <section className="py-12 bg-gray-50"> {/* Reduje el padding vertical de py-20 a py-12 */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Reduje max-w-7xl a max-w-5xl */}

                <h2 className="text-[#022249] text-2xl md:text-4xl font-black mb-8 tracking-tight text-center">
                    Nuestras Alianzas:
                </h2>

                <div className="overflow-hidden mb-8" ref={emblaRef}>
                    <div className="flex gap-4"> {/* Gap más pequeño */}
                        {pastCourses.map((course) => (
                            <div
                                key={course.id}
                                // Ahora en PC ocupa el 33% aprox (verás 3 logos) o mantén el 50% si prefieres
                                className="relative flex-[0_0_80%] md:flex-[0_0_calc(33.33%-16px)] min-w-0 group cursor-pointer"
                            >
                                <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 transition-all hover:shadow-md">
                                    {/* Contenedor de imagen más pequeño y bajo (aspect-[3/1]) */}
                                    <div className="relative h-20 md:h-24 w-full">
                                        <Image
                                            src={course.src}
                                            alt={course.title}
                                            fill
                                            className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                                            sizes="(max-width: 768px) 80vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots más discretos */}
                <div className="flex justify-center gap-2">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={`h-2 transition-all duration-300 rounded-full ${
                                index === selectedIndex
                                    ? "bg-[#022249] w-8"
                                    : "bg-gray-300 w-2 hover:bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Alliances;