import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    // Vérification
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Tous les champs sont obligatoires.",
        },
        { status: 400 }
      );
    }

    // Vérification simple de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Adresse email invalide.",
        },
        { status: 400 }
      );
    }

    // Connexion Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Envoi du mail
    await transporter.sendMail({
      from: `"Portfolio Addy Quenum" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Nouveau message — ${subject}`,

      text: `
NOUVEAU MESSAGE DEPUIS TON PORTFOLIO

Nom : ${name}
Email : ${email}
Sujet : ${subject}

Message :
${message}
      `,

      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          max-width: 650px;
          margin: 0 auto;
          padding: 30px;
          color: #161616;
        ">

          <h1 style="
            font-size: 28px;
            margin-bottom: 30px;
          ">
            Nouveau message
          </h1>

          <div style="
            background: #f5f5f5;
            border-radius: 16px;
            padding: 25px;
          ">

            <p>
              <strong>Nom</strong><br />
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>Email</strong><br />
              ${escapeHtml(email)}
            </p>

            <p>
              <strong>Sujet</strong><br />
              ${escapeHtml(subject)}
            </p>

            <p>
              <strong>Message</strong><br />
              ${escapeHtml(message).replace(/\n/g, "<br />")}
            </p>

          </div>

          <p style="
            margin-top: 25px;
            color: #666;
            font-size: 14px;
          ">
            Tu peux répondre directement à cet email.
          </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message envoyé.",
    });
  } catch (error) {
    console.error(
      "Erreur API contact :",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Impossible d'envoyer le message pour le moment.",
      },
      { status: 500 }
    );
  }
}

// Protection contre l'injection HTML
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}