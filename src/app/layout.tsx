import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    title: "CR Odontologia",
    description: "Servicios odontológicos especializados y formación académica profesional.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es"> {}
        <body
            className={`${montserrat.variable} font-sans antialiased text-brand-dark`}
        >
        {children}
        </body>
        </html>
    );
}