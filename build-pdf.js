// Renders index.html to a print-quality A4 PDF using headless Chrome.
// Output filename can be overridden via the first CLI arg (defaults to Andrei-Cristea-Resume.pdf).
const puppeteer = require('puppeteer');
const path = require('path');

const OUT = process.argv[2] || 'Andrei-Cristea-Resume.pdf';
const HTML = path.resolve(__dirname, 'index.html');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  try {
    const page = await browser.newPage();
    // file:// load lets relative asset paths (assets/photo.jpg) resolve.
    await page.goto('file://' + HTML, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: OUT,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true, // honor the @page rule in the resume's CSS
    });
    console.log('Wrote ' + OUT);
  } finally {
    await browser.close();
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
