"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    { id: 1, src: "/images/placeholder.webp", title: "Example", highlight: "Curso 1" },
    { id: 2, src: "/images/placeholder.webp", title: "Example", highlight: "Curso 2" },
];

const Hero = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return (
        <section className="relative w-full">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {slides.map((slide) => (
                        <div className="relative flex-[0_0_100%] min-w-0 h-[500px] md:h-[600px]" key={slide.id}>
                            <Image
                                src={slide.src}
                                alt={slide.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-brand-blue/40 mix-blend-multiply" />

                            <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-32 text-white">
                                <p className="text-xl md:text-2xl font-light tracking-widest uppercase">
                                    {slide.title}
                                </p>
                                <h1 className="text-6xl md:text-8xl font-black leading-none italic">
                                    {slide.highlight}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={scrollPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 border border-white rounded-full text-white hover:bg-white/20 transition-all">
                <ChevronLeft size={30} />
            </button>
            <button onClick={scrollNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 border border-white rounded-full text-white hover:bg-white/20 transition-all">
                <ChevronRight size={30} />
            </button>

            <div className="w-full bg-[#5a5a5a] py-6 text-center">
                <h2 className="text-white text-lg md:text-2xl font-bold tracking-[0.2em] uppercase">
                    Con los mejores especialistas
                </h2>
            </div>
        </section>
    );
};

export default Hero;