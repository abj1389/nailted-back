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

export const sendResultsMail = async (recipient: string): Promise<void> => {
  // Configura los detalles del correo electrónico
  const mailOptions = {
    from: "pruebas@fernandomdev.com",
    to: recipient,
    subject: "Aquí tienes los resultados de tu test.",
    html: `
      <h1>Hola</h1>
      <p>Este es un ejemplo de correo electrónico con formato HTML.</p>
      <p>Puedes incluir etiquetas HTML como <strong>negrita</strong> o <em>cursiva</em>.</p>
      <p>También puedes incluir listas:</p>
      <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
      </ul>
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
