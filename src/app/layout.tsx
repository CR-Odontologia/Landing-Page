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
    description: "Servicios odontológicos especializados y formación académica profesional.",
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