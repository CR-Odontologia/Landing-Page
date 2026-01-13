import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.CLAIM_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            nombres, apellidoP, apellidoM, dni, email,
            departamento, provincia, distrito, direccion,
            tipoBien, descripcionBien, tipoIncidencia,
            detalle, pedido
        } = body;

        const correlativo = `REC-${new Date().toISOString().split('T')[0].replace(/-/g, '')}-${Math.floor(Math.random() * 1000)}`;

        const { data, error } = await resend.emails.send({
            from: 'CR Formación Especializada <informes@crodontologia.com>',
            to: ['informes@crodontologia.com', email],
            subject: `HOJA DE RECLAMACIÓN VIRTUAL - ${correlativo} - ${nombres} ${apellidoP}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
                    <h2 style="color: #022249; text-transform: uppercase;">Hoja de Reclamación N° ${correlativo}</h2>
                    <hr />
                    <h3>1. Datos del Consumidor</h3>
                    <p><strong>Nombre:</strong> ${nombres} ${apellidoP} ${apellidoM}</p>
                    <p><strong>DNI/CE:</strong> ${dni}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Ubicación:</strong> ${distrito}, ${provincia}, ${departamento}</p>
                    <p><strong>Dirección:</strong> ${direccion}</p>
                    
                    <h3>2. Detalle del Bien/Servicio</h3>
                    <p><strong>Tipo:</strong> ${tipoBien}</p>
                    <p><strong>Descripción:</strong> ${descripcionBien}</p>

                    <h3>3. Detalle de Reclamación</h3>
                    <p><strong>Tipo de Incidencia:</strong> ${tipoIncidencia.toUpperCase()}</p>
                    <p><strong>Detalle de Hechos:</strong> ${detalle}</p>
                    <p><strong>Pedido Concreto:</strong> ${pedido}</p>
                    
                    <hr />
                    <p style="font-size: 10px; color: #888;">Este correo es una constancia automática de recepción. CR Formación Especializada responderá en un máximo de 15 días hábiles.</p>
                </div>
            `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ message: "Reclamo registrado", correlativo });
    } catch (error) {
        return NextResponse.json({ error: "Error interno" }, { status: 500 });
    }
}