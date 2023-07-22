import puppeteer from "puppeteer";

interface DataResults {
  globalScore: number;
  categoryScore: {
    category: {
      name: string;
    };
    score: number;
  }[];
}

const generateDataResultsPdf = async (dataResults: DataResults): Promise<Buffer> => {
  //   const getScoreColor = (score: number): string => {
  //     let color: string = "grey";

  //     if (score <= 25) {
  //       color = "red";
  //     } else if (score > 25 && score <= 50) {
  //       color = "orange";
  //     } else if (score > 50 && score <= 75) {
  //       color = "darkkhaki";
  //     } else if (score > 75 && score <= 100) {
  //       color = "green";
  //     }

  //     return color;
  //   };

  const generateCategoryListPdf = (categoryScore: any): string => {
    return categoryScore.map((category: any) => generateSingleRowPdf(category.score, category.category.name)).join("");
  };

  const generateSingleRowPdf = (score: number, name: string): string => {
    return `
        
            <div class="bee-col bee-col-4 bee-col-w2">
                <div class="bee-block bee-block-1 bee-heading">
                  <p style="color: #0787c3; direction: ltr; font-family: 'Ubuntu', Tahoma, Verdana, Segoe, sans-serif; font-size: 24px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;font-size: 20px "><span class="tinyMce-placeholder">${name}</span></p>
                </div>
                <div class="bee-block bee-block-2 bee-html-block">
                  <div style="background-color: #199bf; color: white; border-radius: 100%; border:2px;border-color:black; width: 70px; padding: 20px; height: 70px; line-height: 60px; margin: 0px auto; font-weight: bold; font-size: 20px">${Math.ceil(score as any)}%</div>
                </div>
            </div>
      
      `;
  };
  const htmlContent = `
  <!DOCTYPE html>
  <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
  <style>
  body {
    color: #000;
    background-color: #bceffc;
    font-family: Ubuntu, Tahoma, Verdana, Segoe, sans-serif;
  }

  a {
    color: #8a3c90;
  }

  * {
    box-sizing: border-box;
  }

  body,
  p {
    margin: 0;
  }

  .bee-row {
    position: relative;
  }

  .bee-row-content {
    max-width: 1280px;
    margin: 0 auto;
  }

  .bee-row-content {
    display: flex;
    position: relative;
  }

  .bee-row-content .bee-col-w2 {
    flex-basis: 17%;
  }

  .bee-row-content .bee-col-w4 {
    flex-basis: 33%;
  }

  .bee-row-content .bee-col-w12 {
    flex-basis: 100%;
  }

  .bee-html-block {
    text-align: center;
  }

  .bee-icon {
    vertical-align: middle;
    display: inline-block;
  }

  .bee-icon .bee-content {
    align-items: center;
    display: flex;
  }

  .bee-icon .bee-icon-label-right a {
    text-decoration: none;
  }

  .bee-image img {
    width: 100%;
    display: block;
  }

  .bee-image {
    overflow: auto;
  }

  .bee-image .bee-center {
    margin: 20px auto 20px auto;
  }

  h1,
  h3 {
    margin: 0;
  }

  .bee-paragraph {
    overflow-wrap: anywhere;
  }

  .bee-row-1 {
    background-repeat: no-repeat;
  }

  .bee-row-1 .bee-row-content {
    color: #000;
    background-repeat: no-repeat;
  }

  .bee-row-1 .bee-col-1 {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .bee-row-1 .bee-col-1 .bee-block-1 {
    width: 100%;
    padding: 30px;
  }

  .bee-row-1 .bee-col-1 .bee-block-3 {
    text-align: center;
    width: 100%;
  }

  .bee-row-2 {
    background-repeat: no-repeat;
  }

  .bee-row-2 .bee-row-content {
    color: #000;
    background-repeat: no-repeat;
  }

  .bee-row-2 .bee-col-1 {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .bee-row-2 .bee-col-1 .bee-block-1 {
    text-align: center;
    width: 100%;
    padding: 10px;
  }

  .bee-row-3 {
    background-repeat: no-repeat;
  }

  .bee-row-3 .bee-row-content {
    color: #000;
    background-repeat: no-repeat;
    border-radius: 0;
  }

  .bee-row-3 .bee-col-1 {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .bee-row-3 .bee-col-1 .bee-block-1 {
    text-align: center;
    width: 100%;
    padding: 10px;
  }

  .bee-row-3 .bee-col-2 {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .bee-row-3 .bee-col-2 .bee-block-1 {
    text-align: center;
    width: 100%;
    padding: 10px;
  }

  .bee-row-3 .bee-col-3 {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .bee-row-3 .bee-col-3 .bee-block-1 {
    text-align: center;
    width: 100%;
    padding: 10px;
  }

  .bee-row-3 .bee-col-4 {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .bee-row-3 .bee-col-4 .bee-block-1 {
    text-align: center;
    width: 100%;
    padding: 10px;
  }

  .bee-row-3 .bee-col-5 {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .bee-row-3 .bee-col-5 .bee-block-1 {
    text-align: center;
    width: 100%;
    padding: 10px;
  }

  .bee-row-4 {
    background-repeat: no-repeat;
  }

  .bee-row-4 .bee-row-content {
    color: #000;
    background-repeat: no-repeat;
    border-radius: 0;
  }

  .bee-row-4 .bee-col-1 {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .bee-row-4 .bee-col-1 .bee-block-1 {
    padding-top: 60px;
  }

  .bee-row-4 .bee-col-2 {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .bee-row-4 .bee-col-2 .bee-block-1 {
    width: 100%;
  }

  .bee-row-4 .bee-col-3 {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .bee-row-4 .bee-col-3 .bee-block-1 {
    padding-top: 60px;
  }

  .bee-row-5 {
    background-repeat: no-repeat;
  }

  .bee-row-5 .bee-row-content {
    color: #000;
    background-repeat: no-repeat;
    border-radius: 0;
  }

  .bee-row-5 .bee-col-1 {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .bee-row-5 .bee-col-1 .bee-block-1 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .bee-row-5 .bee-col-2,
  .bee-row-5 .bee-col-3 {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .bee-row-5 .bee-col-3 .bee-block-1 {
    width: 100%;
  }

  .bee-row-6 {
    background-repeat: no-repeat;
  }

  .bee-row-6 .bee-row-content {
    color: #000;
    background-repeat: no-repeat;
    border-radius: 0;
  }

  .bee-row-6 .bee-col-1 {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .bee-row-6 .bee-col-1 .bee-block-1 {
    padding: 10px;
  }

  .bee-row-7 {
    background-repeat: no-repeat;
  }

  .bee-row-7 .bee-row-content {
    color: #000;
    background-repeat: no-repeat;
  }

  .bee-row-7 .bee-col-1 {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .bee-row-7 .bee-col-1 .bee-block-1 {
    color: #9d9d9d;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    font-family: inherit;
    font-size: 15px;
  }

  .bee-row-1 .bee-col-1 .bee-block-4 {
    color: #101112;
    direction: ltr;
    letter-spacing: 0;
    text-align: center;
    font-family: Ubuntu, Tahoma, Verdana, Segoe, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
  }

  .bee-row-1 .bee-col-1 .bee-block-4 a {
    color: #8a3c90;
  }

  .bee-row-1 .bee-col-1 .bee-block-4 p:not(:last-child) {
    margin-bottom: 16px;
  }

  .bee-row-1 .bee-col-1 .bee-block-2 {
    color: #bcbfc1;
    direction: ltr;
    letter-spacing: 0;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 120%;
  }

  .bee-row-1 .bee-col-1 .bee-block-2 a {
    color: #8a3c90;
  }

  .bee-row-1 .bee-col-1 .bee-block-2 p:not(:last-child) {
    margin-bottom: 16px;
  }

  .bee-row-4 .bee-col-3 .bee-block-1 {
    color: #101112;
    direction: ltr;
    letter-spacing: 0;
    text-align: center;
    font-size: 26px;
    font-weight: 400;
    line-height: 120%;
  }

  .bee-row-4 .bee-col-3 .bee-block-1 a {
    color: #8a3c90;
  }

  .bee-row-4 .bee-col-3 .bee-block-1 p:not(:last-child) {
    margin-bottom: 16px;
  }

  .bee-row-6 .bee-col-1 .bee-block-1 {
    color: #101112;
    direction: ltr;
    letter-spacing: 0;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
  }

  .bee-row-6 .bee-col-1 .bee-block-1 a {
    color: #8a3c90;
  }

  .bee-row-6 .bee-col-1 .bee-block-1 p:not(:last-child) {
    margin-bottom: 16px;
  }

  .bee-row-4 .bee-col-1 .bee-block-1 {
    color: #101112;
    direction: ltr;
    letter-spacing: 0;
    text-align: center;
    font-size: 26px;
    font-weight: 400;
    line-height: 120%;
  }

  .bee-row-4 .bee-col-1 .bee-block-1 a {
    color: #8a3c90;
  }

  .bee-row-4 .bee-col-1 .bee-block-1 p:not(:last-child) {
    margin-bottom: 16px;
  }

  .bee-row-5 .bee-col-1 .bee-block-1 {
    color: #101112;
    direction: ltr;
    letter-spacing: 0;
    text-align: center;
    font-size: 23px;
    font-weight: 400;
    line-height: 120%;
  }

  .bee-row-5 .bee-col-1 .bee-block-1 a {
    color: #8a3c90;
  }

  .bee-row-5 .bee-col-1 .bee-block-1 p:not(:last-child) {
    margin-bottom: 15px;
  }

  .bee-row-7 .bee-col-1 .bee-block-1 .bee-icon-image {
    padding: 5px 6px 5px 5px;
  }

  .bee-row-7 .bee-col-1 .bee-block-1 .bee-icon:not(.bee-icon-first) .bee-content {
    margin-left: 0;
  }

  .bee-row-7 .bee-col-1 .bee-block-1 .bee-icon::not(.bee-icon-last) .bee-content {
    margin-right: 0;
  }
</style>
</head>

<body>
<div class="bee-page-container">
  <div class="bee-row bee-row-1">
    <div class="bee-row-content">
      <div class="bee-col bee-col-1 bee-col-w12">
        <div class="bee-block bee-block-1 bee-image"><img alt="" class="bee-center bee-fixedwidth" src="https://app.nailted.com/es/assets/images/nailted.png" style="max-width: 448px" /></div>
        <div class="bee-block bee-block-2 bee-paragraph">
          <p>Más que una herramienta, una manera de hacer las cosas</p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
  <div style="border-color: #4294e3; border-width: 4px; border-style: solid; border-radius: 20px; margin: 20px; background-color: white">
    <div class="bee-block bee-block-3 bee-heading">
      <h1 style="color: #000000; direction: ltr; font-family: 'Ubuntu', Tahoma, Verdana, Segoe, sans-serif; font-size: 50px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 20px; margin-bottom: 0"><span class="tinyMce-placeholder">Certificado</span></h1>
    </div>
    <div style="align-items: center; display: flex; justify-content: center">
      <p style="text-align: center">Este documento certifica que ha realizado con éxito nuestro formulario de cultura empresarial</p>
    </div>

    <div class="bee-row bee-row-2">
      <div class="bee-row-content">
        <div class="bee-col bee-col-1 bee-col-w12">
          <div class="bee-block bee-block-1 bee-heading">
            <h3 style="color: #0787c3; direction: ltr; font-family: 'Ubuntu', Tahoma, Verdana, Segoe, sans-serif; font-size: 24px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 20px; margin-bottom: 0"><span class="tinyMce-placeholder">Resultado General</span></h3>
          </div>
          <div class="bee-block bee-block-2 bee-html-block">
            <div style="background-color: #199bf; color: white; border-radius: 100%; width: 200px; padding: 20px; height: 200px; line-height: 150px; margin: 0px auto; font-weight: bold; font-size: 55px">${Math.ceil(dataResults.globalScore)}%</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bee-row bee-row-3">
      <div class="bee-row-content" style="display: flex; flex-direction: row; justify-content: space-around">
      ${generateCategoryListPdf(dataResults.categoryScore)}
      </div>
    </div>
    <div class="bee-row bee-row-4">
      <div class="bee-row-content">
        <div class="bee-col bee-col-1 bee-col-w4">
          <div class="bee-block bee-block-1 bee-paragraph" style="display: flex; flex-direction: column">
            <p>Fecha</p>
            <p style="margin-top: 15px">22/07/2023</p>
          </div>
        </div>
        <div class="bee-col bee-col-2 bee-col-w4">
          <div class="bee-block bee-block-1 bee-image"><img alt="" class="bee-center bee-fixedwidth" src="./imgPdf/badge.svg" style="max-width: 149px" /></div>
        </div>
        <div class="bee-col bee-col-3 bee-col-w4">
          <div class="bee-block bee-block-1 bee-paragraph" style="display: flex; flex-direction: column; align-items: center">
            <p>Firma</p>
            <img alt="" class="bee-center bee-autowidth" src="./imgPdf/signature.png" style="max-width: 198px" />
          </div>
        </div>
      </div>
    </div>
    <div class="bee-row bee-row-5">
      <div class="bee-row-content">
        <div class="bee-col bee-col-1 bee-col-w4">
          <div class="bee-block bee-block-1 bee-paragraph"></div>
        </div>
        <div class="bee-col bee-col-2 bee-col-w4">
          <div class="bee-block bee-block-1 bee-spacer">
            <div class="spacer" style="height: 60px"></div>
          </div>
        </div>
        <div class="bee-col bee-col-3 bee-col-w4">
          <div class="bee-block bee-block-1 bee-image"></div>
        </div>
      </div>
    </div>
    <div class="bee-row bee-row-6">
      <div class="bee-row-content">
        <div class="bee-col bee-col-1 bee-col-w12">
          <div class="bee-block bee-block-1 bee-paragraph">
            <p>"La plataforma de employee engagement para equipos exigentes que buscan la mejor experiencia de empleado"</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <div class="bee-row bee-row-7">
      <div class="bee-row-content">
        <div class="bee-col bee-col-1 bee-col-w12">
          <div class="bee-block bee-block-1 bee-icons" id="beepro-locked-footer">
            <div class="bee-icon bee-icon-last"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</body>
</html>`;

  const browser = await puppeteer.launch({
    headless: "new",
    ignoreHTTPSErrors: true,
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();

  await page.setContent(htmlContent, {
    waitUntil: "domcontentloaded",
  });

  const pdfBuffer = await page.pdf({ format: "A4" });

  await browser.close();

  return pdfBuffer;
};

export default generateDataResultsPdf;
