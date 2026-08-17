import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST || "smtp.hostinger.com";
const SMTP_PORT = Number(process.env.SMTP_PORT) || 465;
const SMTP_USER = process.env.SMTP_USER || "contato@agent-bcomm.space";
const SMTP_PASS = process.env.SMTP_PASS || "";
const TO_EMAIL = "contato@agent-bcomm.space";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nome, email, telefone, mensagem, data } = body;

  if (!nome || !email || !mensagem) {
    return NextResponse.json({ error: "Campos obrigatórios faltando" }, { status: 400 });
  }

  if (!SMTP_PASS) {
    return NextResponse.json({ error: "SMTP não configurado" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:24px;">
      <h2 style="color:#1a1a1a;margin-bottom:16px;">Nova mensagem de contato</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;color:#666;font-weight:600;width:120px;">Nome</td><td style="padding:8px 0;">${nome}</td></tr>
        <tr><td style="padding:8px 0;color:#666;font-weight:600;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px 0;color:#666;font-weight:600;">Telefone</td><td style="padding:8px 0;">${telefone}</td></tr>
        <tr><td style="padding:8px 0;color:#666;font-weight:600;">Data</td><td style="padding:8px 0;">${data}</td></tr>
      </table>
      <div style="margin-top:16px;padding:16px;background:#f5f5f5;border-radius:8px;">
        <p style="margin:0;color:#666;font-weight:600;">Mensagem:</p>
        <p style="margin:8px 0 0 0;">${mensagem}</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"${nome}" <${SMTP_USER}>`,
      replyTo: email,
      to: TO_EMAIL,
      subject: `Contato - ${nome}`,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Erro ao enviar email" }, { status: 500 });
  }
}
