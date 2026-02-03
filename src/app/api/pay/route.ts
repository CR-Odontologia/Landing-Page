import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { amount, cursoNombre } = body;

        const now = new Date();
        const vads_trans_date = now.getUTCFullYear().toString() +
            (now.getUTCMonth() + 1).toString().padStart(2, '0') +
            now.getUTCDate().toString().padStart(2, '0') +
            now.getUTCHours().toString().padStart(2, '0') +
            now.getUTCMinutes().toString().padStart(2, '0') +
            now.getUTCSeconds().toString().padStart(2, '0');

        const fields: any = {
            vads_action_mode: "INTERACTIVE",
            vads_amount: Math.round(amount * 100).toString(),
            vads_ctx_mode: "PRODUCTION",
            vads_currency: "840",
            vads_page_action: "PAYMENT",
            vads_payment_config: "SINGLE",
            vads_site_id: process.env.NEXT_PUBLIC_IZIPAY_SITE_ID,
            vads_trans_date: vads_trans_date,
            vads_trans_id: Math.floor(Math.random() * 899999 + 100000).toString(),
            vads_version: "V2",
            vads_cust_name: "Cliente CR Formación Especializada",
            vads_order_id: `PEDIDO-${Math.floor(Math.random() * 89999 + 10000)}`,
            vads_ext_info_nombre_curso: cursoNombre,
            vads_url_return: `${process.env.NEXT_PUBLIC_BASE_URL}/pago-finalizado`,
            vads_return_mode: "GET",
            vads_url_check: `${process.env.NEXT_PUBLIC_BASE_URL}/api/pay/webhook`,
        };

        const sortedKeys = Object.keys(fields).sort();
        let contentToSign = "";
        sortedKeys.forEach(key => {
            contentToSign += fields[key] + "+";
        });

        contentToSign += process.env.IZIPAY_HMAC_KEY;

        const signature = crypto
            .createHmac('sha256', process.env.IZIPAY_HMAC_KEY!)
            .update(contentToSign)
            .digest('base64');

        return NextResponse.json({ ...fields, signature });

    } catch (error) {
        console.error("Error en Pay Route:", error);
        return NextResponse.json({ error: "Error al generar firma" }, { status: 500 });
    }
}