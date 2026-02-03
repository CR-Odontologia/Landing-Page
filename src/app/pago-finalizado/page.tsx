"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

function ContenidoPagoFinalizado() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isValid, setIsValid] = useState<boolean | null>(null);

    useEffect(() => {
        const status = searchParams.get("vads_trans_status");

        if (status === "AUTHORISED") {
            setIsValid(true);
        } else {
            setIsValid(false);
            const timer = setTimeout(() => router.push("/"), 5000);
            return () => clearTimeout(timer);
        }
    }, [searchParams, router]);

    if (isValid === null) {
        return (
            <div className="min-h-screen flex items-center justify-center font-black uppercase italic text-[#022249]">
                Verificando transacción...
            </div>
        );
    }

    if (!isValid) {
        return (
            <main className="pt-40 pb-20 bg-white min-h-screen flex items-center justify-center text-center">
                <div className="max-w-md px-6">
                    <XCircle className="text-red-500 mx-auto mb-6" size={80} />
                    <h1 className="text-3xl font-black text-[#022249] uppercase italic mb-4">Acceso Denegado</h1>
                    <p className="text-gray-500 mb-8 font-medium">
                        No hemos detectado una transacción válida. Serás redirigido al inicio en unos segundos.
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main className="pt-40 pb-20 bg-white min-h-screen flex items-center justify-center text-center">
            <div className="max-w-md px-6">
                <CheckCircle className="text-green-500 mx-auto mb-6" size={80} />
                <h1 className="text-3xl font-black text-[#022249] uppercase italic mb-4">¡Matrícula Exitosa!</h1>
                <p className="text-gray-500 mb-8 font-medium">
                    Hemos procesado tu pago correctamente. En unos minutos recibirás un correo con tus credenciales de acceso al aula virtual.
                </p>
                <Link
                    href="/"
                    className="bg-[#022249] text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#d7af58] transition-all inline-block shadow-lg"
                >
                    Ir al Inicio
                </Link>
            </div>
        </main>
    );
}

export default function PagoFinalizado() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center font-black uppercase italic text-[#022249]">
                    Cargando...
                </div>
            }
        >
            <ContenidoPagoFinalizado />
        </Suspense>
    );
}