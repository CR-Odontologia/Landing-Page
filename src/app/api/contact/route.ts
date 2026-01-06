import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { nombre, apellido, email, celular, consulta } = await req.json();

        const data = await resend.emails.send({
            from: 'Web CR Odontología <onboarding@resend.dev>',
            to: ['informes@crodontologia.com'],
            subject: `Consulta Web: ${nombre} ${apellido}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #022249; border-radius: 10px;">
          <h2 style="color: #022249;">Nueva consulta desde la web</h2>
          <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/${celular}">${celular}</a></p>
          <p><strong>Consulta:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${consulta}
          </div>
          <hr />
          <p style="font-size: 10px; color: #888;">Este mensaje fue enviado automáticamente desde el sitio web de CR Odontología.</p>
        </div>
      `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ error: 'Hubo un error al enviar el mensaje' }, { status: 500 });
    }
}