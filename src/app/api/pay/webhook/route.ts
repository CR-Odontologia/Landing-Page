import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { Resend } from 'resend';

const resend = new Resend(process.env.PAYMENT_API_KEY);

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const fields: any = {};
        formData.forEach((value, key) => {
            fields[key] = value;
        });

        const {
            vads_trans_status,
            vads_cust_email,
            vads_order_id,
            signature,
            vads_ext_info_nombre_curso
        } = fields;

        const sortedKeys = Object.keys(fields)
            .filter(key => key.startsWith('vads_'))
            .sort();

        let contentToSign = "";
        sortedKeys.forEach(key => {
            contentToSign += fields[key] + "+";
        });
        contentToSign += process.env.IZIPAY_HMAC_KEY;

        const serverSignature = crypto
            .createHmac('sha256', process.env.IZIPAY_HMAC_KEY!)
            .update(contentToSign)
            .digest('base64');

        if (signature !== serverSignature) {
            return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
        }

        if (vads_trans_status === "AUTHORISED") {
            const nombreMostrar = vads_ext_info_nombre_curso || vads_order_id;

            await resend.emails.send({
                from: 'CR Odontología <admision@crodontologia.com>',
                to: [vads_cust_email],
                subject: `¡Bienvenido! - Matrícula Confirmada: ${nombreMostrar}`,
                html: `
                    <div style="font-family: sans-serif; color: #022249; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 30px; border-radius: 20px;">
                        <h1 style="color: #d7af58; margin-bottom: 20px;">¡Felicidades por dar este gran paso!</h1>
                        <p style="font-size: 16px;">Hola,</p>
                        <p style="font-size: 16px;">Hemos recibido correctamente tu pago para la especialidad:</p>
                        
                        <div style="background: #f8f9fa; border-left: 4px solid #d7af58; padding: 15px; margin: 20px 0;">
                            <strong style="font-size: 18px; color: #022249;">${nombreMostrar}</strong>
                        </div>

                        <p style="font-size: 14px; line-height: 1.6;">Estamos muy felices de tenerte en nuestra comunidad académica. En un plazo máximo de <strong>24 horas hábiles</strong>, nuestro equipo te enviará un segundo correo con tus credenciales personalizadas para acceder a nuestra plataforma de aprendizaje.</p>
                        
                        <div style="margin-top: 30px; border-top: 1px solid #eee; pt-20">
                            <p style="font-size: 12px; color: #666;">ID de Transacción: ${vads_order_id}</p>
                            <p style="font-size: 12px; color: #666;">Si tienes alguna duda inmediata, puedes escribirnos a informes@crodontologia.com o responder a este correo.</p>
                        </div>
                    </div>
                `
            });

            await resend.emails.send({
                from: 'Sistema Pagos <pagos@crodontologia.com>',
                to: ['informes@crodontologia.com'],
                subject: `NUEVO ALUMNO: ${nombreMostrar}`,
                html: `
                    <p>Se ha recibido un pago exitoso:</p>
                    <ul>
                        <li><strong>Alumno:</strong> ${vads_cust_email}</li>
                        <li><strong>Curso:</strong> ${nombreMostrar}</li>
                        <li><strong>ID Pedido:</strong> ${vads_order_id}</li>
                    </ul>
                `
            });
        }

        return NextResponse.json({ message: "OK" }, { status: 200 });

    } catch (error) {
        console.error("Webhook Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}