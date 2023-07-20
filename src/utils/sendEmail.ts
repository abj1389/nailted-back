import nodemailer, { SentMessageInfo } from "nodemailer";
import puppeteer from "puppeteer";

export const generatePdf = async ({ url }: { url: string }): Promise<Buffer> => {
  const browser = await puppeteer.launch({
    headless: "new",
    ignoreHTTPSErrors: true,
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: true,
    },
  });

  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle0",
  });
  await page.emulateMediaType("screen");
  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0.5cm", top: "2cm", right: "0.5cm", bottom: "2cm" },
  });
  await browser.close();
  return pdf;
};

export default generatePdf;
interface DataResults {
  globalScore: number;
  categoryScore: {
    category: {
      name: string;
    };
    score: number;
  }[];
}

const transporter = nodemailer.createTransport({
  host: "mail.fernandomdev.com",
  port: 465,
  secure: true,
  auth: {
    user: "pruebas@fernandomdev.com",
    pass: "Fbh{^{(IytEf",
  },
});

const generateProgressCirclesHTML = (categoryScore: any): string => {
  return categoryScore.map((category: any) => generateSingleProgressCircle(category.score)).join("");
};

const generateSingleProgressCircle = (score: string): string => {
  return `
    <div role="progressbar" aria-valuenow="${score}" aria-valuemin="0" aria-valuemax="100" style="--value:${score}"></div>
  `;
};

export const sendResultsMail = async (email: string, dataResults: DataResults): Promise<void> => {
  console.log(dataResults);
  const pdf = await generatePdf({ url: "http://localhost:4000/#/pdf" });
  const mailOptions = {
    from: "pruebas@fernandomdev.com",
    to: email,
    subject: "Te mostramos a continuacion los resultados de tu formulario.",
    html: `

    <style media="screen">
    @property --pgPercentage {
      syntax: '<number>';
      inherits: false;
      initial-value: 0;
    }
    
    div[role="progressbar"] {
      --size: 12rem;
      --fg: #369;
      --bg: #def;
      --pgPercentage: var(--value);
      animation: growProgressBar 3s 1 forwards;
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: 
        radial-gradient(closest-side, white 80%, transparent 0 99.9%, white 0),
        conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0)
        ;
      font-family: Helvetica, Arial, sans-serif;
      font-size: calc(var(--size) / 5);
      color: var(--fg);
    }
    
    div[role="progressbar"]::before {
      counter-reset: percentage var(--value);
      content: counter(percentage) '%';
    }
    </style>
    

      <h1>Hola</h1>
      <h2>Aquí tienes los resultados de tu test:</h2>
      <h3>Tu puntuación global es:</h3>
      <h3>${Math.round(dataResults.globalScore)}%</h3>
      <h3>${generateProgressCirclesHTML(dataResults.categoryScore)}</h3>
      <h4>Gracias por contestar nuestro formulario</h4>
      <br>
      <h3 style="font-style:italic">Saludos del equiopo de Nailted</h3>
    `,
    attachments: [
      {
        filename: "resultado.pdf",
        content: pdf,
      },
    ],
  };

  transporter.sendMail(mailOptions, (error: Error | null, info: SentMessageInfo) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Correo electrónico enviado");
    }
  });
};
