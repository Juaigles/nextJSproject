import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const dev_email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export async function POST(request) {
  const data = await request.json();
  const { nombre, email, mensaje } = data;
  console.log("Datos del formulario:", nombre, email, mensaje);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: dev_email,
      pass: pass,
    },
  });

  const mailOptions = {
    from: email,
    to: "devkiookai@gmail.com",
    subject: `Nuevo mensaje de ${nombre}`,
    text: `Mensaje:\n\n${mensaje}\n\nDe: ${nombre} ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new NextResponse("Correo enviado", { status: 200 });
  } catch (err) {
    return new NextResponse("Error al enviar el correo", { status: 500 });
  }
}
