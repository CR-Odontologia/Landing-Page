import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/nav/NavBar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Footer from "@/components/sections/Footer";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    title: "CR Formación Especializada",
    description: "En CR Formación Especializada te brindamos servicios odontológicos especializados y formación académica profesional. Comunicate con nosotros a través de informes@crodontologia.com o mediante Whatsapp 982897557. CR Odontologia.",
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    keywords: ["odontología", "diplomados", "postgrado", "Perú", "FACOP", "dentistas", "CR"],
    authors: [{ name: "CR Formación Especializada" }],
    openGraph: {
        title: "CR Formación Especializada | CR Odontologia",
        description: "Lleva tu carrera al siguiente nivel con nuestros diplomados.",
        url: "https://crodontologia.com",
        siteName: "CR Formación Especializada",
        locale: "es_PE",
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
        <body className={`${montserrat.variable} font-sans antialiased text-brand-dark`}>
        <Navbar/>
        {children}
        <WhatsAppButton/>
        <Footer/>
        </body>
        </html>
    );
}