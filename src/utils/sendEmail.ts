import nodemailer from "nodemailer";

// Configura el transporte
const transporter = nodemailer.createTransport({
  host: "mail.fernandomdev.com",
  port: 465,
  secure: true,
  auth: {
    user: "pruebas@fernandomdev.com",
    pass: "Fbh{^{(IytEf",
  },
});

export const sendResultsMail = async (email: string, dataResults: string): Promise<void> => {
  // Configura los detalles del correo electrónico
  const mailOptions = {
    from: "pruebas@fernandomdev.com",
    to: email,
    subject: "Aquí tienes los resultados de tu test.",
    html: `
      <h1>Hola</h1>
      <p>Aquí tienes los resultados de tu test:</p>
      <pre>${dataResults}</pre>
    `,
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Correo electrónico enviado: " + info.response);
    }
  });
};
